<!-- 告警统计 -->
<template>
    <div class="outFactory-safe-alarm">
        <title-type-common :tips="'告警统计'">
            <div class="safe-alarm-content">
                <div class="safe-alarm-top">
                    <img src="@/assets/images/翻牌器.png" alt="图标">    
                    <div class="left-data">
                        <div class="left-data-left">
                            <div class="lastWeek">
                                上周告警数
                                <img src="@/assets/images/safe-up.png" alt="">
                                <span>+12.56%</span>
                            </div>
                            <div class="lastWeekData">
                                <span>256</span>条
                            </div>
                        </div>
                        <div class="left-data-right">
                            <div class="lastMonth">
                                上周告警数
                                <img src="@/assets/images/safe-up.png" alt="">
                                <span>+12.56%</span>
                            </div>
                            <div class="lastMonthData">
                                <span>1,256</span>条
                            </div>
                        </div>
                    </div>                
                </div>
                <div class="safe-alarm-center">
                    <div class="alarm-center-text">告警类型占比</div>
                </div>
                <div class="safe-alarm-bottom">
                    <!-- echarts实现 -->
                    <!-- <proportional-bar-chart></proportional-bar-chart> -->

                    <!-- css实现 -->
                    <div class="rectangle">
                        <div class="rectangle-left" :style="{ width: proportionData[0].proportion + '%' }"></div>
                        <div class="rectangle-right" :style="{ width: proportionData[1].proportion + '%' }"></div>
                    </div>
                    <div class="dataDisplay">
                        <div class="dataDisplay" v-for="(item, index) in proportionData" :key="index">
                            <div class="icon" :style="{background: item.color}"></div>
                            <div class="name">{{ item.name }}</div>
                            <div class="value">{{ item.value }}</div>
                            <div class="proportion">{{ item.proportion }}<span>%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 模拟数据
let proportionData = ref([
    {  name: '未带安全帽', color: '#00FF85', value: 10, proportion: 76.92},
    {  name: '区域入侵', color: '#0066FF', value: 30, proportion: 23.08},
])
</script>

<style scoped lang="scss">
.outFactory-safe-alarm {
    width: 100%;
    height: 100%;
    .safe-alarm-content {
        width: 100%;
        height: 196px;
        .safe-alarm-top {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 16px 0;
            img {
                width: 60px;
                height: 56.7px;
                padding: 3px 0 0.29px 0;
            }
            .left-data {
                width: 354px;
                height: 54px;
                margin: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left-data-left, .left-data-right {
                    height: 54px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .lastWeek, .lastMonth {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));

                        /* 文本/正文2-14m */
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        img {
                            width: 6px;
                            height: 13px;
                            margin: 0 2px 0 4px;
                        }
                        span {
                            color: var(--color-basic-tip-success, #00FF85);

                            /* 特殊数字/数字4-14b */
                            font-family: "ding";
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                        }
                    }
                    .lastWeekData, .lastMonthData {
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        span {
                            color: var(--color-text-text-100, #FFF);

                            /* 特殊数字/数字1-28b */
                            font-family: "ding";
                            font-size: 28px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            margin-right: 4px;
                        }
                    }
                }
            }
        }
        .safe-alarm-center {
            width: 430px;
            height: 32px;
            background: url("@/assets/images/second-bg.png");
            background-size: 100% 100%;
            margin-bottom: 16px;
            .alarm-center-text {
                text-shadow: 0px 1px 4px rgba(87, 208, 198, 0.60);

                /* 标题文字/二级标题-18 */
                font-family: pm1;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 1.44px;
                background: var(--green, linear-gradient(180deg, #FFF 60.42%, #00FF85 125%));
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                padding: 6px 0px 5px 26px;
            }
        }
        .safe-alarm-bottom {
            width: 100%;
            height: 54px;
            padding: 4px 16px 0;
            .rectangle {
                width: 400px;
                height: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                .rectangle-left {
                    // width: 60%;
                    height: 12px;
                    border-radius: 5px 0 0 5px;
                    background: var(--color-Series-chart-1, #00FF85);
                }
                .rectangle-right {
                    // width: 40%;
                    height: 12px;
                    border-radius: 0px 5px 5px 0px;
                    background: var(--color-Series-chart-2, #06F);
                }
            }
            .dataDisplay {
                width: 100%;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 8px;
                .dataDisplay {
                    width: auto;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .icon {
                        width: 12px;
                        height: 12px;
                        border-radius: 3px;
                        margin-right: 8px;
                    }
                    .name {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }
                    .value{ 
                        color: var(--color-text-text-100, #FFF);
                        font-family: "ding";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin: 0 16px;
                    }
                    .proportion {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                        font-family: "ding";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        span {
                            color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                            font-family: "ding";
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                        }
                    }
              
                }
            }
        }
    }
}
</style>
