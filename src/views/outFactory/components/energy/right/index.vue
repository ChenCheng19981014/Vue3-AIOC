<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-energy-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .cost {
        width: 100%;
        height: 334px;
    }
    .quyu {
        width: 100%;
        height: 182px;
    }
    .alarm {
        width: 100%;
        height: 374px;
    }
}
</style>
  
<script setup lang='ts'>
// import { ref } from 'vue';
import Cost from './components/cost.vue'
import QuYu from './components/quyu.vue'
import AlArm from './components/alarm.vue'

</script>
  
<template>
    <div class='outFactory-energy-right'>
        <!-- 能耗费用趋势 -->
        <div class="cost">
            <Cost></Cost>
        </div>
        <!-- 区域能耗 -->
        <div class="quyu">
            <QuYu></QuYu>
        </div>
        <!-- 实时告警 -->
        <div class="alarm">
            <AlArm></AlArm>
        </div>
    </div>
</template>