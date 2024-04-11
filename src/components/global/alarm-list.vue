<!-- 告警列表 -->
<template>
    <div class="alarm-list">
        <!-- 轮播 -->
        <scroll-wrap :distance="props.distanceHeight">
            <div class="alarm-list-item" v-for="(item, index) in dataList">
                <div class="alarm-top">
                    <div class="name">陌生人入侵</div>
                    <div class="situation">
                        <div class="region">
                            厂区外围
                            <span>|</span>
                            周界告警
                            </div>
                        <div class="grade">一般</div>
                    </div>
                </div>
                <div class="alarm-bottom">
                    <div class="machine">空压机</div>
                    <div class="situation">
                        <div class="time">2024-22-18  09:14:56</div>
                        <div class="handle">已解除</div>
                    </div>
                </div>
            </div>
        </scroll-wrap>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    dataList: Array,
    distanceHeight: {
        type: Number,
        default: 82
    }
})
</script>

<style scoped lang="scss">
.alarm-list {
    width: 100%;
    height: 402px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    .alarm-list-item {
        width: 100%;
        min-height: 74px;
        margin-bottom: 8px;
        padding: 12px 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .alarm-top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name {
                overflow: hidden;
                color: var(--color-text-text-100, #FFF);
                text-overflow: ellipsis;
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
            }
            .situation {
                display: flex;
                align-items: center;
                gap: 16px;
                .region {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: center;

                    /* 文本/正文2-14m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    span {
                        margin: 0px 8px;
                        opacity: 0.6;
                    }
                }
                .grade {
                    width: 44px;
                    height: 22px;
                    border-radius: 4px;
                    border: 1px solid var(--color-basic-white-white-50, rgba(255, 255, 255, 0.50));
                    background: var(--color-basic-cyan-cyan-2-50, rgba(0, 255, 224, 0.50));
                    box-shadow: 0px 0px 8px 0px #22FFD7 inset;

                    color: var(--color-text-text-100, #FFF);
                    text-align: center;
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
        .alarm-bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .machine {
                color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                /* 文本/正文2-14m */
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            .situation {
                display: flex;
                align-items: center;
                gap: 16px;
                .time {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: right;
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
                .handle {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: right;
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }
        }




        &:nth-child(even) {
            border-radius: 4px;
            background: var(--color-basic-black-black-12, rgba(0, 0, 0, 0.12));
        }
    }

}
</style>
