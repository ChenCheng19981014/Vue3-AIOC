<!-- 水能统计 -->
<template>
    <div class="shuineng">
        <title-type-time :tips="'水能统计'">
            <div class="shuineng-content-title">
                <div class="icon">
                    <img src="@/assets/images/energy-shui.png" alt="图标">
                    <span>水能耗</span>
                </div>
                <div class="value">
                    22,350<span>（kWh）</span>
                </div>
                <div class="rate">
                    同比
                    <img src="@/assets/images/上箭头.png" alt="">
                    <span>4.5 <span>%</span> </span>
                </div>
            </div>
            <div class="shuineng-content-echarts">
                <line-chart-common :colors="colors" />
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

let colors = reactive({
    verticalLineColor: '#00FFE0', // 竖线颜色
    gradientBackground: 'rgba(1, 255, 133, 0.39)', // 渐变背景
    InflectionPoint: '#00FFE0',
    tooltip: 'CustomTooltip1'
})

</script>

<style scoped lang="scss">
.shuineng {
    width: 100%;
    height: 299px;
    .shuineng-content-title {
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
    .shuineng-content-echarts {
        width: 100%;
        height: 100%;
    }
}
</style>
