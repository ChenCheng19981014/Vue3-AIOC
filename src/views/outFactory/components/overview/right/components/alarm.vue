<!-- 综合告警 -->
<template>
    <div class="alarm">
        <title-type-common :tips="'综合告警'">
            <div class="alarm-main">
                <alarm-list :dataList="dataList"></alarm-list>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 模拟数据
let dataList = ref([
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
    { name: '陌生人区域入侵', area: "广场外围", areaRegion: "周界告警", grade: "一般", machine: "空压机", date: "2024-22-18  09:14:56", handle: "已解除" },
]);

</script>

<style scoped lang="scss">
.alarm {
    width: 100%;
    height: 100%;
    .alarm-main {
        width: 100%;
        height: 100%; 
        padding-top: 16px;
    }
}
</style>
