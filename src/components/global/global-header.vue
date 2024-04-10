<style scoped lang="scss">
@import "@/design/hooks.scss";

.global-header {
  width: 100%;
  height: 190px;
  background: url("@/assets/images/全局顶部.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  .global-title {
    font-family: "pm1";
    text-align: center;
    // text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(6, 130, 231, 0.55);
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.72px;
    background: var(--green,
        linear-gradient(180deg, #fff 60.42%, #00ff85 125%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 17px;
  }

  .global-day {
    top: 24.5px;
    width: auto;
    right: 44px;
    position: absolute;
    @include center;

    >div {
      color: rgba(255, 255, 255, 0.9);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .day {
      font-size: 16px;
      margin-right: 16px;
    }

    .week {
      font-size: 14px;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import moment from "moment";
// 星期
const week = ref("");
// 日期
const date = ref("");
// 定时器
const timer = ref();

const getWeek = (date: any) => {
  // 参数时间戳
  let week = moment(date).day();
  switch (week) {
    case 1:
      return "星期一";
    case 2:
      return "星期二";
    case 3:
      return "星期三";
    case 4:
      return "星期四";
    case 5:
      return "星期五";
    case 6:
      return "星期六";
    case 0:
      return "星期日";
  }
};

const loadTime = () => {
  date.value = moment().format("YYYY-MM-DD");
  week.value = getWeek(new Date()) as string;
  setTimeout(() => {
    loadTime();
  }, 1000);
};

onMounted(() => {
  loadTime();

  timer.value = setInterval(() => {
    loadTime();
  }, 10 * 60 * 1000); // 10分钟，以毫秒为单位
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="global-header">
    <!-- 全局标题 -->
    <div class="global-title">AIOC智能运行中心平台</div>

    <!-- 全局 日期 -->
    <div class="global-day">
      <!-- 日期 -->
      <div class="day">{{ date }}</div>
      <!-- 星期 -->
      <div class="week">{{ week }}</div>
    </div>
  </div>
</template>
