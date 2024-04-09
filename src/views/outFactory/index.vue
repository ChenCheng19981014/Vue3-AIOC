<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory {
    width: 100%;
    height: 100%;
    @include center;

    .tips {
        font-size: 50px;
        font-family: "pm1";
        color: #ffffff;
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";
import { excelDataMap } from "@/constant/excel.js";
import {storeExcelData} from '@/store/modules/excel'

// 表格仓库 信息
const { updataExcelData } = storeExcelData();

// excel数据
const excellist = ref<string[]>([]);

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
    const arr = []
    //生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {
        header: 1,
        raw: false,
    });

    //编辑数据
    for (var i = 0; i < ws.length; i++) {
        arr.push(ws[i] as string);
    }

    // console.log("第一个表名：", wsname, "\n读取结果", excellist.value);

    excellist.value = fillArrays(arr);

    // console.log('表格数据:', [...excellist.value]);
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
                excelDataMap[category][timeFrame][key].value = getValueByPosition(position);
            }
        }
    }

    //更新 本地存储值
    updataExcelData(excelDataMap)

    console.log('表格数据:', excelDataMap,updataExcelData);
}

watch(excellist, () => {
    // 获取 excel 数据
    loadExcelNumDate()
})

onMounted(() => {
    // 读 excel 
    readerExcel();

});
</script>

<template>
    <div class="outFactory">
        <div class="tips">测试文字...</div>
    </div>
</template>
