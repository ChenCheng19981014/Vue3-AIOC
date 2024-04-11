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
const props = defineProps(['monitorInfo']);

// 视频监控 信息
const { monitorInfo } = toRefs(props);
</script>
  
<template>
   <div class='outFactory-monitor'>
      <!-- titles -->
      <title-type-common :tips="'视频监控'">
         <!-- 监控 组件 -->
         <machine-states-list :listInfo="monitorInfo" class="list" />
      </title-type-common>
   </div>
</template>