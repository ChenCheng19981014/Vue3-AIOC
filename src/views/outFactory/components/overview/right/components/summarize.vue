<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-summarize {
    width: 100%;
    height: 100%;

    .summarize-content {
        width: 100%;
        height: 258px;
        @include center;
        flex-direction: column;
        justify-content: space-between;

        .list{
            margin-top: 16px;
            height: 76px;
        }


        .ec {
            display: flex;
            padding: 16px 16px 0px 16px;
            align-items: flex-start;
            align-self: stretch;
            height: 152px;
            position: relative;
            .image {
                position: absolute;
                top: 56px;
                left: 72px;
                img {
                    width: 48px;
                    height: 48px;
                }
            }
        }
    }
}
</style>

<script setup lang="ts">
import { toRefs } from "vue";
// props 值
const props = defineProps(["summarizeInfo", "title", "chartData"]);

// 视频监控 信息
const { summarizeInfo, title, chartData } = toRefs(props);
</script>

<template>
    <div class="outFactory-summarize">
        <!-- titles -->
        <title-type-common :tips="title">
            <div class="summarize-content">
                <!-- 监控 组件 -->
                <machine-states-list :listInfo="summarizeInfo" class="list" />

                <div class="ec">
                    <pie-chart 
                        :position="['20%', '38%']"
                        :legendPositiony = "'-4%'"
                        :legendPositionx = "'0%'"
                        :chartData="chartData"
                    >
                    <div class="image">
                        <img src="@/assets/images/设备概括.png" alt="无图">
                    </div>
                    </pie-chart>
                </div>
            </div>
        </title-type-common>
    </div>
</template>
