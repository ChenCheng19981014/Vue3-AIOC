<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-energy-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cost {
        width: 100%;
        height: 334px;
    }

    .quyu {
        width: 100%;
        height: 182px;
    }

    .alarm {
        width: 100%;
        height: 374px;
    }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import Cost from "./components/cost.vue";
import QuYu from "./components/quyu.vue";
import AlArm from "./components/alarm.vue";
// 使用综合态势模拟数据，真实数据需要删除
import { storeExcelData } from "@/store/modules/excel";
// 表格仓库 信息
const { storeExcelDataMap } = storeExcelData();

// 能源管理
const energy = storeExcelDataMap["能源管理"];

// 各顶部 标题
const topTips = ref([...energy.topTips]);

// 模块数据
const modeData = ref({
    cost: {
        topTips: {
            day: energy.energyRight1Tips1[0].value,
            month: energy.energyRight1Tips1[1].value,
            year: energy.energyRight1Tips1[2].value,
        },
        topMsg: {
            day: energy.energyRight1[0],
            month: energy.energyRight1[1],
            year: energy.energyRight1[2],
        },
        content: {
            day: energy.energyRight1Day,
            month: energy.energyRight1Month,
            year: energy.energyRight1Year,
        },
    },
    quyu: {
        menu: energy.energyRight2Tips.map(
            (item: { [key: string]: any }) => item.value
        ),

        day: [...energy.energyRight2.map((everyItem: any[]) => {
            return [
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index <= 2) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index >= 3 && index <= 4) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
            ]
        })
        ].filter((item: { [key: string]: any }) => item != undefined),

        month: [...energy.energyRight2.map((everyItem: any[]) => {
            return [
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index <= 2) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index >= 5 && index <= 6) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
            ]
        })
        ].filter((item: { [key: string]: any }) => item != undefined),

        year: [...energy.energyRight2.map((everyItem: any[]) => {
            return [
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index <= 2) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
                ...everyItem.map((_: { [key: string]: any }, index: number) => {
                    if (index >= 7 && index <= 8) {
                        return _.value.replace(',', '').trim();
                    }
                }).filter((item: { [key: string]: any }) => item != undefined),
            ]
        })
        ].filter((item: { [key: string]: any }) => item != undefined),
    },
    alarm: energy.energyRight3,
});

console.log("energy:", energy, "\n 模块数据", modeData.value);


</script>

<template>
    <div class="outFactory-energy-right">
        <!-- 能耗费用趋势 -->
        <div class="cost">
            <Cost :title="topTips[3].value" :msg="modeData.cost"></Cost>
        </div>
        <!-- 区域能耗 -->
        <div class="quyu">
            <QuYu :title="topTips[4].value" :msg="modeData.quyu" :menu="modeData.quyu.menu"></QuYu>
        </div>
        <!-- 实时告警 -->
        <div class="alarm">
            <AlArm :title="topTips[5].value" :msg="modeData.alarm"></AlArm>
        </div>
    </div>
</template>
