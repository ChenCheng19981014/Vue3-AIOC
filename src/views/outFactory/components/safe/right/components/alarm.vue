<!-- 告警统计 -->
<template>
    <div class="outFactory-safe-alarm">
        <title-type-common :tips="'告警统计'">
            <div class="safe-alarm-content">
                <div class="safe-alarm-top">
                    <img src="@/assets/images/翻牌器.png" alt="图标" />
                    <div class="left-data">
                        <div class="left-data-left">
                            <div class="lastWeek">
                                {{ aLarm.topInfo[0][0].value }}
                                <img :src="`${aLarm.topInfo[0][5].value.trim() == '上升'
                                    ? safeUp
                                    : safeDown
                                    }`" alt="" />
                                <span>{{ aLarm.topInfo[0][6].value }}{{ aLarm.topInfo[0][7].value
                                }}{{ aLarm.topInfo[0][8].value }}</span>
                            </div>
                            <div class="lastWeekData">
                                <span>{{ aLarm.topInfo[0][2].value }}</span>{{ aLarm.topInfo[0][3].value }}
                            </div>
                        </div>
                        <div class="left-data-right">
                            <div class="lastMonth">
                                {{ aLarm.topInfo[1][0].value }}
                                <img :src="`${aLarm.topInfo[1][5].value.trim() == '上升'
                                    ? safeUp
                                    : safeDown
                                    }`" alt="" />
                                <span>{{ aLarm.topInfo[1][6].value }}{{ aLarm.topInfo[1][7].value
                                }}{{ aLarm.topInfo[1][8].value }}</span>
                            </div>
                            <div class="lastMonthData">
                                <span>{{ aLarm.topInfo[1][2].value }}</span>{{ aLarm.topInfo[1][3].value }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="safe-alarm-center">
                    <div class="alarm-center-text">{{ centerTitle }}</div>
                </div>
                <div class="safe-alarm-bottom">
                    <!-- echarts实现 -->
                    <!-- <proportional-bar-chart></proportional-bar-chart> -->

                    <!-- css实现 -->
                    <div class="rectangle">

                        <div class="rect-item" v-for="(item, _) in proportionData" :key="item.name"
                            :style="{ width: item.proportion + '%', backgroundColor: item.color }"> </div>

                    </div>
                    <div class="dataDisplay">
                        <div class="dataDisplay" v-for="(item, index) in proportionData" :key="index">
                            <div class="icon" :style="{ background: item.color }"></div>
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
import { ref, toRefs } from "vue";
import safeUp from "@/assets/images/icon-上升.png";
import safeDown from "@/assets/images/icon-下降.png";
const props = defineProps(["aLarm", "centerTitle"]);
// 告警统计 数据
const { aLarm, centerTitle } = toRefs(props);

console.log("告警统计:", aLarm?.value);

// 颜色数组循环
const colors = ['#00FF85', '#0066FF'];

const proportionData = ref(
    aLarm?.value.content.map((item: any, index: number) => {
        const name = item[0].value;
        const value = item[1].value;
        const proportion = item[3].value;
        const colorIndex = index % colors.length; // 使用模运算来循环使用颜色数组中的颜色
        const currentColor = colors[colorIndex];
        return {
            name,
            color: currentColor,
            value,
            proportion,
        };
    })
);

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

                .left-data-left,
                .left-data-right {
                    height: 54px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    .lastWeek,
                    .lastMonth {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.7));

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
                            color: var(--color-basic-tip-success, #00ff85);

                            /* 特殊数字/数字4-14b */
                            font-family: "ding";
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                        }
                    }

                    .lastWeekData,
                    .lastMonthData {
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.5));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;

                        span {
                            color: var(--color-text-text-100, #fff);

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
                text-shadow: 0px 1px 4px rgba(87, 208, 198, 0.6);

                /* 标题文字/二级标题-18 */
                font-family: pm1;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 1.44px;
                background: var(--green,
                        linear-gradient(180deg, #fff 60.42%, #00ff85 125%));
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
                border-radius: 12px;
                overflow: hidden;

                .rect-item {
                    height: 100%;
                }

                .rectangle-left {
                    height: 12px;
                    border-radius: 5px 0 0 5px;
                    background: var(--color-Series-chart-1, #00ff85);
                }

                .rectangle-right {
                    height: 12px;
                    border-radius: 0px 5px 5px 0px;
                    background: var(--color-Series-chart-2, #06f);
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
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.7));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }

                    .value {
                        color: var(--color-text-text-100, #fff);
                        font-family: "ding";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        margin: 0 16px;
                    }

                    .proportion {
                        color: var(--color-text-text-70, rgba(255, 255, 255, 0.7));
                        font-family: "ding";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;

                        span {
                            color: var(--color-text-text-70, rgba(255, 255, 255, 0.7));
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
