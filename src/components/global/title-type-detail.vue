<!-- 查看详情背景 -->
<template>
    <div class="detail">
        <div class="title">
            <div class="text">{{ props.tips }}</div>
            <div class="btn" @click="ViewDetails"></div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tips: String
})

// 查看详情回调事件
const ViewDetails = () => {}
</script>

<style scoped lang="scss">
.detail {
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
        justify-content: space-between;
        align-items: center;
        padding-right: 16px;
        .text {
            text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(6, 130, 231, 0.55);

            /* 标题/1级标题-20 */
            font-family: pm1;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.6px;
            padding-left: 49px;
        }
        .btn {
            width: 84px;
            height: 26px;
            background-image: url("@/assets/images/查看详情.png");
            background-size: 100% 100%;
            cursor: pointer;
            &:hover {
                width: 84px;
                height: 26px;
                background-image: url("@/assets/images/查看详情悬停.png");
                background-size: 100% 100%;
            }
        }
    }
}
</style>
