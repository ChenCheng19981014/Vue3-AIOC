<!-- 能源费用统计 -->
<template>
    <div class="nengyuan">
        <title-type-number :tips="props.title" :num="props.storeExcelDataMap[0].value">
            <div class="nengyuan-content">
                <pie-chart :chartData="chartData">
                    <div class="image">
                        <img src="@/assets/images/Frame.png" alt="无图">
                    </div>
                </pie-chart>
            </div>
        </title-type-number>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
    storeExcelDataMap: Array as any,
    title: String,
})


// 图表格式
// {name: '电费', value: 4248 }


let chartData = ref(props.storeExcelDataMap.slice(1))
watch(props, () => {
    chartData.value = props.storeExcelDataMap.slice(1)
})
</script>

<style scoped lang="scss">
.nengyuan {
    width: 100%;
    height: 100%;
    position: relative;
    .nengyuan-content {
        width: 100%;
        height: 210px;
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
}
</style>
