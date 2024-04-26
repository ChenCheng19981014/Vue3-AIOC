<!-- 倒三角按钮 -->
<template>
    <div class="triangle-main">
        <div class="card-content" @click="handleTriangle(props.text)">
            <div class="triangle"></div>
            <div class="name" :class="{ 'selected': showName }">
                <!-- 替换名称: -->
                <div class="text">{{ props.text }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
const props = defineProps({
    text: {
        type: String,
        default: '默认值'
    }
})

const showName = ref(false);
const handleTriangle = (name) => {
    showName.value = !showName.value;
    console.log(name)
}

// 点击其他区域时隐藏 .name 元素
const clickHandler = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const nameElement = document.querySelector('.name');
  const cardContentElement = document.querySelector('.card-content');
  if (!nameElement || !cardContentElement) return;

  if (!cardContentElement.contains(target)) {
    showName.value = false;
  }
}

document.addEventListener('click', clickHandler);

onBeforeUnmount(() => {
  document.removeEventListener('click', clickHandler);
});

</script>

<style scoped lang="scss">
.triangle-main {
    height: 47px;
    font-family: "pm";
    z-index: 3;
    cursor: pointer;
    .card-content {
        width: 52px;
        height: 37px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .triangle {
            width: 52px;
            height: 37px;
            background-image: url("@/assets/images/triangle.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            z-index: 3;
            position: absolute;
        }
        .name {
            position: absolute;
            left: 70%;
            height: 31px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to right, #0131c4, #00ff85);
            border-radius: 3px;
            transform: skewX(-33deg) scaleX(0);
            transform-origin: 0 60%;
            transition: all 0.3s;
            .text {
                white-space: nowrap;
                user-select: none; /* 禁止文字被选中 */
                font-weight: 400;
                font-family: "pm";
                padding: 8px 30px 8px 30px;
                font-size: 20px;
                text-align: center;
                text-shadow: 0px 0px 3.8214492797851562px 0px #4479e0;
                color: #fff;
                transform: skewX(33deg) scaleX(1);
                letter-spacing: 1.6px;
            }
        }

        .triangle:hover+.name {
            transform-origin: 0 60%;
            transform: skewX(-33deg) scaleX(1);
        }

        .name:hover {
            transform-origin: 0 60%;
            transform: skewX(-33deg) scaleX(1);
        }

        .selected {
            display: flex !important;
            transform-origin: 0 60% !important;
            transform: skewX(-33deg) scaleX(1) !important;
        }
    }
}
</style>
