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

// 获取右侧列表数据
 // @ts-ignore
const Monitor = storeExcelDataMap['综合态势']['视频监控']
 // @ts-ignore
const Summarize = storeExcelDataMap['综合态势']['设备概况']
 // @ts-ignore
const Alarm = storeExcelDataMap['综合态势']['综合告警']

console.log(Summarize)

// 监控信息
const monitorInfo = ref({
  png: "摄像头",
  list: [
    { tips: "监控总数", num: Monitor.监控总数.value },
    { state: "在线", icon: 'online', num: Monitor.在线.value },
    { state: "离线", icon: 'offline', num: Monitor.离线.value },
  ],
})

// 设备概括
const summarizeInfo = ref({
  png: "设备",
  list: [
    { tips: "设备总数", num: Summarize.设备总数.value },
    { state: "运行", icon: 'doing', num: Summarize.运行.value },
    { state: "待机", icon: 'standby', num: Summarize.待机.value },
    { state: "告警", icon: 'warning', num: Summarize.告警.value },
  ],
})

// 获取设备概况图表数据
const getSummarizeChart = (data: any) => {
  const formattedData = [];
  for (const key in data) {
    if (data.hasOwnProperty(key) && (key === "维修保养" || key === "人工停机" || key === "工艺调整" || key === "更换耗材")) {
      formattedData.push({ name: key, value: parseInt(data[key].value) });
    }
  }
  return formattedData;
}
console.log(getSummarizeChart(Summarize))

</script>

<template>
  <div class="outFactory-overview-right">
    <!-- 视频监控 -->
    <div class="monitor">
      <OutFactoryMonitor :monitorInfo="monitorInfo" />
    </div>
    <div class="summarize">
      <!-- 设备概括 -->
      <OutFactorySummarize :summarizeInfo="summarizeInfo"  />
    </div>
    <div class="alarm">
      <OutFactoryAlarm></OutFactoryAlarm>
    </div>
  </div>
</template>
