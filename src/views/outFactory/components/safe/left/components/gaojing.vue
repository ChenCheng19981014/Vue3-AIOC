<!-- 告警统计 -->
<template>
    <div class="outFactory-safe-gaojing">
        <title-type-detail :tips="'告警统计'">
            <div class="content">
                <div class="whole">
                    {{ warning.tips[0].value }}<span>{{ warning.tips[2].value }}</span>{{ warning.tips[3].value }}
                </div>
                <div class="week">
                    {{ warning.tips[4].value }}<span>{{ warning.tips[6].value }}</span>{{ warning.tips[7].value }}
                </div>
            </div>
            <!-- charts -->
            <div class="warning-charts">
                <line-chart-common :chartData="warning.charts.chartData" :colors="warning.charts.colors"/>
            </div>
        </title-type-detail>
    </div>
</template>

<script setup lang="ts">
import { toRefs,  } from 'vue';

const props = defineProps(['warning']);

const { warning } = toRefs(props);

// console.log('告警统计:', warning.value.details, warning.value.tips, warning.value);

</script>

<style scoped lang="scss">
.outFactory-safe-gaojing {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .content {
        padding: 16px;
        width: 100%;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .whole,
        .week {
            color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
            /* 文本/正文2-14m */
            font-family: "Source Han Sans CN";
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: flex;
            align-items: center;

            span {
                padding: 0 6px 0 12px;
                color: var(--color-text-text-100, #FFF);

                /* 特殊数字/数字1-28b */
                font-family: "ding";
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }

    .warning-charts {
        width: 100%;
        height: 178px;
    }
}</style>
