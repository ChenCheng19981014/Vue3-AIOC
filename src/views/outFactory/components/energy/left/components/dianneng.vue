<!-- 电能统计 -->
<template>
    <div class="dianneng">
        <title-type-time :tips="title" @delivery-date='deliveryDate'>
            <div class="dianneng-content-title">
                <div class="icon">
                    <img src="@/assets/images/energy-dian.png" alt="图标">
                    <span>{{ tips }}</span>
                </div>
                <div class="value">
                    {{ currentTopsInfo[0] }}<span>{{ currentTopsInfo[1] }}</span>
                </div>
                <div class="rate">
                    {{ currentTopsInfo[2] }}
                    <img :src="`${currentTopsInfo[3] == '上升'
                        ? safeUp
                        : safeDown
                        }`" alt="" />
                    <span>{{ currentTopsInfo[4] }} <span>{{ currentTopsInfo[5] }}</span> </span>
                </div>
            </div>
            <div class="dianneng-content-echarts">
                <line-chart-common :colors="colors" :chartData="chartData" />
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import safeUp from "@/assets/images/icon-上升.png";
import safeDown from "@/assets/images/icon-下降.png";
import { reactive, toRefs, ref,  computed } from 'vue'
const props = defineProps(['title', 'tips', 'msg']);
// 当前 时间
const currentTime = ref('day')
// 大标题 小标题 信息
const { tips, title, msg } = toRefs(props);

// 当前顶部 信息
const currentTopsInfo = ref(computed(() => msg?.value.top[currentTime.value].map((item: { [key: string]: any }) => item.value)))


// 表单 颜色 设置
const colors = reactive({
    verticalLineColor: '#00FFE0', // 竖线颜色
    gradientBackground: 'rgba(1, 255, 133, 0.39)', // 渐变背景
    InflectionPoint: '#00FFE0',
    tooltip: 'CustomTooltip1'
})

// 表单 数据
const chartData = ref({
    // 使用 computed 属性计算 xAxis 和 yAxis
    xAxis: computed(() => msg?.value[currentTime.value][0].map((item: { [key: string]: any }) => item.value)),
    yAxis: computed(() => msg?.value[currentTime.value][1].map((item: { [key: string]: any }) => item.value)),
});

// 切换 日期
const deliveryDate = (time: string) => {
    currentTime.value = time;
}

</script>

<style scoped lang="scss">
.dianneng {
    width: 100%;
    height: 299px;

    .dianneng-content-title {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 100%;
        height: 48px;
        padding: 8px 8px 8px 16px;
        display: flex;
        align-items: center;

        .icon {
            width: 100%;
            height: 100%;
            flex: 1;
            display: flex;
            align-items: center;

            img {
                width: 29.714px;
                height: 32px;
                margin-right: 8px;
            }

            span {
                color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        .value {
            flex: 2;
            color: var(--color-text-text-100, #FFF);
            /* 特殊数字/数字1-28b */
            font-family: "ding";
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            span {
                color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                font-family: "Source Han Sans CN";
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }

        .rate {
            flex: 1;
            color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
            font-family: "Source Han Sans CN";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            img {
                width: 6.001px;
                height: 13.001px;
                flex-shrink: 0; // 防止图片缩放
                margin: 0 4px;
            }

            span {
                color: var(--color-text-text-100, #FFF);
                font-family: "ding";
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                span {
                    color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                    font-family: "ding";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    letter-spacing: 1.12px;
                }
            }
        }
    }

    .dianneng-content-echarts {
        width: 100%;
        height: 100%;
    }
}
</style>
