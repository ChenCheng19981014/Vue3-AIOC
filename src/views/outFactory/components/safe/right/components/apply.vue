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
import { ref, toRefs } from 'vue'

const props = defineProps(['applyInfo']);

const { applyInfo } = toRefs(props);

// 模拟数据
const applyData = ref([
    { imgUrl: `/src/assets/images/${applyInfo?.value[0].value}.png`, text: applyInfo?.value[0].value, value: applyInfo?.value[2].value },
    { imgUrl: `/src/assets/images/${applyInfo?.value[4].value}.png`, text: applyInfo?.value[4].value, value: applyInfo?.value[6].value },
    { imgUrl: `/src/assets/images/${applyInfo?.value[8].value}.png`, text: applyInfo?.value[8].value, value: applyInfo?.value[10].value },
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
}</style>
