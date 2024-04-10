<!-- 通用饼图 -->
<template>
    <div class="pie_chart">
        <chart-base-v3 :options="options"></chart-base-v3>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const chartData = [
    { value: 4248, name: '电费' }, 
    { value: 3000, name: '水费' }, 
    { value: 2000, name: '煤气费' }, 
]

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
const pieData1 = [];
const pieData2 = [];
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
            borderWidth: 2,
        },
    });
    pieData1.push(gapData);

    pieData2.push({
        ...chartData[i],
        itemStyle: {
            borderRadius: 10,
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
    // backgroundColor: {
    //     image: bgPatternImgbgPatternImg,
    //     repeat: 'repeat',
    // },
    title: [{
        text: dataNum,
        x: '50%',
        y: '43%',
        textAlign: 'center',
        textStyle: {
            fontSize: '40',
            fontWeight: '500',
            color: '#98b5d2',
            textAlign: 'center',
            textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
        },
    }, {
        text: '消防报警',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#5c5a68',
            textAlign: 'center',
            textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
        },
    }, ],
    legend: {
        left: '10%',
        top: '35%',
        align: 'left',
        itemGap: 18,
        itemWidth: 20,
        itemHeight: 20,
        shadowBlur: 10,
        shadowOffsetY: 0,
        shadowOffsetX: 0,
        borderColor: '#2a2a34',
        borderWidth: 2,
        textStyle: {
            color: '#D8DDE3',
            rich: {
                name: {
                    verticalAlign: 'right',
                    align: 'left',
                    fontSize: 18,
                    color: '#D8DDE3',
                },
                val: {
                    verticalAlign: 'right',
                    align: 'left',
                    fontSize: 18,
                    color: '#D8DDE3',
                },
                percent: {
                    padding: [0, 0, 0, 10],
                    color: '#D8DDE3',
                    fontSize: 18,
                },
            },
        },
        // formatter: function(params, callback) {
		// 				var total = 0; //总数量
		// 				var percent = 0; //占比
		// 				chartData.forEach(function(value, index, array) {
		// 					total += value.value;
		// 				});
		// 				percent = ((params.value / total) * 100).toFixed(1);
		// 				return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
		// 			},
        formatter: (name: string) => {
            const item: any = chartData.find((i) => {
                return i.name === name;
            });
            const p = ((item.value / sum) * 100).toFixed(0);
            return '{name|' + name + '}' + '{val|' + item.value + '}' + '{percent|' + p + '}' + ' %';
        },
    },

    color: colorList,

    series: [
        {
            type: 'pie',
            z: 3,
            roundCap: true,
            radius: ['44%', '51%'],
            center: ['50%', '50%'],
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
            radius: ['40%', '55%'],
            center: ['50%', '50%'],
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

</script>

<style scoped lang="scss">
.pie_chart {
    width: 100%;
    height: 100%;
    min-height: 180px;
}
</style>
