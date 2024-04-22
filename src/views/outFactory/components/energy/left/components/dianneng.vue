<!-- 电能统计 -->
<template>
    <div class="dianneng">
        <title-type-time :tips="'电能统计'">
            <div class="dianneng-content-title">
                <div class="icon">
                    <img src="@/assets/images/energy-dian.png" alt="图标">
                    <span>电能耗</span>
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
            <div class="dianneng-content-echarts">
                <line-chart-common />
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

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
