<!-- 区域消耗 -->
<template>
    <div class="quyu">
        <title-type-time :tips="'区域消耗'" @delivery-date="handleData">
            <div class="table-list-qu">
                <!-- <table-list :menu="tablelist.menu" :columns="filteredData" :currentHight="288"></table-list> -->
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
// 列表 类型
type tableListType = {
    [key: string]: any
}
// props
const { storeExcelDataMap } = defineProps(['storeExcelDataMap']);

// const table = storeExcelDataMap.storeExcelDataMap['区域能耗'];

const table = storeExcelDataMap['区域能耗'];

// console.log('table:', table,);


// 模拟数据
// const tablelist = reactive({
//     menu: ["能耗区域", "能耗品类", "能耗用量", "能耗费用(元)"],
//     day: table.map((item: tableListType, _: string) => {
//         const { area, type, unit, dayUse, dayCost } = item;

//         if (area.value == null && type.value == null && unit.value == null && dayUse.value == null && dayCost.value == null) return null; // 返回 null 表示跳过当前项

//         // 创建一个空数组，用于收集有效的对象
//         const validItems = [];

//         if (area.value !== null) {
//             validItems.push({ name: { field: area.value } });
//         }
//         if (type.value !== null && unit.value !== null) {
//             validItems.push({ type: { field: `${type.value} ${unit.value}` } });
//         }
//         if (dayUse.value !== null) {
//             validItems.push({ value: { field: dayUse.value } });
//         }
//         if (dayCost.value !== null) {
//             validItems.push({ money: { field: dayCost.value } });
//         }

//         return Object.assign({}, ...validItems); // 合并有效的对象并返回

//     }).filter((item: tableListType) => item !== null), // 过滤掉返回值为 null 的项


//     month: table.map((item: tableListType, _: string) => {
//         const { area, type, unit, monthUse, monthCost } = item;

//         if (area.value == null && type.value == null && unit.value == null && monthUse.value == null && monthCost.value == null) return null; // 返回 null 表示跳过当前项

//         // 创建一个空数组，用于收集有效的对象
//         const validItems = [];

//         if (area.value !== null) {
//             validItems.push({ name: { field: area.value } });
//         }
//         if (type.value !== null && unit.value !== null) {
//             validItems.push({ type: { field: `${type.value} ${unit.value}` } });
//         }
//         if (monthUse.value !== null) {
//             validItems.push({ value: { field: monthUse.value } });
//         }
//         if (monthCost.value !== null) {
//             validItems.push({ money: { field: monthCost.value } });
//         }

//         return Object.assign({}, ...validItems); // 合并有效的对象并返回

//     }).filter((item: tableListType) => item !== null), // 过滤掉返回值为 null 的项

//     year: table.map((item: tableListType, _: string) => {
//         const { area, type, unit, yearUse, yearCost } = item;

//         if (area.value == null && type.value == null && unit.value == null && yearUse.value == null && yearCost.value == null) return null; // 返回 null 表示跳过当前项

//         // 创建一个空数组，用于收集有效的对象
//         const validItems = [];

//         if (area.value !== null) {
//             validItems.push({ name: { field: area.value } });
//         }
//         if (type.value !== null && unit.value !== null) {
//             validItems.push({ type: { field: `${type.value} ${unit.value}` } });
//         }
//         if (yearUse.value !== null) {
//             validItems.push({ value: { field: yearUse.value } });
//         }
//         if (yearCost.value !== null) {
//             validItems.push({ money: { field: yearCost.value } });
//         }

//         return Object.assign({}, ...validItems); // 合并有效的对象并返回

//     }).filter((item: tableListType) => item !== null), // 过滤掉返回值为 null 的项

// })

// 传递过来的时间单位，默认是日
let timeUnit = ref('day');
// 处理子组件传递过来的时间
const handleData = (time: string) => {
    timeUnit.value = time;
}
// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (timeUnit.value) {
        case 'day':
            return tablelist.day;
        case 'month':
            return tablelist.month;
        case 'year':
            return tablelist.year;
        default:
            return [];
    }
});
</script>

<style scoped lang="scss">
.quyu {
    width: 100%;
    height: 100%;

    .table-list-qu {
        width: 100%;
        height: 100%;
        padding-top: 16px;
    }
}
</style>
