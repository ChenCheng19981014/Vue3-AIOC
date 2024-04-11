<!-- 能源费用统计 -->
<template>
    <div class="nengyuan">
        <title-type-number :tips="'能源费用统计'" :num="'1,000'">
            <pie-chart>
                <div class="image">
                    <img src="@/assets/images/Frame.png" alt="无图">
                </div>
            </pie-chart> 
        </title-type-number>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nengyuan {
    width: 100%;
    height: 100%;
    position: relative;
    .image {
    position: absolute;
    top: 116px;
    left: 70px;
        img {
            width: 40.25px;
            height: 40.25px;
        }
    }
}
</style>
