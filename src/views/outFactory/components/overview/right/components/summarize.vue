<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory-summarize {
    width: 100%;
    height: 100%;

    .summarize-content {
        width: 100%;
        height: 100%;
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
            background-color: rgba(0,0,0,0.5);
        }
    }
}
</style>

<script setup lang="ts">
import { toRefs } from "vue";
// props 值
const props = defineProps(["summarizeInfo"]);

// 视频监控 信息
const { summarizeInfo } = toRefs(props);
</script>

<template>
    <div class="outFactory-summarize">
        <!-- titles -->
        <title-type-common :tips="'设备概括'">
            <div class="summarize-content">
                <!-- 监控 组件 -->
                <machine-states-list :listInfo="summarizeInfo" class="list" />

                <div class="ec"></div>
            </div>
        </title-type-common>
    </div>
</template>
