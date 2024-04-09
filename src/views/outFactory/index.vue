<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory {
    width: 100%;
    height: 100%;
    @include center;

    .tips {
        @include tips
    }

    .btn {
        position: fixed;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;

        >button {
            color: black;
        }
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";
import { excelDataMap } from "@/constant/excel.js";
import { storeExcelData } from "@/store/modules/excel";

import OverviewLeft from "@/views/outFactory/components/overview/left/index.vue";
import OverviewRight from "@/views/outFactory/components/overview/right/index.vue";

import SafeLeft from "@/views/outFactory/components/safe/left/index.vue";
import SafeRight from "@/views/outFactory/components/safe/right/index.vue";

import EnergyLeft from "@/views/outFactory/components/energy/left/index.vue";
import EnergyRight from "@/views/outFactory/components/energy/right/index.vue";


import DeviceLeft from "@/views/outFactory/components/device/left/index.vue";
import DeviceRight from "@/views/outFactory/components/device/right/index.vue";


// 表格仓库 信息
const { updataExcelData } = storeExcelData();

// 默认选中那个
const tabState = ref(0);

// excel数据
const excellist = ref<string[]>([]);

// tabs 选项
const tabInfo = reactive({
    综合态势: {},
    安防管理: {},
    能源管理: {},
    设备管理: {},
});

onMounted(() => {
    // 读 excel
    readerExcel();
});

watch(excellist, () => {
    // 获取 excel 数据
    loadExcelNumDate();
});

/**
 *  @Author: cc
 *  @description:  切换 tabs 
 */
const changeTab = (name: string, val: object, index: number) => {
    tabState.value = index;
    // console.log("name:", name, index);
};

// 数组 填充
const fillArrays = (data: string[] | number[] | any[]) => {
    const maxLength = Math.max(...data.map((arr) => arr.length)); // 找到最长的数组长度
    return data.map((arr) => {
        const diff = maxLength - arr.length; // 计算需要填充的数量
        if (diff > 0) {
            // 填充 null
            return arr.concat(Array(diff).fill(null));
        } else {
            return arr;
        }
    });
};

// 读 excel
const readerExcel = async () => {
    // const response = await axios.get("./excel/AIOC.xlsx", {
    //   responseType: "arraybuffer",
    // });
    const response = await axios.get("./excel/测试.xls", {
        responseType: "arraybuffer",
    });
    const data = new Uint8Array(response.data);
    const workbook = XLSX.read(data, { type: "array" }); // 使用 'array' 类型解析
    const wsname = workbook.SheetNames[0]; //取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
    const arr = [];
    //生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {
        header: 1,
        raw: false,
    });

    //编辑数据
    for (var i = 0; i < ws.length; i++) {
        arr.push(ws[i] as string);
    }

    excellist.value = fillArrays(arr);
    // console.log("第一个表名：", wsname, "\n读取结果", [...excellist.value]);
};

// 根据 position 获取对应值
const getValueByPosition = (position: number[]) => {
    const [row, col] = position;
    return [...excellist.value][row][col];
};

// get 获取 数据
const loadExcelNumDate = () => {
    for (const category in excelDataMap) {
        const categoryData = excelDataMap[category];
        for (const timeFrame in categoryData) {
            const timeFrameData = categoryData[timeFrame];
            for (const key in timeFrameData) {
                const { position } = timeFrameData[key];
                // 获取值并更新 dataMap
                excelDataMap[category][timeFrame][key].value =
                    getValueByPosition(position);
            }
        }
    }

    //更新 本地存储值
    updataExcelData(excelDataMap);
    console.log("表格数据:", excelDataMap);
};


</script>

<template>
    <!-- 外场 总组件 -->
    <div class="outFactory">
        <!-- 左弹窗 -->
        <trans :showIndex="tabState" direction="left" :slotNumber="4">
            <!-- 左1 -->
            <template v-slot:slot-0>
                <OverviewLeft />
            </template>

            <!-- 左2 -->
            <template v-slot:slot-1>
                <SafeLeft />
            </template>

            <!-- 左1 -->
            <template v-slot:slot-2>
                <EnergyLeft />
            </template>

            <!-- 左2 -->
            <template v-slot:slot-3>
                <DeviceLeft />
            </template>
        </trans>

        <!-- 右弹窗 -->
        <trans :showIndex="tabState" direction="right" :slotNumber="4">
            <!-- 右1 -->
            <template v-slot:slot-0>
                <OverviewRight />
            </template>

            <!-- 右2 -->
            <template v-slot:slot-1>
                <SafeRight />
            </template>

            <!-- 右3 -->
            <template v-slot:slot-2>
                <EnergyRight />
            </template>

            <!-- 右4 -->
            <template v-slot:slot-3>
                <DeviceRight />
            </template>
        </trans>

        <!-- 测试 btn -->
        <div @pointerdown="(e) => e.stopPropagation()" class="btn">
            <button v-for="(val, key, _) in tabInfo" @click="changeTab(key, val, _)">
                {{ key }}
            </button>
        </div>

        <!-- <div class="tips">测试文字...</div> -->
    </div>
</template>