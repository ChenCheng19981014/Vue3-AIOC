<template>
    <div class="outFactory-safe-apply">
        <title-type-common :tips="'资源使用情况'">
            <div class="apply-content">
                <div class="apply-content-item" v-for="(item, index) in applyData" :key="index">
                    <piechart-luminous :value="item.value">
                        <div class="icon">
                            <img :src="item.imgUrl" alt="图标">
                            <div class="text">{{ item.text }}</div>
                        </div>
                    </piechart-luminous>
                </div>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 模拟数据
const applyData = ref([
    { imgUrl: '/src/assets/images/CPU.png', text: 'CPU', value: '90.1' },
    { imgUrl: '/src/assets/images/内存.png', text: '内存', value: '15.5' },
    { imgUrl: '/src/assets/images/硬盘.png', text: '硬盘', value: '12.8' },
])

</script>

<style scoped lang="scss">
.outFactory-safe-apply {
    width: 100%;
    height: 100%;
    .apply-content {
        width: 100%;
        height: 164px;
        display: flex;
        justify-content: space-between;
        .apply-content-item {
            width: 98px;
            height: 132px;
            padding-top: 32px;
            .icon {
                width: 100%;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                img {
                    width: 24px;
                    height: 24px;
                }
                .text {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: center;
                    font-family: "Source Han Sans CN";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    padding-left: 4px;
                }
            }
        }
    }
}
</style>
