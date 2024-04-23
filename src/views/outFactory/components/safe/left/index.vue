<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-safe-left {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .monitor {
        width: 100%;
        height: 631px;
    }

    .alarm {
        width: 100%;
        height: 278px;
    }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import JianKong from "./components/jiankong.vue";
import GaoJing from "./components/gaojing.vue";
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();
// 监控信息
const monitor = storeExcelDataMap["安防管理"]["safeLeft1"];
// 视频 tab
const videoTabs = storeExcelDataMap["安防管理"]["safeLeft2Tips"];
// 视频
const video = storeExcelDataMap["安防管理"]["safeLeft2"];

// 安防 顶部模块 titles
const topTips = ref([...storeExcelDataMap["安防管理"]["topTips"]]);

// 告警统计
const warning = ref({
    tips: storeExcelDataMap["安防管理"]["safeLeft3"],
    details: storeExcelDataMap["安防管理"]["safeLeft4"],
    charts: {
        chartData: {
            xAxis: storeExcelDataMap["安防管理"]["safeLeft4"][0].filter((_, index: number) => index !== 0 && _.value ).map((item: any) => item.value),
            yAxis: storeExcelDataMap["安防管理"]["safeLeft4"][1].filter((_, index: number) => index !== 0 && _.value ).map((item: any) => item.value),
        },
        colors: {
            verticalLineColor: '#FFBE5C', // 竖线颜色
            gradientBackground: 'rgba(241, 176, 79, 0.39)', // 渐变背景
            InflectionPoint: '#FFBE5C', // 拐点颜色
            tooltip: 'CustomTooltip' // 提示框样式
        },
    }
});

// 监控信息模拟数据
const monitorInfo = ref({
    png: "摄像头",
    list: [
        { tips: monitor[0].value, num: monitor[2].value },
        {
            state: monitor[4].value,
            icon: monitor[4].value === "在线" ? "online" : "offline",
            num: monitor[6].value,
        },
        {
            state: monitor[8].value,
            icon: monitor[8].value === "离线" ? "offline" : "online",
            num: monitor[10].value,
        },
    ],
});

const videoInfo = ref({
    tabs: videoTabs.map((item: any) => item.value),
    videoSources: new Array(4).fill("").map((_, i: number) => {
        const src = video[i].filter((_, num: number) => num % 2 !== 0);
        const p = video[i].filter((_, num: number) => num % 2 == 0);
        return {
            src: src.map((item: any) => item.value),
            position: p.map((item: any) => item.value),
        };
    }),
});

</script>

<template>
    <div class="outFactory-safe-left">
        <!-- 视频监控 -->
        <div class="monitor">
            <JianKong :title="topTips[0].value" :monitorInfo="monitorInfo" :videoInfo="videoInfo"></JianKong>
        </div>
        <!-- 告警统计 -->
        <div class="alarm">
            <GaoJing :title="topTips[1].value" :warning="warning"></GaoJing>
        </div>
    </div>
</template>
