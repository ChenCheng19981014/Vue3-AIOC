<!-- 带年月日的背景 -->
<template>
    <div class="common">
        <div class="title">
            <div class="text">{{ props.tips }}</div>
            <div class="time">
                <div class="day">日</div>
                <div class="month">月</div>
                <div class="year">年</div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tips: String
})
</script>

<style scoped lang="scss">
.common {
    width: 100%;
    height: 100%;
    // background: pink;
    // background-image: url();
    background-size: 100% 100%;
    background-image: no-repeat;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .title { 
        // background: yellow;
        width: 100%;
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text {
            text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(6, 130, 231, 0.55);
            font-family: PangMenZhengDao;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.6px;
            padding: 10px 0 12px 49px;
        }
        .time {
            display: flex;
            align-items: center;
            gap: 8px;
            padding-right: 16px;
            .day, .month, .year {
                width: 38px;
                height: 24px;
                color: var(--100, #FFF);
                /* 文本/正文2-14m */
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                text-align: center;
                border-radius: 4px;
                border: 1px solid var(--color-basic-white-white-10, rgba(255, 255, 255, 0.10));
                background: var(--color-basic-white-white-10, rgba(255, 255, 255, 0.10));
            }
        }
    }
}
</style>
