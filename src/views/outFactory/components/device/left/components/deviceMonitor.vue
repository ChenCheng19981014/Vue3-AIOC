<style scoped lang="scss">
.deviceMonitor {
   width: 100%;
   height: 100%;

   .tips {
      width: 100%;
      height: 32px;
      background: url("@/assets/images/重点监控视频.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      >img {
         width: 100%;
         height: 100%;
      }
   }

   .deviceMonitor-tabs {
      margin-top: 16px;
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button {
         font-size: 14px;
         font-style: normal;
         font-weight: 500;
         width: 101.5px;
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 4px;
         border: 1px solid var(--color-basic-cyan-cyan-3-20, rgba(0, 255, 224, 0.2));
         background: linear-gradient(90deg);
         cursor: pointer;
      }

      .active {
         border: 1px solid var(--color-basic-cyan-cyan-1, #00ffe0);
         background: linear-gradient(0deg,
               rgba(34, 59, 96, 0.5) 0%,
               rgba(34, 59, 96, 0.5) 100%),
            linear-gradient(180deg);
         box-shadow: 0px 0px 12px 4px rgba(88, 145, 254, 0.83) inset;
      }
   }
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
   tabs: {
      type: Array,
      default: () => ["全部", "待机设备", "运行设备", "告警设备"],
   },
   dataList: {
      type: Array,
      default: () => [
         {
            machineName: "注塑机A101",
            line: "1号产线",
            employee: "王伟涛",
            grade: "故障",
            type1: "设备编号",
            deviceId: "SN12345",
            type2: "开机运行",
            runingTime: "10小时21分",
            type3: "维保截止",
            maintenanceTime: "2024-12-22",
            type4: "待机时长",
            standbyTime: "21分", // 8
         },
         {
            machineName: "注塑机A102",
            line: "2号产线",
            employee: "王伟涛",
            grade: "运行",
            type1: "设备编号",
            deviceId: "SN12345",
            type2: "开机运行",
            runingTime: "10小时21分",
            type3: "维保截止",
            maintenanceTime: "2024-12-22",
            type4: "待机时长",
            standbyTime: "21分", // 8
         },
         {
            machineName: "注塑机A103",
            line: "2号产线",
            employee: "王伟涛",
            grade: "故障",
            type1: "设备编号",
            deviceId: "SN12345",
            type2: "开机运行",
            runingTime: "10小时21分",
            type3: "维保截止",
            maintenanceTime: "2024-12-22",
            type4: "待机时长",
            standbyTime: "21分", // 8
         },
         {
            machineName: "注塑机A104",
            line: "2号产线",
            employee: "王伟涛",
            grade: "待机",
            type1: "设备编号",
            deviceId: "SN12345",
            type2: "开机运行",
            runingTime: "10小时21分",
            type3: "维保截止",
            maintenanceTime: "2024-12-22",
            type4: "待机时长",
            standbyTime: "21分", // 8
         },
      ],
   },
});
// 当前 tabs
const currentTabsIndex = ref(0);

// 选择 监控 列表数据
const selectMonitor = (type: string, index: number) => {
   currentTabsIndex.value = index;
};
</script>

<template>
   <!-- 设备概况 -->
   <div class="deviceMonitor">
      <!-- 标题 -->
      <div class="tips"></div>

      <!-- tabs 全部、待机设备、运行设备、告警设备 -->
      <div class="deviceMonitor-tabs">
         <!-- 按钮 -->
         <div :class="{ button: true, active: currentTabsIndex === index }" v-for="(i, index) in props.tabs"
            :key="`i_${index}`" @click="selectMonitor(_, index)">
            {{ i }}
         </div>
      </div>

      <!-- 列表 -->
      <devcie-monitor-list :dataList="dataList" style="margin-top: 16px; height: 430px"></devcie-monitor-list>
   </div>
</template>
