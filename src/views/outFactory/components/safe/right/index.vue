<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-safe-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .apply{
        width: 100%;
        height: 202px;
    }
    .alarm {
        width: 100%;
        height: 234px;
    }
    .realTime {
        width: 100%;
        height: 456px;
    }
}
</style>
  
<script setup lang='ts'>
import { ref } from "vue";
import Apply from "./components/apply.vue"
import ALarm from "./components/alarm.vue"
import RealTime from "./components/realTime.vue"


// 模拟实时告警数据，使用的是综合态势的数据，后期替换
// 综合态势 数据
import { storeExcelData } from "@/store/modules/excel";

type OverView = {
  [key: string]: any[]
}

// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();
const overview: OverView = storeExcelDataMap['综合态势'] as { [key: string]: any[] };
const Alarm = overview.overflowRight3
    .map((item: any[]) => Object.values(item)
    .filter((msg) => msg.value).map((context) => context.value))
    .filter((everyItem: any[]) => everyItem.length !== 0);

// 综合告警
const alarmInfo = ref(Alarm)
</script>
  
<template>
    <div class='outFactory-safe-right'>
        <div class="apply">
            <Apply></Apply>
        </div>
        <div class="alarm">
            <ALarm></ALarm>
        </div>
        <div class="realTime">
            <RealTime :alarmInfo="alarmInfo"></RealTime>
        </div>
    </div>
</template>