<!-- 通用饼图 -->
<template>
    <div class="pie_chart">
        <chart-base-v3 :options="options"></chart-base-v3>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    position: Array,
    legendPositiony: String,
    legendPositionx: String,
    chartData: Array,
})

const chartData = props.chartData?.slice(1) || []
console.log(props.chartData)

// 改变legend的top值
const chageTop = () => {
    if (props.chartData[0].name === "能源费用统计") {
        return '30%'
    }
}

let options = ref({})
// 定义一个总合变量
let dataNum = 0;
// 把每个值加在一起赋值给dataNum
for (var i = 0; i < chartData.length; i++) {
    dataNum += chartData[i].value;
}
const colorList = ['#00ffff','#006ced','#00ff8a','#ffb22d','#fa7eed'];
const sum = chartData.reduce((per, cur) => per + cur.value, 0);
const gap = (1 * sum) / 100;
const pieData1: any[] = [];
const pieData2: any[] = [];
const gapData = {
    name: '',
    value: gap,
    itemStyle: {
        color: 'transparent',
    },
};
for (let i = 0; i < chartData.length; i++) {
    pieData1.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 100,
            shadowColor: '#2a2a34',
            shadowBlur: 5,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            borderColor: '#2a2a34',
            borderWidth: 0.1,
        },
    });
    pieData1.push(gapData);

    pieData2.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 100,
            color: colorList[i],
            opacity: 0.1,
            shadowColor: '#000',
            shadowBlur: 1,
            shadowOffsetY: 5,
            shadowOffsetX: 0,
        },
    });
    pieData2.push(gapData);
}

options.value = {
    legend: {
        right: props.legendPositionx || '0%',
        top: props.legendPositiony || chageTop(),
        align: 'left',
        itemGap: 18,
        itemWidth: 12,
        itemHeight: 12,
        width: 300,
        height: 400,
        shadowBlur: 0,
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        borderColor: '#2a2a34',
        borderWidth: 0,
        orient: 'horizontal',
        textStyle: {
            color: '#D8DDE3',
            rich: {
                name: {
                    align: 'left',
                    fontSize: 14,
                    color: '#D8DDE3',
                    fontWeight: 500,
                    width: 70,
                },
                val: {
                    align: 'left',
                    fontSize: 20,
                    fontWight: 700,
                    fontFamily: 'ding', // 设置字体
                    color: '#fff',
                    width: 90,

                },
                percent: {
                    color: '#D8DDE3',
                    fontSize: 20,
                    fontFamily: 'ding', // 设置字体
                    fontWight: 700,
                },
            },
        },
        formatter: (name: string) => {
            const item: any = chartData.find((i) => {
                return i.name === name;
            });
            let p
            if (item.value === 0) {
                p = 0
            } else {
                p = ((item.value / sum) * 100).toFixed(2);
            }
            return '{name|' + name + '}' + '{val|' + item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '}' + '{percent|' + p + '}' + ' %';
        },
    },
    color: colorList,
    series: [
        {
            type: 'pie',
            z: 3,
            roundCap: true,
            radius: ['55%', '65%'],
            center: props.position || ['20%', '54%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: pieData1,
        },
        {
            type: 'pie',
            z: 2,
            radius: ['55%', '60%'],
            center: props.position || ['20%', '54%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            silent: true,
            data: pieData2,
        },
    ],
};

watch(props, ()=> {
    // chartData.push(...chartData1)
    chartData.splice(0, chartData.length, ...props.chartData?.slice(1))
    const colorList = ['#00ffff','#006ced','#00ff8a','#ffb22d','#fa7eed'];
    const sum = chartData.reduce((per, cur) => per + cur.value, 0);
    const gap = (1 * sum) / 100;
    const pieData1: any[] = [];
    const pieData2: any[] = [];
    const gapData = {
        name: '',
        value: gap,
        itemStyle: {
            color: 'transparent',
        },
    };
    for (let i = 0; i < chartData.length; i++) {
        pieData1.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 100,
                shadowColor: '#2a2a34',
                shadowBlur: 5,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
                borderColor: '#2a2a34',
                borderWidth: 0.1,
            },
        });
        pieData1.push(gapData);

        pieData2.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 100,
                color: colorList[i],
                opacity: 0.1,
                shadowColor: '#000',
                shadowBlur: 1,
                shadowOffsetY: 5,
                shadowOffsetX: 0,
            },
        });
        pieData2.push(gapData);
    }
    options.value = {
        legend: {
            right: props.legendPositionx || '3%',
            top: props.legendPositiony || chageTop(),
            align: 'left',
            itemGap: 18,
            itemWidth: 12,
            itemHeight: 12,
            width: 300,
            height: 400,
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            borderColor: '#2a2a34',
            borderWidth: 0,
            orient: 'horizontal',
            textStyle: {
                color: '#D8DDE3',
                rich: {
                    name: {
                        align: 'left',
                        fontSize: 14,
                        color: '#D8DDE3',
                        fontWeight: 500,
                        width: 70,
                    },
                    val: {
                        align: 'left',
                        fontSize: 20,
                        fontWight: 700,
                        fontFamily: 'ding', // 设置字体
                        color: '#fff',
                        width: 90,

                    },
                    percent: {
                        color: '#D8DDE3',
                        fontSize: 20,
                        fontFamily: 'ding', // 设置字体
                        fontWight: 700,
                    },
                },
            },
            formatter: (name: string) => {
                const item: any = chartData.find((i) => {
                    return i.name === name;
                });
                let p
                if (item.value === 0) {
                    p = 0
                } else {
                    p = ((item.value / sum) * 100).toFixed(2);
                }
                return '{name|' + name + '}' + '{val|' + item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '}' + '{percent|' + p + '}' + ' %';
            },
        },
        color: colorList,
        series: [
            {
                type: 'pie',
                z: 3,
                roundCap: true,
                radius: ['55%', '65%'],
                center: props.position || ['20%', '54%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: pieData1,
            },
            {
                type: 'pie',
                z: 2,
                radius: ['55%', '60%'],
                center: props.position || ['20%', '54%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                silent: true,
                data: pieData2,
            },
        ],
    };
})
</script>

<style scoped lang="scss">
.pie_chart {
    width: 100%;
    height: 100%;
    min-height: 180px;
}
</style>
