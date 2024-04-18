<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-safe-right {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .apply{
        width: 100%;
        height: 202px;
    }
    .alarm {
        width: 100%;
        height: 234px;
    }
    .realTime {
        width: 100%;
        height: 456px;
    }
}
</style>
  
<script setup lang='ts'>
import Apply from "./components/apply.vue"
import Alarm from "./components/alarm.vue"
import RealTime from "./components/realTime.vue"

</script>
  
<template>
    <div class='outFactory-safe-right'>
        <div class="apply">
            <Apply></Apply>
        </div>
        <div class="alarm">
            <Alarm></Alarm>
        </div>
        <div class="realTime">
            <RealTime></RealTime>
        </div>
    </div>
</template>