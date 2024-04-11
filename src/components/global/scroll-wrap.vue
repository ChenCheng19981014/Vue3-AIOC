<template>
    <div class="scroll-wrap" ref="scroll" @mouseenter="enterMouse" @mouseleave="autoScroll" @scroll="handleScroll">
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import * as TWEEN from "@tweenjs/tween.js";
  import { ref, onMounted, onUnmounted } from "vue";
  
  const scroll = ref<HTMLElement | null>(null); // 滚动容器
  let intv: NodeJS.Timeout | null = null; // 定时器
  
  // 自动滚动
  const autoScroll = () => {
    enterMouse();
    intv = setInterval(() => {
      const height = scroll.value!.scrollTop + props.distance;
      const targetTop = height > scroll.value!.scrollHeight - scroll.value!.clientHeight ? 0 : height;
      const tween = new TWEEN.Tween({ top: scroll.value!.scrollTop })
        .to({ top: targetTop }, props.times1)
        .onUpdate((data) => {
          if (scroll.value) {
            scroll.value.scrollTo(0, data.top);
          }
        })
        .start();
      animate();
    }, props.times);
  };
  
  // 鼠标移入时，自动滚动停止
  const enterMouse = () => {
    clearInterval(intv!);
    intv = null;
  };
  
  // 手动更新Tween动画
  const animate = () => {
    requestAnimationFrame(animate);
    TWEEN.update();
  };
  
  // 处理滚动事件
  const handleScroll = () => {
    if (scroll.value!.scrollTop === 0) {
      autoScroll();
    }
  };
  
  const props = defineProps({
    distance: {
      type: Number,
      default: 1000,
    },
    times: {
      type: Number,
      default: 5000,
    },
    times1: {
      type: Number,
      default: 500,
    },
  });
  
  onMounted(() => {
    autoScroll();
  });
  onUnmounted(() => {
    clearInterval(intv!);
  });
  </script>
  
  <style lang="scss" scoped>
  .scroll-wrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  
  .scroll-wrap::-webkit-scrollbar {
    width: 0;
  }
  </style>
  