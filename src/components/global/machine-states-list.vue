<style scoped lang="scss">
@import "@/design/hooks.scss";

.machine-states-list {
    width: 100%;
    height: 100%;
    @include center;
    justify-content: flex-start;
    padding: 8px 8px;
    box-sizing: border-box;

    .img {
        width: 60px;
        height: 60px;

        >img {
            width: 100%;
            height: 100%;
        }
    }

    .right-list {
        width: 354px;
        margin-left: 16px;
        height: 60px;
        @include center;
        justify-content: space-between;
        // justify-content: space-around;
        // justify-content: space-evenly;

        // 右侧每一项
        .list-item {
            height: 60px;
            @include center;
            position: relative;

            // background-color: rgba(0,0,0,.5);
            .dot {
                width: 16px;
                height: 100%;
                @include center;
                flex-direction: column;
                justify-content: flex-start;

                .img {
                    width: 16px;
                    height: 16px;
                    position: relative;
                }
            }

            .right-content {
                margin-left: 4px;
                width: auto;
                height: 100%;
                @include center;
                justify-content: flex-start;
                flex-direction: column;

                .title {
                    width: 100%;
                    @include center;
                    justify-content: flex-start;
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.7));
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }

                .value {
                    margin-top: 4px;
                    height: 100%;
                    @include center;
                    justify-content: flex-start;

                    .num {
                        height: 100%;
                        font-family: "ding";
                        color: var(--color-text-text-100, #fff);
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 700;
                        @include center;
                        align-items: end;
                        line-height: normal;
                    }

                    .unit {
                        height: 100%;
                        @include center;
                        margin-left: 4px;
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.5));
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        align-items: end;
                        // justify-content: end;
                        // background-color: rgba(0,0,0,0.5);
                    }
                }
            }
        }

        .list-item:first-child::before {
            content: "";
            display: block;
            width: 50px;
            height: 3px;
            border-radius: 20px;
            background: var(---, #00ff85);
            //   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            //     0px -6px 10px 0px rgba(0, 255, 133, 0.4), 0px -10px 20px 0px #00ff85;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -4px;
            z-index: -1;
        }
    }
}
</style>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import SVG_ICONS from "@/assets/SVG_ICONS";

interface Props {
    listInfo: {
        png: string;
        list: {
            tips?: string;
            state?: string;
            icon?: string;
            num?: number; // 将 num 属性改为数字类型
        }[];
    };
    [key: string]: any; // 添加一个字符串类型的索引签名
}

// props 值
const props = withDefaults(defineProps<Props>(),
    {
        png: "摄像头",
        list: [
            { tips: "设备总数", num: 0 },
            { state: "运行", icon: "doing", num: 0 },
            { state: "待机", icon: "standby", num: 0 },
            { state: "告警", icon: "warning", num: 0 },
        ],
    }
)

// 列表信息
const { listInfo } = toRefs(props);

</script>

<template>
    <div class="machine-states-list">
        <!-- 左图片 -->
        <div class="img">
            <img :src="SVG_ICONS.round_icons[listInfo.png]" alt="" />
        </div>

        <!-- 右列表 -->
        <div class="right-list">
            <div class="list-item" v-for="(item, _) in listInfo.list">
                <!-- 左 圆点 -->
                <div class="dot" v-if="item.state">
                    <img :src="SVG_ICONS.round_icons[item.icon]" class="img" alt="SVG icon" />
                </div>

                <!-- 右内容 -->
                <div class="right-content">
                    <div class="title">{{ item.tips || item.state }}</div>

                    <div class="value">
                        <div class="num">{{ item.num }}</div>
                        <div class="unit">台</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
