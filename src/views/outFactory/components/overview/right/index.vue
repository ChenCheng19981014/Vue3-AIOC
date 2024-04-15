<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-overview-right {
  width: 430px;
  height: 940px;
  @include tips;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .monitor {
    width: 100%;
    height: 130px;
  }

  .summarize {
    width: 100%;
    height: 296px;
  }

  .alarm {
    width: 100%;
    height: 456px;
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import OutFactoryMonitor from "@/views/outFactory/components/overview/right/components/monitor.vue";
import OutFactoryAlarm from "@/views/outFactory/components/overview/right/components/alarm.vue";
import OutFactorySummarize from "@/views/outFactory/components/overview/right/components/summarize.vue";
import { storeExcelData } from "@/store/modules/excel";

// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// const energyStatistics = ref<any[]>([])

// energyStatistics.value = storeExcelDataMap['能耗统计'];

// console.log("仓库信息:", storeExcelDataMap);


// 监控信息
const monitorInfo = ref({
  png: "摄像头",
  list: [
    { tips: "监控总数", num: 324 },
    { state: "在线", icon: 'online', num: 42 },
    { state: "离线", icon: 'offline', num: 3 },
  ],
})

// 设备概括
const summarizeInfo = ref({
  png: "设备",
  list: [
    { tips: "设备总数", num: 124 },
    { state: "运行", icon: 'doing', num: 100 },
    { state: "待机", icon: 'standby', num: 23 },
    { state: "告警", icon: 'warning', num: 1 },
  ],
})

</script>

<template>
  <div class="outFactory-overview-right">
    <!-- 视频监控 -->
    <div class="monitor">
      <OutFactoryMonitor :monitorInfo="monitorInfo" />
    </div>
    <div class="summarize">
      <!-- 设备概括 -->
      <OutFactorySummarize :summarizeInfo="summarizeInfo" />
    </div>
    <div class="alarm">
      <OutFactoryAlarm></OutFactoryAlarm>
    </div>
  </div>
</template>
