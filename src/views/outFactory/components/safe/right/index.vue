<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-safe-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .apply {
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

type SafeManage = {
    [key: string]: any[]
}

// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// 安防 顶部模块 titles
const topTips = ref([...storeExcelDataMap["安防管理"]["topTips"]]);

// 安防管理
const safeManage: SafeManage = storeExcelDataMap['安防管理'] as { [key: string]: any[] };
// 实时
const realTime = safeManage.safeRight5.map((item: any[]) => Object.values(item)
    .filter((msg) => msg.value).map((content) => content.value))
    .filter((everyItem: any[]) => everyItem.length !== 0);

// 实时告警
const realTimeInfo = ref(realTime)
// 资源使用 情况
const applyInfo = ref(safeManage.safeRight1)

// 告警统计
const aLarm = ref({
    // 顶部 告警统计
    topInfo: safeManage.safeRight2,
    title: safeManage.safeRight2Tips[0].value,
    // 报警的详情
    content: safeManage.safeRight3,
})


// console.log('告警统计:',aLarm);
</script>
  
<template>
    <div class='outFactory-safe-right'>
        <div class="apply">
            <Apply :title="topTips[2].value" :applyInfo="applyInfo"></Apply>
        </div>
        <!-- 告警统计 -->
        <div class="alarm">
            <ALarm :title="topTips[3].value" :aLarm="aLarm" :centerTitle="aLarm.title"></ALarm>
        </div>
        <div class="realTime">
            <RealTime :title="topTips[4].value" :alarmInfo="realTimeInfo"></RealTime>
        </div>
    </div>
</template>