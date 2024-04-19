<template>
    <div ref="chartRef" class="chart-base"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import "echarts-liquidfill"
import "echarts-gl"
const chartRef = ref(null);
const emit = defineEmits(["loadOver"]);
let chartInstance;

const initChart = () => {
    if (!chartRef.value) {
        console.error("图表容器不可用。");
        return;
    }
    try {
        chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption(props.options);
        emit('loadOver',chartInstance)
    } catch (error) {
        console.error("无法加载图表：", error);
    }
};

onMounted(() => {
        window.addEventListener("resize", () => {
            if (chartInstance) {
                chartInstance.resize();
            }
        });
});

watch(chartRef,()=>{
    initChart();
})

onUnmounted(() => {
    if (chartInstance) {
        chartInstance.dispose();
    }
});

const props = defineProps({
    options: Object,
    loading: Boolean,
    delay: Number,
    changeClear: { type: Boolean, default: true },
    zoomLength: { type: Number, default: 7 },
    active: { type: Boolean, default: true },
    devicePixelRatio: { type: Number, default: 1 },
    tooltipType: {
        type: Object,
        default: () => ({
            type: "",
            eventName: ""
        })
    },
    loadingStyle: {
        type: Object,
        default: () => ({
            text: "loading",
            color: "rgb(27, 166, 255)",
            textColor: "#FFFFFF",
            maskColor: "rgba(0, 0, 0, 0.5)",
            fontSize: 35,
            showSpinner: true,
            spinnerRadius: 30,
            lineWidth: 8,
        }),
    },
});

watch(
    () => props.options,
    (newOption) => {
        if (chartInstance) {
            chartInstance.setOption(newOption);
        }
    }
);
</script>

<style scoped lang="scss">
.chart-base {
  width: 100%;
  height: 100%;
}
</style>
