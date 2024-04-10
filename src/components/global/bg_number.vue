<!-- 带文字背景 -->
<template>
    <div class="bgNumber">
        <div class="title">
            <div class="text">{{ props.tips }}</div>
            <div class="number">{{ props.num }}<span>元</span></div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    tips: String,
    num: String
})
</script>

<style scoped lang="scss">
.bgNumber {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .title { 
        background-image: url("@/assets/images/bg_title_num.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text {
            text-shadow: 0px 1px 4px rgba(87, 208, 198, 0.60);
            /* 标题/2级标题-18 */
            font-family: PangMenZhengDao;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.44px;
            padding-left: 24px;
        }
        .number {
            color: var(--color-text-text-100, #FFF);
            font-family: D-DIN;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 1.92px;
            span {
                color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                text-align: center;
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                padding: 0 16px 0 4px;
            }
        }
    }
}
</style>
