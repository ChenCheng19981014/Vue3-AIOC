<template>
    <div class="cost-main">
        <title-type-time :tips="'能耗费用趋势'">
            <div class="cost-main-content">
                <div class="head-data">
                    <div class="data-left">
                        本月费用<span>23,152,375</span>元
                    </div>
                    <div class="data-right">
                        同比<img src="@/assets/images/下箭头.png" alt="图标"><span>3.5<span>%</span></span>
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
                    <line-chart-more></line-chart-more>
                </div>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 模拟图标数据
let legend = ref([
    { color: '#00FFE0', name: '电费' },
    { color: '#0066FF', name: '水费' },
    { color: '#FFBE5C', name: '燃气费' }
])

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
