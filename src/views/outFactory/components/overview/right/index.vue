<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-overview-right {
    width: 430px;
    height: 940px;
    background-color: #333;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .monitor {
        width: 100%;
        height: 130px;
        background: red;
    }
    .summarize {
        width: 100%;
        height: 296px;
        background: green;
    }
    .alarm {
        width: 100%;
        height: 456px;
        background: blue;
    }
}
</style>
  
<script setup lang='ts'>

</script>
  
<template>
    <div class='outFactory-overview-right'>
        <div class="monitor">监控</div>
        <div class="summarize">概括</div>
        <div class="alarm">告警</div>
    </div>
</template>