<!-- 占比条形图 -->
<template>
    <div class="proportional">
        <chart-base-v3 :options="options"></chart-base-v3>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value = ref([25, 20])

// 计算总和
let total = value.value.reduce((acc, cur) => acc + cur, 0);

let options = {
    textStyle: {
        rich: {
            a: {
                disflay: 'flex',
                color: 'rgba(255, 255, 255, 0.70)',
                fontFamily: "Source Han Sans CN",
                fontSize: 14,
                fontWeight: 500,
            },
            b: {
                color: '#FFF',
                fontFamily: "ding",
                fontSize: 20,
                fontWeight: 700,
            },
            c: {
                color: 'rgba(255, 255, 255, 0.70)',
                fontFamily: "ding",
                fontSize: 20,
                fontWeight: 700,
            },
            d: {
                color: 'rgba(255, 255, 255, 0.70)',
                fontFamily: "ding",
                fontSize: 14,
                fontWeight: 700,
            }
        },
    },
    legend: {
        bottom: '0%',
        left:'0%',
        selector: 'legend-container',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 40,
        textStyle:{
            color: 'rgba(255, 255, 255, 0.70)',
            fontFamily: "Source Han Sans CN",
            fontSize: 14,
            fontWeight: 500,
        },
        formatter: function(name) {
            // 获取对应系列的数据
            let seriesData = options.series.find(series => series.name === name)?.data[0];
            console.log(seriesData)
            if (seriesData) {
                // 计算百分比
                let percentage = (seriesData.value / total) * 100;
                // 使用 ECharts 提供的富文本格式化显示的文本，为数值添加不同的样式
                return `{a|${name}}    {b|${seriesData.value}}     {c|${percentage.toFixed(0)}}{d|%}`;
            }
        },
        data:[{ name :'未带安全帽' }, { name :'区域入侵' }]
    },
    xAxis: [{
        type: 'value',
        axisLine: { // 隐藏 xAxis 的轴线
            show: false
        },
        splitLine: { // 隐藏 xAxis 的分隔线
            show: false,
        },
        axisTick: { // 隐藏 xAxis 的刻度
            show: false
        }
    }],
    yAxis: [{
        data: [''],
        axisLine: { // 隐藏 yAxis 的轴线
            show: false
        },
        splitLine: { // 隐藏 yAxis 的分隔线
            show: false
        },
        axisTick: { // 隐藏 yAxis 的刻度
            show: false
        }
    }],
    series: [
        {
            name:'未带安全帽',
            type:'bar',
            barWidth:16,
            stack: '告警类型占比', // 堆叠
            itemStyle: {
                color: '#00FF85',
                borderRadius: [15, 0, 0, 15],
            },
            data:[{
                value: value.value[0],
                itemStyle: {
                normal: {
                    color: '#00FF85'
                }
            }
            }]
        },
        {
            name:'区域入侵',
            type:'bar',
            barWidth:16,
            stack: '告警类型占比',
            itemStyle: {
                color: '#0066FF',
                borderRadius: [0, 15, 15, 0],
            },
            data:[{
                value: value.value[1],
                itemStyle: {
                normal: {
                    color: '#0066FF'
                }
            }
            }]
        }
    ],
    // 图表网格
    grid: {
        top: -30,
        bottom: 0,
        left: 4,
        right: 10
    },
};

</script>

<style scoped lang="scss">
.proportional {
    width: 430px;
    height: 100%;
}
</style>
