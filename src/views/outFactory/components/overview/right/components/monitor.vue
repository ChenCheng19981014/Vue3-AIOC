<style scoped lang='scss'>
.outFactory-monitor {
   width: 100%;
   height: 100%;

   .list {
      margin-top: 16px;
      height: 76px;
   }
}
</style>
  
<script setup lang='ts'>
import { toRefs } from 'vue';
// props 值
const props = defineProps(['monitorInfo', 'title']);

// 视频监控 信息
const { monitorInfo, title } = toRefs(props);

console.log(" 1212", monitorInfo)
</script>
  
<template>
   <div class='outFactory-monitor'>
      <!-- titles -->
      <title-type-common :tips="title">
         <!-- 监控 组件 -->
         <machine-states-list :listInfo="monitorInfo" class="list" />
      </title-type-common>
   </div>
</template>