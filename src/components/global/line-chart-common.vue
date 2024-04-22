<template>
    <div class="lineChartCommon">
        <chart-base-v3 ref="chartBase" :options="options" />
    </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted, watch, toRefs } from "vue";
let chartBase = ref();  // 图表实例

const props = defineProps({
    chartData: {
        type: Object,
        default: () => ({
            xAxis: ["02.15", "02.16", "02.17", "02.18", "02.19", "02.20", "02.21", "02.22"],
            yAxis: [150, 230, 224, 218, 135, 147, 260, 350]
        })
    },
    colors: {
        type: Object,
        default: () => ({
            verticalLineColor: '#FFBE5C', // 竖线颜色
            gradientBackground: 'rgba(241, 176, 79, 0.39)', // 渐变背景
            InflectionPoint: '#FFBE5C', // 拐点颜色
            tooltip: 'CustomTooltip' // 提示框样式
        })
    }
})

// 获取y轴刻度最大值
const getMaxYaixs = () => {
    const maxValue = Math.max(...props.chartData.yAxis); // 获取最大值
    const roundedMaxValue = Math.ceil(maxValue / 5) * 5; // 向上取整
    return roundedMaxValue
}

const getInterval = () => {
    const maxValue = Math.max(...props.chartData.yAxis); // 获取最大值
    const roundedMaxValue = Math.ceil(maxValue / 5) * 5; // 向上取整
    const dividedMaxValue = Math.ceil(roundedMaxValue / 5); // 向上取整，然后除以5，然后再乘以5
    return dividedMaxValue;
}

watch(toRefs(props), () => {
    updateChartOptions()
    getInterval()
})

let options = ref({})
// 更新图表配置
const updateChartOptions = () => {
    options.value = {
        tooltip: {
            trigger: "axis", // 使用坐标轴触发，即鼠标悬停时触发
            axisPointer: {
                type: "line", // 设置指示器为直线
                lineStyle: {
                    color: props.colors.verticalLineColor, // 竖线颜色
                    width: 1, // 竖线宽度
                },
            },
            show: true,
            className: "custom-tooltip-box", // 自定义类名，用于设置提示框的样式
            confine: true,
            backgroundColor: "rgba(0,0,0,0)",
            textStyle: {
                color: "#FFBE5C",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "ding",
            },
            formatter: function (params: any) {
                // 循环处理数据，展示数据
                return `<div class='${props.colors.tooltip}'>${params[0].value || ''}</div>`;
            },
            position: function (point, params, dom, rect, size: any) {
                // 计算 y 的坐标
                const maxY = Math.max.apply(null, props.chartData.yAxis)
                const pecentY = (size.viewSize[1] - 60 * 2) / maxY // 计算y轴的百分比
                // 计算 y 的坐标
                const pointY = 70 + (size.viewSize[1] - 60 * 2) - pecentY * params[0].value
                // 计算x轴的平均
                const pecentX = (size.viewSize[0] - 30 * 2) / props.chartData.xAxis.length
                // 计算 x 轴的坐标，这里先初始化，是当前手势或者鼠标点击的x轴的坐标
                let pointX = point[0]
                // 先获取到当前x的数据，然后再数据数组里面找到是第几个数据
                let num = props.chartData.xAxis.indexOf(params[0].axisValue)
                // 计算x轴的坐标，先要加上之前设置的一个padding30，然后再加上1/2的平均值，再加上所占的值
                pointX = 50 + pecentX / 2 + num * pecentX
                // 返回tip提示框的位置
                return [pointX - size.contentSize[0] / 2, pointY - size.contentSize[1] - 10]
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
            // minInterval: 100, //分割刻度范围
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
                data: props.chartData.yAxis,
                type: "line",
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: props.colors.gradientBackground // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 0, 0, 0.00)' // 100% 处的颜色
                    }], false),
                },
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false, // 只有在 tooltip hover 的时候显示symbol
                itemStyle: {
                    //折线拐点标志的样式
                    color: props.colors.InflectionPoint,
                    borderColor: "#FFFFFF",
                    borderWidth: 5,
                },
            },
            {
                data: props.chartData.yAxis,
                type: 'bar',
                zlevel: 2, // 绘制在底层
                color: "rgba(0, 0, 0, 0)",

            }
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


updateChartOptions()

onMounted(() => {
})
</script>

<style scoped lang="scss">
.lineChartCommon {
    width: 100%;
    height: 100%;
}
</style>

<style>
.custom-tooltip-box {
    background-color: transparent !important;
    box-shadow: none !important;
    border: none !important;
}

.CustomTooltip {
    display: inline-flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 2px;
    border: 0.5px solid var(--color-basic-tip-waring, #FFBE5C);
    background: var(--color-basic-black-black-60, rgba(0, 0, 0, 0.60));
    color: var(--color-basic-tip-waring, #FFBE5C);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "ding";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.CustomTooltip1 {
    display: inline-flex;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 2px;
    border: 0.5px solid var(--color-basic-cyan-cyan-1, #00FFE0);
    background: var(--color-basic-black-black-60, rgba(0, 0, 0, 0.60));
    color: var(--color-basic-cyan-cyan-1, #00FFE0);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "ding";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

</style>
