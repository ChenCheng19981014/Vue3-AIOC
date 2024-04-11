<style scoped lang='scss'>
.outFactory-monitor {
   width: 100%;
   height: 100%;
}
</style>
  
<script setup lang='ts'>
import { ref } from 'vue';

</script>
  
<template>
   <div class='outFactory-monitor'>
      <!-- titles -->
      <title-type-common :tips="'视频监控'">
         <!-- 监控 组件 -->
         <machine-states-list />
      </title-type-common>
   </div>
</template>