<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-energy-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .cost {
        width: 100%;
        height: 334px;
    }
    .quyu {
        width: 100%;
        height: 182px;
    }
    .alarm {
        width: 100%;
        height: 374px;
    }
}
</style>
  
<script setup lang='ts'>
import { ref } from 'vue';
import Cost from './components/cost.vue'
import QuYu from './components/quyu.vue'
import AlArm from './components/alarm.vue'


// 使用综合态势模拟数据，真实数据需要删除
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();
// @ts-ignore
const consumptionquyu = storeExcelDataMap["综合态势"]["overflowLeft2"]
// @ts-ignore
const consumptionquyuTitle = storeExcelDataMap["综合态势"]["overflowLeft2Tips"]

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
        const dayDataMap = dayData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '')
        const monthDataMap = monthData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '')
        const yearDataMap = yearData.map((item: any) => item.value).filter((value: any) => value !== null && value !== undefined && value !== '');
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


type SafeManage = {
    [key: string]: any[]
}

// 安防管理
const safeManage: SafeManage = storeExcelDataMap['安防管理'] as { [key: string]: any[] };
// 实时
const realTime = safeManage.safeRight5.map((item: any[]) => Object.values(item)
    .filter((msg) => msg.value).map((content) => content.value))
    .filter((everyItem: any[]) => everyItem.length !== 0);
// 实时告警
const realTimeInfo = ref(realTime)


</script>
  
<template>
    <div class='outFactory-energy-right'>
        <!-- 能耗费用趋势 -->
        <div class="cost">
            <Cost></Cost>
        </div>
        <!-- 区域能耗 -->
        <div class="quyu">
            <QuYu :storeExcelDataMap="handleEnetgyData()" :menu="handleEnetgyTitle()"></QuYu>
        </div>
        <!-- 实时告警 -->
        <div class="alarm">
            <AlArm :alarmInfo="realTimeInfo"></AlArm>
        </div>
    </div>
</template>