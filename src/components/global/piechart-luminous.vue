<template>
    <div class="luminous">
        <chart-base-v3 ref="chartBase" :options="options" />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let options = ref({})

const { value } = defineProps({
    value: String
})
let angle = 0;//角度，用来做简单的动画效果的
options.value = {
    title: {
        text: [
            '{a|' + value + '}', // 上部分文字样式为a
            '{c|%}' // 下部分文字样式为c
        ].join('\n'), // 使用换行符分隔上下两部分文本
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 28,
                    color: '#ffffff',
                    fontWeight: '700',
                    fontFamily: 'ding'
                },
                c: {
                    fontSize: 14,
                    color: 'rgba(255, 255, 255, 0.70)',
                    fontWeight: '700',
                    fontFamily: 'ding'
                }
            }
        }
    },
    series: [
        //内环
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.85, // 圆的半径
                        startAngle: (0+-angle) * Math.PI / 180,
                        endAngle: (360+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        opacity: 0.3,
                        fill: "transparent",
                        lineWidth: 2, // 虚线的宽度
                        lineDash: [5, 5] // 设置虚线样式，例如：实线长度为5，空白长度为5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        //外环
        {
            name: '',
            type: 'pie',
            radius: ['88%', '97%'],
            silent: true,
            clockwise: true,
            startAngle: 98,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",
                }
            },
            data: [
                {
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            //外环发光
                            borderColor: '#00FFE0',
                            color: '#00FFE0' // 圆环的颜色设置为透明色
                        }
                    }
                },
                {
                    value: (100- value),
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0, 255, 224, 0.20)"
                        }
                    }
                }
            ]
        },
    ]
};


</script>

<style scoped lang="scss">
.luminous {
    width: 100%;
    height: 100%;
}
</style>
