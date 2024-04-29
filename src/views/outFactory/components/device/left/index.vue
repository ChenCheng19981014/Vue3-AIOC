<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-device-left {
    width: 430px;
    height: 940px;
    // background-color: #333;
    @include tips;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
</style>

<script setup lang="ts">

import { ref } from "vue";
import DeviceProfile from './components/deviceProfile.vue'
import DeviceMonitor from './components/deviceMonitor.vue'

const list = ref([
    { tips: "设备总数", num: 124 },
    { state: "运行", icon: "doing", num: 100 },
    { state: "待机", icon: "standby", num: 23 },
    { state: "告警", icon: "warning", num: 1 },
])

</script>

<template>
    <div class="outFactory-device-left">

        <!-- 设备 概况 -->
        <DeviceProfile :list="list" style="height:130px;" />

        <!-- 设备监控 -->
        <DeviceMonitor style="margin-top: 16px;" />
    </div>
</template>
