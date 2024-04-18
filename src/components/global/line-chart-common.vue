<style scoped lang="scss">
.lineChartCommon {
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const { options } = defineProps({
  options: {
    backgroundColor: "#ffff0050", //背景色
    type: Object,
    default: {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
          areaStyle: {}
        },
      ],
      grid: {
        top:'5%',
        left: "0%",
        right: "0%",
        bottom: "0%",
        containLabel: true,
      },
    },
  },
});

console.log("options:", options);
</script>

<template>
  <div class="lineChartCommon">
    <chart-base-v3 ref="chartBase" :options="options" />
  </div>
</template>
