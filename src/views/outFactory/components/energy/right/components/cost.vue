<template>
    <div class="cost-main">
        <title-type-time :tips="title" @delivery-date='deliveryDate'>
            <div class="cost-main-content">
                <div class="head-data">
                    <div class="data-left">
                        {{ msg.topTips[currentTime] }}<span>{{ currentTopInfo[0] }}</span>{{ currentTopInfo[1] }}
                    </div>
                    <div class="data-right">
                        {{ currentTopInfo[2] }}
                        <img :src="`${currentTopInfo[3] == '上升'
                            ? safeUp
                            : safeDown
                            }`" alt="" /><span> {{ currentTopInfo[4] }}<span> {{ currentTopInfo[5] }}</span></span>
                    </div>
                </div>
                <div class="legend">
                    <div class="money">元</div>
                    <div class="sign">
                        <div class="sign-item" v-for="(item, index) in legend" :key="index">
                            <div class="icon" :style="{ backgroundColor: item.color }"></div>
                            <div class="name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="echarts">
                    <line-chart-more :chartData="chartData[currentTime]"></line-chart-more>
                </div>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import safeUp from "@/assets/images/icon-上升.png";
import safeDown from "@/assets/images/icon-下降.png";
import { toRefs, ref, computed } from 'vue'
const props = defineProps(['title', 'msg']);
// 大标题 小标题 信息
const { title, msg } = toRefs(props);
// 当前 时间
const currentTime = ref('day');
// 当前的 顶部信息
const currentTopInfo = ref(computed(() => msg?.value.topMsg[currentTime.value].map((item: { [key: string]: any }) => item.value)))

// echarts 表格信息
const chartData: { [key: string]: any } = ref({
    day: {
        xAxis: computed(() => msg?.value.content.day[0].map((item: { [key: string]: any }) => item.value.trim())),
        yAxis1: computed(() => msg?.value.content.day[1].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis2: computed(() => msg?.value.content.day[2].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis3: computed(() => msg?.value.content.day[3].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
    },
    month: {
        xAxis: computed(() => msg?.value.content.month[0].map((item: { [key: string]: any }) => item.value.trim())),
        yAxis1: computed(() => msg?.value.content.month[1].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis2: computed(() => msg?.value.content.month[2].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis3: computed(() => msg?.value.content.month[3].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
    },
    year: {
        xAxis: computed(() => msg?.value.content.year[0].map((item: { [key: string]: any }) => item.value.trim())),
        yAxis1: computed(() => msg?.value.content.year[1].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis2: computed(() => msg?.value.content.year[2].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
        yAxis3: computed(() => msg?.value.content.year[3].map((item: { [key: string]: any }) => item.value.replace(',', '') * 1)),
    },
})

// 模拟图标数据
const legend = ref([
    { color: '#00FFE0', name: '电费' },
    { color: '#0066FF', name: '水费' },
    { color: '#FFBE5C', name: '燃气费' }
])

// 切换 日期
const deliveryDate = (time: string) => {
    currentTime.value = time;
}
</script>

<style scoped lang="scss">
.cost-main {
    width: 100%;
    height: 334px;

    .cost-main-content {
        width: 100%;
        height: 296px;

        .head-data {
            width: 100%;
            height: 38px;
            padding: 4px 0;
            margin: 16px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .data-left {
                color: var(--color-basic-white-white-70, rgba(255, 255, 255, 0.70));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                display: flex;
                align-items: center;

                span {
                    color: var(--color-text-text-100, #FFF);
                    /* 特殊数字/数字1-28b */
                    font-family: "ding";
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    padding: 0 6px 0 12px;
                }
            }

            .data-right {
                color: var(--color-basic-white-white-70, rgba(255, 255, 255, 0.70));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;

                img {
                    width: 6px;
                    height: 13px;
                    margin: 0 8px;
                }

                span {
                    color: var(--color-text-text-100, #FFF);
                    font-family: "ding";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                    span {
                        color: var(--color-basic-white-white-50, rgba(255, 255, 255, 0.50));
                        font-family: "ding";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        letter-spacing: 1.12px;
                        padding-left: 2px;
                    }
                }
            }
        }

        .legend {
            width: 100%;
            height: 28px;
            padding: 4px 8px;
            background: rgba(0, 0, 0, 0.10);
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;

            .money {
                color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-weight: 500;
            }

            .sign {
                display: flex;
                align-items: center;

                .sign-item {
                    display: flex;
                    align-items: center;

                    .icon {
                        width: 16px;
                        height: 4px;
                        margin: 0 4px 0 16px;
                        background-color: #00FFE0;
                    }

                    .name {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }

        .echarts {
            width: 100%;
            height: 190px;
        }
    }
}
</style>
