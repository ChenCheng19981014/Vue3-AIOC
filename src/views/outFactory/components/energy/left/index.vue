<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-energy-left {
    width: 430px;
    height: 940px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include tips;
    .energy-dian {
        width: 430px;
        height: 299px;
    }
    .energy-shui {
        width: 430px;
        height: 299px;
    }
    .energy-ran {
        width: 430px;
        height: 299px;
    }
}
</style>
  
<script setup lang='ts'>
import DianNeng from "./components/dianneng.vue"
import ShuiNeng from "./components/shuineng.vue"
import RanQi from "./components/ranqi.vue"

</script>
  
<template>
    <div class='outFactory-energy-left'>
        <!-- 电能统计 -->
        <div class="energy-dian">
            <DianNeng></DianNeng>
        </div>
        <!-- 水能统计 -->
        <div class="energy-shui">
            <ShuiNeng></ShuiNeng>
        </div>
        <!-- 燃气统计 -->
        <div class="energy-ran">
            <RanQi></RanQi>
        </div>
    </div>
</template>