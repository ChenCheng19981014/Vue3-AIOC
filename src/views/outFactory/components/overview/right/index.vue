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

type OverView = {
  [key: string]: any[]
}

// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// @ts-ignore
// 获取顶部标题
const topTips = storeExcelDataMap["综合态势"]["topTips"]

// 综合态势 数据
const overview: OverView = storeExcelDataMap['综合态势'] as { [key: string]: any[] };

// 视频 监控
const Monitor = overview.overflowRight1.map((item: any[]) => Object.values(item).filter((msg) => msg.value).map((context) => context.value));

// 设备概括
const Summarize = overview.overflowRight2.map((item: any[]) => Object.values(item).filter((msg) => msg.value).map((context) => context.value));

// 综合告警
const Alarm = overview.overflowRight3.map((item: any[]) => Object.values(item).filter((msg) => msg.value).map((context) => context.value)).filter((everyItem: any[]) => everyItem.length !== 0);

// 监控信息
const monitorInfo = ref({
  png: "摄像头",
  list: Monitor.map((item: string[], index: number) => {
    if (index === 0) {
      return { tips: item[0], num: item[1] }
    } else {
      return { state: item[0], icon: item[0] === '离线' ? 'offline' : 'online', num: item[1] }
    }
  }),
})

// 设备概括
const summarizeInfo = ref({
  png: "设备",
  list: Summarize.slice(0, 4).map((item: string[], index: number) => {
    if (index >= 4) return
    if (index === 0) {
      return { tips: item[0], num: item[1] }
    } else {
      return { state: item[0], icon: item[0] === '运行' ? 'doing' : item[0] === '待机' ? 'standby' : "warning", num: item[1] }
    }
  }),
})

// 综合告警
const alarmInfo = ref(Alarm)

// 获取设备概况图表数据
const getSummarizeChart = (data: any) => {
  // 截取最后四个数组
  const lastFourData = data.slice(-4);
  // 对最后四个数组进行处理
  const processedData = lastFourData.map((item: any) => {
    const [name, value] = item;
    return { name, value: parseFloat(value) };
  });
  return processedData;
}

</script>

<template>
  <div class="outFactory-overview-right">
    <!-- 视频监控 -->
    <div class="monitor">
      <OutFactoryMonitor :monitorInfo="monitorInfo" :title="topTips[2].value" />
    </div>
    <div class="summarize">
      <!-- 设备概括 -->
      <OutFactorySummarize :chartData="getSummarizeChart(Summarize)" :summarizeInfo="summarizeInfo" :title="topTips[3].value" />
    </div>
    <div class="alarm">
      <OutFactoryAlarm :alarmInfo="alarmInfo" :title="topTips[4].value"></OutFactoryAlarm>
    </div>
  </div>
</template>
