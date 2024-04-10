<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory {
    width: 100%;
    height: 100%;
    @include center;

    .tips {
        @include tips;
    }

    .btn {
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 500px;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;

        >button {
            width: 120px;
            height: 50px;
            color: black;
        }
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

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


// 假设 getRouterIndex 函数返回一个包含 index 属性的对象
interface RouterIndex {
    index: number;
}

const route = useRoute(); // 查值
const router = useRouter(); // 跳转 功能

// console.log('route:', route, route.query);

// 表格仓库 信息
const { updataExcelData } = storeExcelData();

// excel数据
const excellist = ref<string[]>([]);

// tabs 选项
const tabInfo = reactive({
    综合态势: {
        mode: "overview",
    },
    安防管理: {
        mode: "safe",
    },
    能源管理: {
        mode: "energy",
    },
    设备管理: {
        mode: "device",
    },
});

// 当前的 模块
const mode = route.params.mode as string;

// 获取 路由 对应的索引
const getRouterIndex = (mode: string) => {
    let foundObject = null; // 初始时没有找到任何对象
    // 遍历 tabInfo 的键值对及其索引
    Object.entries(tabInfo).forEach(([key, value], index) => {
        // 如果当前键值对中的 mode 值等于要查找的 modeToFind
        if (value.mode === mode) {
            // 保存找到的对象及其索引
            foundObject = { key, value, index };
            // 找到后停止循环
            return;
        }
    });
    return foundObject;
};

// 获取 当前的索引
const routerIndex = getRouterIndex(mode) as unknown as RouterIndex; // 使用类型断言确定返回类型

// 默认选中那个
const tabState = ref(0);

tabState.value = routerIndex.index; // 现在可以安全地访问 index 属性

console.log( 'tabState.value :',tabState.value  );

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
    const { mode } = val as { [key: string]: string };
    tabState.value = index; // 设置显示 索引
    // console.log("模块:", name, "\n索引：", index, "\n值:", val, "\nmode:", mode);
    // 更新当前的模块
    router.replace({ params: { mode } });
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
    // console.log("表格数据:", excelDataMap);
};

// 监听 路由 变化 设置显示面板
watch(
    () => router.currentRoute.value.path,
    (toPath) => {
        // 模 式
        const { mode } = route.params;

        const foundObject = getRouterIndex(mode);

        const { key, value, index } = foundObject;

        // 通过路由 parmas进行判断 设置索引
        tabState.value = index;

        // 显示 对应的 左右侧模块
        changeTab(key, value, index);

        // console.log("跳转路由", toPath, '\n模式', mode, '\n索引:', index);
    },
    { deep: true }
);
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
    </div>
</template>