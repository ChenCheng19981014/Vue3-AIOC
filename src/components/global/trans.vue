<style scoped lang="scss">
@keyframes slide-left-in {
  0% {
    transform: translate(-100%, -50%);
  }

  100% {
    transform: translate(0%, -50%);
  }
}

@keyframes slide-right-in {
  0% {
    transform: translate(100%, -50%);
  }

  100% {
    transform: translate(0%, -50%);
  }
}

@keyframes slide-left-out {
  0% {
    transform: translate(0%, -50%);
  }

  100% {
    transform: translate(-100%, -50%);
  }
}

@keyframes slide-right-out {
  0% {
    transform: translate(0%, -50%);
  }

  100% {
    transform: translate(100%, -50%);
  }
}

.trans {
  z-index: 5;
  top: 50%;
  transform: translate(0%, -50%);
  position: fixed;
}

.trans-left-out {
  left: 0px;
  animation: slide-left-out 1s ease-out forwards;
}

.trans-left-in {
  left: 20px;
  animation: slide-left-in 1s ease-out forwards;
}

.trans-right-in {
  right: 20px;
  animation: slide-right-in 1s ease-out forwards;
}

.trans-right-out {
  right: 0px;
  animation: slide-right-out 1s ease-out forwards;
}
</style>

<script setup lang="ts">
import { ref, toRefs, defineProps, watch } from "vue";
import { useDebounceFn } from "@vueuse/core";
// 初始状态 进入
const initState = ref("in");
// 当前tab
const currentTab = ref<number>(0);

// 传入的 插槽信息
const props = defineProps({
  showIndex: Number,
  slotNumber: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String,
    default: "left",
  },
});

//  显示第几个  显示的方向  插槽的个数
const { showIndex, direction, slotNumber } = toRefs(props);

// 进行防抖处理 再次进入
const debouncedFn = useDebounceFn(() => {
  initState.value = "in";
  currentTab.value = showIndex.value as number;
}, 1000);

// 监听显示
watch(
  () => props,
  (newValue, oldValue) => {
    initState.value = "out";
    debouncedFn();
    // console.log(`count 变化了：${oldValue} -> ${newValue}`);
  },
  { deep: true }
);

// 监听显示
watch(
  () => props.showIndex,
  () => {
    // 初始化 先设置当前tab 然后再进入
    currentTab.value = props.showIndex as number;
    // 做动画
    debouncedFn();
  },
  { immediate: true, deep: true, once: true }
);


</script>

<template>

  <div :class="` trans-${props.direction}-${initState}  `" class="trans">

    <template v-for="(_, index) in slotNumber">

      <slot :name="'slot-' + index" v-if="currentTab === index" :key="index"></slot>

    </template>

  </div>
</template>
