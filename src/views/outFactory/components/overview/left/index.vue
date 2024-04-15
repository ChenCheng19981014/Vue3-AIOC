<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-overview-left {
    width: 430px;
    height: 940px;
    // background-color: #333;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .statistics {
        width: 100%;
        height: 262px;
    }

    .cost {
        width: 100%;
        height: 248px;
    }

    .energy {
        width: 100%;
        height: 374px;
    }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import NengLiang from "./components/nengliang.vue";
import NengYuan from "./components/nengyuan.vue";
import QuYu from "./components/quyu.vue";
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// const energyStatistics = ref<any[]>([])

// energyStatistics.value = storeExcelDataMap['能耗统计'];

// console.log("仓库信息:", storeExcelDataMap);
</script>

<template>
    <div class="outFactory-overview-left">
        <div class="statistics">
            <NengLiang :storeExcelDataMap="storeExcelDataMap['综合态势']"></NengLiang>
        </div>
        <div class="cost">
            <NengYuan :storeExcelDataMap="storeExcelDataMap['综合态势']"></NengYuan>
        </div>
        <div class="energy">
            <QuYu :storeExcelDataMap="storeExcelDataMap['综合态势']"></QuYu>
        </div>
    </div>
</template>
