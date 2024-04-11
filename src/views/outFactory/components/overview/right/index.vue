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
import OutFactoryMonitor from "@/views/outFactory/components/overview/right/components/monitor.vue";
import OutFactoryAlarm from "@/views/outFactory/components/overview/right/components/alarm.vue";

</script>

<template>
  <div class="outFactory-overview-right">
    <!-- 视频监控 -->
    <div class="monitor">
      <OutFactoryMonitor />
    </div>
    <div class="summarize">
      <title-type-common :tips="'设备概括'"></title-type-common>
    </div>
    <div class="alarm">
      <OutFactoryAlarm></OutFactoryAlarm>
    </div>
  </div>
</template>
