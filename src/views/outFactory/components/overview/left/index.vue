<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-overview-left {
    width: 430px;
    height: 940px;
    // background-color: #333;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .statistics {
        width: 100%;
        height: 262px;
    }
    .cost {
        width: 100%;
        height: 248px;
    }
    .energy {
        width: 100%;
        height: 374px;
    }
}
</style>
  
<script setup lang='ts'>
import NengLiang from "./components/nengliang.vue"
import NengYuan from "./components/nengyuan.vue"
import QuYu from "./components/quyu.vue"

</script>
  
<template>
    <div class='outFactory-overview-left'>
        <div class="statistics">
            <NengLiang></NengLiang>
        </div>
        <div class="cost">
            <NengYuan></NengYuan>
        </div>
        <div class="energy">
            <QuYu></QuYu>
        </div>
    </div>
</template>