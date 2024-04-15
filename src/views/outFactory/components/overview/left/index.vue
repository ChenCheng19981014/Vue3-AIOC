<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-overview-left {
    width: 430px;
    height: 940px;
    // background-color: #333;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .statistics {
        width: 100%;
        height: 262px;
    }

    .cost {
        width: 100%;
        height: 248px;
    }

    .energy {
        width: 100%;
        height: 374px;
    }
}
</style>

<script setup lang="ts">
import { ref, computed } from "vue";
import NengLiang from "./components/nengliang.vue";
import NengYuan from "./components/nengyuan.vue";
import QuYu from "./components/quyu.vue";
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// 获取能耗及费用统计信息
// @ts-ignore
const consumptionCost = storeExcelDataMap['能耗统计']
console.log("总数据", consumptionCost)

// 获取当前日期
const Date = ref("day");
const currentDate = (date: string) => {
    Date.value = date;
}

// 能耗统计数据处理
const handleconsumption = (data: any) => {
    const result: any = {
        day: [],
        month: [],
        year: []
    }
    // 遍历接口数据，根据需要的格式返回新数据
    for (const key in data) {
        if (data.hasOwnProperty(key) && (key === "电能耗" || key === "水能耗" || key === "气能耗")) {
            const item = data[key];
            // 获取每个能耗类型的日、月、年数据
            const dayData = item.日.num;
            const monthData = item.月.num;
            const yearData = item.年.num;
            // 获取每个能耗类型的日、月、年数据单位
            const dayUnit = item.日.unit;
            const monthUnit = item.月.unit;
            const yearUnit = item.年.unit;
            // 获取每个能耗类型的日、月、年数据上升下降情况
            const dayTarget = item.日.target;
            const monthTarget = item.月.target;
            const yearTarget = item.年.target;
            // 获取每个能耗类型的日、月、年数据上升下降比例
            const dayTargetNum = item.日.targetNum;
            const monthTargetNum = item.月.targetNum;
            const yearTargetNum = item.年.targetNum;
            // 构造日、月、年的数据格式
            const dayItem = {
                imgUrl: `/src/assets/images/${key}.png`,
                name: key, // 名称
                num: dayData.value, // 数值
                unit: dayUnit.value, // 单位
                target: dayTarget.value, // 上升下降情况
                percentage: dayTargetNum.value // 上升下降比例
            };
            const monthItem = {
                imgUrl: `/src/assets/images/${key}.png`,
                name: key,
                num: monthData.value,
                unit: monthUnit.value,
                target: monthTarget.value,
                percentage: monthTargetNum.value
            };
            const yearItem = {
                imgUrl: `/src/assets/images/${key}.png`,
                name: key,
                num: yearData.value, 
                unit: yearUnit.value,
                target: yearTarget.value,
                percentage: yearTargetNum.value
            };

            // 将构造好的数据放入对应的数组中
            result.day.push(dayItem);
            result.month.push(monthItem);
            result.year.push(yearItem);
        }
    }
    return result;
}

function removeCommasAndParseInt(str: String) {
    // 使用正则表达式去除字符串中的逗号
    const stringWithoutCommas = str.replace(/,/g, '');
    // 将去除逗号后的字符串转换为整数类型
    const number = parseInt(stringWithoutCommas);
    return number;
}

// 处理能源费用统计问题
const handleEnergycosts =  (data: any) => {
    const result: any = {
        day: [],
        month: [],
        year: []
    }
    // 遍历接口数据，根据需要的格式返回新数据
    for (const key in data) {
        if (data.hasOwnProperty(key) && (key === "电费" || key === "水费" || key === "燃气费" || key === "能源费用统计")) {
            const item = data[key];
            // 获取每个能耗类型的日、月、年数据
            const dayData = item.日.num;
            const monthData = item.月.num;
            const yearData = item.年.num;
            // 获取每个能耗类型的日、月、年数据单位/比例
            const dayUnit = item.日.unit;
            const monthUnit = item.月.unit;
            const yearUnit = item.年.unit;
            // 构造日、月、年的数据格式
            const dayItem = {
                name: key, // 名称
                value: removeCommasAndParseInt(dayData.value) || 0, // 数值
                // value: parseInt(dayData.value), // 数值
                unit: dayUnit.value, // 单位
            };
            const monthItem = {
                name: key,
                value: removeCommasAndParseInt(monthData.value) || 0,
                unit: monthUnit.value,
            };
            const yearItem = {
                name: key,
                value: removeCommasAndParseInt(yearData.value) || 0, 
                unit: yearUnit.value,
            };

            // 将构造好的数据放入对应的数组中
            result.day.push(dayItem);
            result.month.push(monthItem);
            result.year.push(yearItem);
        }
    }
    return result;
}

// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (Date.value) {
        case 'day':
            return handleEnergycosts(consumptionCost).day;
        case 'month':
            return handleEnergycosts(consumptionCost).month;
        case 'year':
            return handleEnergycosts(consumptionCost).year;
        default:
            return [];
    }
});

</script>

<template>
    <div class="outFactory-overview-left">
        <div class="statistics">
            <NengLiang :storeExcelDataMap="handleconsumption(consumptionCost)" @nengliang-date="currentDate"></NengLiang>
        </div>
        <div class="cost">
            <NengYuan :storeExcelDataMap="filteredData"></NengYuan>
        </div>
        <div class="energy">
            <QuYu :storeExcelDataMap="storeExcelDataMap"></QuYu>
        </div>
    </div>
</template>
