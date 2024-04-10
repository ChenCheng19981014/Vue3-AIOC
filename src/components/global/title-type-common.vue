<!-- 普通title -->
<template>
    <div class="common">
        <div class="title">
            <div class="text">{{ props.tips }}</div>
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
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .title { 
        background-image: url("@/assets/images/bg_title.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 38px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .text {
            text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(6, 130, 231, 0.55);

            /* 标题/1级标题-20 */
            font-family: PangMenZhengDao;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.6px;
            padding-left: 49px;
        }
    }
}
</style>
