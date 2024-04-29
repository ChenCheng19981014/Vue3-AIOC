<style scoped lang="scss">
.deviceProfile {
    width: 100%;
    height: 100%;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
// props 值
const props = defineProps({
    png: {
        type: String,
        default: () => "摄像头",
    },
    list: {
        type: Array,
        default: () => [
            { tips: "设备总数", num: 0 },
            { state: "运行", icon: "doing", num: 0 },
            { state: "待机", icon: "standby", num: 0 },
            { state: "告警", icon: "warning", num: 0 },
        ],
    },
    title: {
        type: String,
        default: () => "设备概况",
    },
});
</script>

<template>
    <div class="deviceProfile">
        <title-type-common :tips="props.title">
            <!-- 监控 组件 -->
            <machine-states-list :listInfo="props" class="list" style="height: 76px; margin-top: 16px" />
        </title-type-common>
    </div>
</template>
