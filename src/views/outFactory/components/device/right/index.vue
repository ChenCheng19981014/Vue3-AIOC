<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-device-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .shutdown {
        width: 100%;
        height: 190px;
    }
    .maintenance {
        width: 100%;
        height: 246px;
    }
    .alarm {
        width: 100%;
        height: 456px;
    }
}
</style>
  
<script setup lang='ts'>
import { ref } from 'vue';
import ShouDown from "./components/shutdown.vue"
import Maintenance from "./components/maintenance.vue"
import ALarm from "./components/alarm.vue"


type OverView = {
  [key: string]: any[]
}
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// 综合态势 数据
const overview: OverView = storeExcelDataMap['综合态势'] as { [key: string]: any[] };
// 获取能耗及费用统计信息
// @ts-ignore
const consumptionquyu = storeExcelDataMap["综合态势"]["overflowLeft2"]
// @ts-ignore
const consumptionquyuTitle = storeExcelDataMap["综合态势"]["overflowLeft2Tips"]

// 综合告警
const Alarm = overview.overflowRight3.map((item: any[]) => Object.values(item).filter((msg) => msg.value).map((context) => context.value)).filter((everyItem: any[]) => everyItem.length !== 0);
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
        day: [] as any[],
        month: [] as any[],
        year: [] as any[]
    };
    consumptionquyu.forEach((dataItem: any) => {
        // day数组中的元素数据
        const dayData = dataItem.slice(0, 5);
        // month数组中的元素数据
        const monthData = dataItem.slice(0, 3).concat(dataItem[5], dataItem[6]);
        // year数组中的元素数据
        const yearData = dataItem.slice(0, 3).concat(dataItem[7], dataItem[8]);

        // 过滤掉空值
        const dayDataMap = dayData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '')
        const monthDataMap = monthData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '')
        const yearDataMap = yearData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '');
        // 判断是否为空，如果为空则不放入数组中
        if (dayDataMap.length > 0) {
            result.day.push(dayData.map((item: any) => item.value));
        }
        if (monthDataMap.length > 0) {
            result.month.push(monthData.map((item: any) => item.value));
        }
        if (yearDataMap.length > 0) {
            result.year.push(yearData.map((item: any) => item.value));
        }
    });
    return result;
}


// 综合告警
const alarmInfo = ref(Alarm)

</script>
  
<template>
    <div class='outFactory-device-right'>
        <!-- 设备停机原因占比 -->
        <div class="shutdown">
            <ShouDown></ShouDown>
        </div>
        <!-- 维保计划 -->
        <div class="maintenance">
            <Maintenance :storeExcelDataMap="handleEnetgyData()" :menu="handleEnetgyTitle()"></Maintenance>
        </div>
        <!-- 实时告警 -->
        <div class="alarm">
            <ALarm :alarmInfo="alarmInfo"></ALarm>
        </div>
    </div>
</template>