<!-- 设备停机原因占比 -->
<template>
    <div class="shutdown">
        <title-type-common :tips="'设备停机原因占比'">
            <div class="shutdown-content">
                <div class="echarts">
                    <pie-chart 
                        :position="['20%', '38%']"
                        :legendPositiony = "'-3%'"
                        :legendPositionx = "'0%'"
                        :chartData="chartData"
                    >
                    <div class="image">
                        <img src="@/assets/images/Union.png" alt="无图">
                    </div>
                    </pie-chart>
                </div>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 模拟数据
let chartData = ref<any[]>([]);

onMounted(() => {
    chartData.value = [
        { name: '维修保养', value: 33 },
        { name: '人工停机', value: 33 },
        { name: '工艺调整', value: 22 },
        { name: '更换耗材', value: 12 }
    ]
})
</script>

<style scoped lang="scss">
.shutdown {
    width: 100%;
    height: 190px;
    .shutdown-content {
        width: 100%;
        height: 152px;
        .echarts {
            display: flex;
            padding: 16px 16px 0px 16px;
            align-items: flex-start;
            align-self: stretch;
            height: 152px;
            position: relative;
            .image {
                position: absolute;
                top: 48px;
                left: 78px;
                img {
                    width: 36px;
                    height: 36px;
                }
            }
        }
    }
}
</style>
