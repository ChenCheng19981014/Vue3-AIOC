<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-energy-left {
    width: 430px;
    height: 940px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tips;

    .energy-dian {
        width: 430px;
        height: 299px;
    }

    .energy-shui {
        width: 430px;
        height: 299px;
    }

    .energy-ran {
        width: 430px;
        height: 299px;
    }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import DianNeng from "./components/dianneng.vue";
import ShuiNeng from "./components/shuineng.vue";
import RanQi from "./components/ranqi.vue";
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();
// 能源管理
const energy = storeExcelDataMap["能源管理"];
// 各顶部 标题
const topTips = ref([...energy.topTips]);
//  各模块的小标题
const modeTips = ref([
    energy.energyLeft1Tips[0].value,
    energy.energyLeft2Tips[0].value,
    energy.energyLeft3Tips[0].value,
]);
// 模块数据
const modeData = ref({
    dianNeng: {
        top: {
            day: energy.energyLeft1TipsInfo[0],
            month: energy.energyLeft1TipsInfo[1],
            year: energy.energyLeft1TipsInfo[2],
        },
        day: energy.energyLeft1Day,
        month: energy.energyLeft1Month,
        year: energy.energyLeft1Year,
    },
    shuiNeng: {
        top: {
            day: energy.energyLeft2TipsInfo[0],
            month: energy.energyLeft2TipsInfo[1],
            year: energy.energyLeft2TipsInfo[2],
        },
        day: energy.energyLeft2Day,
        month: energy.energyLeft2Month,
        year: energy.energyLeft2Year,
    },
    ranQi: {
        top: {
            day: energy.energyLeft3TipsInfo[0],
            month: energy.energyLeft3TipsInfo[1],
            year: energy.energyLeft3TipsInfo[2],
        },
        day: energy.energyLeft2Day,
        month: energy.energyLeft2Month,
        year: energy.energyLeft2Year,
    },
});

// console.log("能源管理:", energy, '\n模块数据 ',modeData.value);
</script>

<template>
    <div class="outFactory-energy-left">
        <!-- 电能统计 -->
        <div class="energy-dian">
            <DianNeng :title="topTips[0].value" :tips="modeTips[0]" :msg="modeData.dianNeng"></DianNeng>
        </div>
        <!-- 水能统计 -->
        <div class="energy-shui">
            <ShuiNeng :title="topTips[1].value" :tips="modeTips[1]" :msg="modeData.shuiNeng"></ShuiNeng>
        </div>
        <!-- 燃气统计 -->
        <div class="energy-ran">
            <RanQi :title="topTips[2].value" :tips="modeTips[2]" :msg="modeData.ranQi"></RanQi>
        </div>
    </div>
</template>
