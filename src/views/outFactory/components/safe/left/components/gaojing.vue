<!-- 告警统计 -->
<template>
    <div class="outFactory-safe-gaojing">
        <title-type-detail :tips="'告警统计'">

            <div class="content"></div>

            <!-- charts -->
            <div class="warning-charts">
                <line-chart-common />
            </div>

        </title-type-detail>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.outFactory-safe-gaojing {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .content {
        padding: 16px;
        width: 100%;
        height: 62px;
        // background-color: #333;
    }

    .warning-charts {
        width: 100%;
        height: 178px;
    }
}
</style>
