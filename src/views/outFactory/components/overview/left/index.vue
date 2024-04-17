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
const topTips = storeExcelDataMap["综合态势"]["topTips"]
// @ts-ignore
const consumptionCost = storeExcelDataMap["综合态势"]["overflowLeft1"]
// @ts-ignore
const consumptionTitle = storeExcelDataMap["综合态势"]["overflowLeft1Tips"]
// @ts-ignore
const consumptionquyu = storeExcelDataMap["综合态势"]["overflowLeft2"]
// @ts-ignore
const consumptionquyuTitle = storeExcelDataMap["综合态势"]["overflowLeft2Tips"]

// 拿到能耗统计的初始数据
const getconsumptionCostData = (data: any) => {
    const newArray = [];
    // 每七个元素为一组
    for (let i = 0; i < data.length; i += 8) {
        const group = data.slice(i, i + 8); // 提取每组的七个元素
        // 提取每组的value值并筛选非空值
        const values = group.map((item: any) => item.value).filter((value: any) => value !== null);
        // 将非空值添加到新数组中
        if (values.length > 0) {
            newArray.push(values);
        }
    }
    return newArray;
}
// 给能耗统计的初始数据中添加title
const consumptionCostTitle = (data: any) => {
    const newArray = [];
    for (let i = 0; i < getconsumptionCostData(data).length; i += 3) {
        const group = getconsumptionCostData(data).slice(i, i + 3); // 提取每组的三个数组

        // 在每组数组的第一个位置依次添加要添加的值
        for (let j = 0; j < group.length; j++) {
            group[j].unshift(consumptionTitle[i / 3].value);
        }
        // 将处理后的组添加到新数组中
        newArray.push(group);
    }
    return newArray;
}

// 获取当前日期
const Date = ref("day");

const currentDate = (date: string) => {
    Date.value = date;
}

// 能耗统计数据处理
const handleconsumption = () => {
    const original = consumptionCostTitle(consumptionCost).slice(0, 3).flatMap(item => [...item]);
    // 构造结果对象
    const result = {
        day: [],
        month: [],
        year: []
    };
    original.forEach(item => {
        const [key, period, value, unit, target, targetDirection, percentage, percentageUnit] = item;
        const imgUrl = `/src/assets/images/${key}.png`;
        // 构造日、月、年的数据格式
        const dataItem = {
            imgUrl,
            name: key,
            num: value.trim(), // 去除首尾空格
            unit: unit,
            target: targetDirection, // 上升下降情况
            percentage: percentage
        };
        // 将构造好的数据放入对应的数组中
        if (period === '日') {
            result.day.push(dataItem);
        } else if (period === '月') {
            result.month.push(dataItem);
        } else if (period === '年') {
            result.year.push(dataItem);
        }
    })
    return result
}

function removeCommasAndParseInt(str: String) {
    // 使用正则表达式去除字符串中的逗号
    const stringWithoutCommas = str.replace(/,/g, '');
    // 将去除逗号后的字符串转换为整数类型
    const number = parseInt(stringWithoutCommas);
    return number;
}

// 处理能源费用统计问题
const handleEnergycosts = () => {
    const original = consumptionCostTitle(consumptionCost).slice(3, 7).flatMap(item => [...item]);
    // 构造结果对象
    const result = {
        day: [],
        month: [],
        year: []
    };
    original.forEach(item => {
        const [key, period, value, unit] = item;
        // 构造日、月、年的数据格式
        const dataItem = {
            name: key,
            value: removeCommasAndParseInt(value), // 去除首尾空格
            unit: unit,
        };
        // 将构造好的数据放入对应的数组中
        if (period === '日') {
            result.day.push(dataItem);
        } else if (period === '月') {
            result.month.push(dataItem);
        } else if (period === '年') {
            result.year.push(dataItem);
        }
    })
    return result
}

// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (Date.value) {
        case 'day':
            return handleEnergycosts().day;
        case 'month':
            return handleEnergycosts().month;
        case 'year':
            return handleEnergycosts().year;
        default:
            return [];
    }
});

// 处理区域能耗模块的数据
// 处理表格的title数据
const handleEnetgyTitle = () => {
    const valuesArray = consumptionquyuTitle
        .map((item: any) => item.value)
        .filter((value: string) => value !== null && value !== undefined && value !== '');

    // 去重操作
    const uniqueValuesArray = [...new Set(valuesArray)];
    return uniqueValuesArray;
}
// 处理表格的内容数据
const handleEnetgyData = () => {
    // 初始化处理后的数据结构
    const result = {
        day: [],
        month: [],
        year: []
    };
    consumptionquyu.forEach((dataItem: any) => {
        // day数组中的元素数据
        const dayData = dataItem.slice(0, 5);
        // month数组中的元素数据
        const monthData = dataItem.slice(0, 3).concat(dataItem[5], dataItem[6]);
        // year数组中的元素数据
        const yearData = dataItem.slice(0, 3).concat(dataItem[7], dataItem[8]);

        // 过滤掉空值
        const dayDataMap = dayData.map((item: any) => item.value).filter((value: any) => value !== null)
        const monthDataMap = monthData.map((item: any) => item.value).filter((value: any) => value !== null);
        const yearDataMap = yearData.map((item: any) => item.value).filter((value: any) => value !== null);
        // 判断是否为空，如果为空则不放入数组中
        if (dayDataMap.length > 0) {
            result.day.push(dayData.map(item => item.value));
        }
        if (monthDataMap.length > 0) {
            result.month.push(monthData.map(item => item.value));
        }
        if (yearDataMap.length > 0) {
            result.year.push(yearData.map(item => item.value));
        }
    });
    return result;
}
</script>

<template>
    <div class="outFactory-overview-left">
        <div class="statistics">
            <NengLiang :storeExcelDataMap="handleconsumption()" @nengliang-date="currentDate" :title="topTips[0].value"></NengLiang>
        </div>
        <div class="cost">
            <NengYuan :storeExcelDataMap="filteredData" :title="handleEnergycosts().day[0].name"></NengYuan>
        </div>
        <div class="energy">
            <QuYu :storeExcelDataMap="handleEnetgyData()" :menu="handleEnetgyTitle()" :title="topTips[1].value"></QuYu>
        </div>
    </div>
</template>
