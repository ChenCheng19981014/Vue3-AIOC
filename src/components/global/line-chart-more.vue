<template>
    <div class="lineChartMore">
        <chart-base-v3 ref="chartBase" :options="options" />
    </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { ref, onMounted, watch, toRefs } from "vue";

let options = ref({});

let chartBase = ref();  // 图表实例

const props = defineProps({
    chartData: {
        type: Object,
        default: () => ({
            xAxis: ["02.15", "02.16", "02.17", "02.18", "02.19", "02.20", "02.21", "02.22"],
            yAxis1: ['50', '330', '200', '218', '135', '47', '260', '150'], // 第一折线数据 电费
            yAxis2: [150, 230, 124, 218, 135, 147, 260, 360], // 第二个折线数据 水费
            yAxis3: [150, 130, 200, 118, 135, 147, 260, 250], // 第三个折线数据 燃气费
        })
    }
})

// 获取y轴刻度最大值
const getMaxYaixs = () => {
    const maxValue = Math.max(...props.chartData.yAxis1, ...props.chartData.yAxis2, ...props.chartData.yAxis3); // 获取最大值
    const roundedMaxValue = Math.ceil(maxValue / 5) * 5; // 向上取整
    return roundedMaxValue
}

const getInterval = () => {
    const maxValue = Math.max(...props.chartData.yAxis1, ...props.chartData.yAxis2, ...props.chartData.yAxis3); // 获取最大值
    const roundedMaxValue = Math.ceil(maxValue / 5) * 5; // 向上取整
    const dividedMaxValue = Math.ceil(roundedMaxValue / 5); // 向上取整，然后除以5，然后再乘以5
    return dividedMaxValue;
}


// 更新图表配置
const updateChartOptions = () => {
    options.value = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: "line", // 设置指示器为直线
                lineStyle: {
                    width: 2, // 竖线宽度
                },
            },
            className: "custom-tooltip-box",
            formatter: function (params: any) {
                // console.log(params)
                // 获取 x 轴的数据
                const xAxisData = params[0].axisValue;
                // 通过模板字符串返回自定义的 Tooltip HTML
                return `
                    <div class="custom-tooltip-line-chart-more">
                        <div class="x-axis">${moment().format('YYYY')}-${xAxisData.replace('.', '-')}日</div>
                        ${params.map((item: any) => `
                            <div class="y-axis">
                                <div class="y-axis-item">
                                    <div class="y-axis-item-title">
                                        <div class="icon" style="background-color: ${item.color};"></div>
                                        ${item.seriesName}
                                    </div>
                                    <div class="y-axis-item-value">
                                        ${item.value}
                                    </div>
                                </div>
                            </div>`

                ).join('')}
                    </div>
                `;
            }
        },
        xAxis: {
            type: "category",
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    opacity: 0.3, // 设置为半透明
                    type: 'dashed'
                }
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ccc',
                    fontSize: 12,
                    fontWeight: 500,
                },
            },
            axisTick: {
                show: false,
            },
            data: props.chartData.xAxis,
        },
        yAxis: {
            type: "value",
            max: getMaxYaixs(), //设置最大值
            splitLine: {
                show: true,
                lineStyle: {
                    opacity: 0.3, // 设置为半透明
                    type: 'dashed'
                }
            },
            interval: getInterval(), //坐标轴刻度文字显示间隔
            axisLabel: { //坐标轴刻度文字的设置
                show: true, //是否显示
                inside: false, //坐标轴刻度文字指向 (true表示向上   false表示向下)
                rotate: 0, //坐标轴刻度文字的旋转角度
                margin: 0, //坐标轴刻度文字与轴线之间的距离
                color: '#ccc', //坐标轴刻度文字的颜色
                fontSize: 12, //坐标轴刻度文字的大小 (用数字表示)
                fontWeight: 500, //坐标轴刻度文字的加粗程度 (可选bold   bolder  lighter  normal)
                fontFamily: 'Source Han Sans CN', //坐标轴刻度文字的风格 (可选楷体  宋体  华文行楷等等)
                formatter: function (value: any) {
                    return `{a|${value}} {b| —}`;
                },
                rich: {
                    a: {
                        color: '#ccc',
                        fontSize: 12,
                        fontFamily: 'Source Han Sans CN',
                        fontWeight: 500,
                    },
                    b: {
                        color: '#21D7B5',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                    }
                }
            },
        },
        series: [
            {
                name: '电费',
                type: 'line',
                showSymbol: false,
                color: '#00FFE0',
                lineStyle: {
                    normal: {
                        color: '#00FFE0',
                    },
                },
                data: props.chartData.yAxis1, //data.values
            },
            {
                name: '水费',
                type: 'line',
                showSymbol: false,
                color: '#0066FF',
                lineStyle: {
                    normal: {
                        color: '#0066FF',
                    },
                },
                data: props.chartData.yAxis2, //data.values
            },
            {
                name: '燃气费',
                type: 'line',
                showSymbol: false,
                color: '#FFBE5C',
                lineStyle: {
                    normal: {
                        color: '#FFBE5C',
                    },
                },
                data: props.chartData.yAxis3, //data.values
            },
        ],
        grid: {
            top: '5%',
            left: "0%",
            right: "0%",
            bottom: "0%",
            containLabel: true,
        },
    }
}

watch(props, () => {

    updateChartOptions();

    getInterval();

}, { deep: true, immediate: true })


updateChartOptions()

onMounted(() => {
})

</script>

<style scoped lang="scss">
.lineChartMore {
    width: 100%;
    height: 100%;
}
</style>

<style lang="scss">
.custom-tooltip-line-chart-more {
    display: flex;
    width: 143px;
    padding: 4px 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid var(--color-basic-white-white-10, rgba(255, 255, 255, 0.10));
    background: var(--color-basic-black-black-30, rgba(0, 0, 0, 0.30));
    backdrop-filter: blur(2px);

    .x-axis {
        color: var(--color-text-text-100, #FFF);
        font-family: "Source Han Sans CN";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .y-axis {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .y-axis-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .y-axis-item-title {
                display: flex;
                align-items: center;

                .icon {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    margin-right: 4px;
                    background-color: red;
                }

                color: var(--color-text-text-100, #FFF);
                font-family: "Source Han Sans CN";
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .y-axis-item-value {
                color: var(--color-text-text-100, #FFF);
                text-align: right;
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
    }
}
</style>
