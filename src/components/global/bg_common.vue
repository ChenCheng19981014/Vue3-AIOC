<!-- 普通背景 -->
<template>
    <div class="common">
        <div class="title">{{ props.tips }}</div>
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
    background: pink;
    // background-image: url();
    background-size: 100% 100%;
    background-image: no-repeat;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .title { 
        background: yellow;
        width: 100%;
        height: 38px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
}
</style>
