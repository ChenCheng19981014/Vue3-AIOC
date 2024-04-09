<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-overview-left {
    width: 430px;
    height: 940px;
    background-color: #333;
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
        background: green;
    }
    .energy {
        width: 100%;
        height: 374px;
        background: blue;
    }
}
</style>
  
<script setup lang='ts'>

</script>
  
<template>
    <div class='outFactory-overview-left'>
        <div class="statistics">
            <bg_time :tips="'能量消耗'">
                <pie_chart></pie_chart>
            </bg_time>
        </div>
        <div class="cost">费用</div>
        <div class="energy">能耗</div>
    </div>
</template>