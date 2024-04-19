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
</style>

<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
let chartBase = ref();  // 图表实例

const loadOver = (instance: any) => {
    hoverEcharts(instance);
    console.log('实例:',instance);
}

// hover图表的效果
// const hoverEcharts = (instance: any) => {
//     let lastHighlightedIndex: any = null;
//     instance.on('mouseover', (params: any) => {
//         if (params.componentType === "series" && params.seriesType === "bar") {
//             var { dataIndex } = params;
//             if (lastHighlightedIndex !== null) {
//                 instance.dispatchAction({
//                     type: 'showTip',
//                     seriesIndex: lastHighlightedIndex,
//                     dataIndex: lastHighlightedIndex,
//                 })
//             }
//         }
//         lastHighlightedIndex = dataIndex;
//         console.log(params);
//     })
// }
const hoverEcharts = (instance: any) => {
    let lastHighlightedIndex: any = null;
    instance.on('mouseover', (params: any) => {
        if (params.componentType === "series" && params.seriesType === "bar") {
            // 处理柱状图的逻辑
            const { dataIndex } = params;
            if (lastHighlightedIndex !== null) {
                instance.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1, // 柱状图的系列索引
                    dataIndex: dataIndex,
                });
            }
        } else if (params.componentType === "series" && params.seriesType === "line") {
            // 处理折线图的逻辑，显示竖线
            instance.dispatchAction({
                type: 'showTip',
                seriesIndex: 0, // 折线图的系列索引
                dataIndex: params.dataIndex,
            });
        }
        lastHighlightedIndex = params.dataIndex;
        console.log(params);
    });
};


const { options } = defineProps({
    options: {
        type: Object,
        default: {
            tooltip: {
                trigger: "item",
                axisPointer: {
                    type: "shadow",
                    shadowStyle: {
                        color: "rgba(74, 211, 164, 0.15)",
                        width: "1",
                    },
                },
                show: true,
                confine: true, // 是否将 tooltip 框限制在图表的区域内
                backgroundColor: "rgba(0,0,0,0)", // 提示框浮层的背景颜色
                position: "top",
                textStyle: {
                    color: "#78EC4E", // 文字的颜色
                    fontStyle: "normal", // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体）
                    fontWeight: "normal", // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
                },
                className: "three-dimensional-echarts-tooltip",
                formatter: (params, elOne, elTwo) => {
                    // console.log("params:", params);
                    // 循环处理数据，展示数据
                    const htmlText = `<div class='custom-tooltip-style'>${params.data}</div>`;
                    return htmlText;
                },

            },
            // tooltip: {
            //     trigger: "axis", // 使用坐标轴触发，即鼠标悬停时触发
            //     axisPointer: {
            //         type: "line", // 设置指示器为直线
            //         lineStyle: {
            //             color: "#FFBE5C", // 竖线颜色
            //             width: 1, // 竖线宽度
            //         },
            //     },
            //     show: true,
            //     confine: true,
            //     backgroundColor: "rgba(0,0,0,0)",
            //     position: "top",
            //     textStyle: {
            //         color: "#78EC4E",
            //         fontStyle: "normal",
            //         fontWeight: "normal",
            //         fontSize: 14,
            //         lineHeight: "normal",
            //     },
            //     formatter: (params, elOne, elTwo) => {
            //         const htmlText = `<div class='custom-tooltip-style'>${params[0].data}</div>`;
            //         return htmlText;
            //     },
            // },
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
                data: ["02.15", "02.16", "02.17", "02.18", "02.19", "02.20", "02.21", "02.22"],
            },
            yAxis: {
                type: "value",
                minInterval: 100, //分割刻度范围
                splitLine: {
                    show: true,
                    lineStyle: {
                        opacity: 0.3, // 设置为半透明
                        type: 'dashed'
                    }
                },
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
                    data: [150, 230, 224, 218, 135, 147, 260, 350],
                    type: "line",
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(241, 176, 79, 0.39)' // 0% 处的颜色
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
                        color: "#FFBE5C",
                        borderColor: "#FFFFFF",
                        borderWidth: 5,
                    },
                },
                {
                    data: [150, 230, 224, 218, 135, 147, 260, 350],
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
        },
    },
});

onMounted(() => {
})
</script>

<template>
    <div class="lineChartCommon">
        <chart-base-v3 ref="chartBase" :options="options" @loadOver="loadOver" />
    </div>
</template>
