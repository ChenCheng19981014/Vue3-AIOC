<template>
    <div class="area-popup">
        <div class="popup-title">
            <div class="text">{{ props.tips }}</div>
        </div>
        <div class="popup-content">
            <div class="item-left">
                <img src="@/assets/images/person.png" alt="图标">
                <div class="person">
                    <div class="person-title">入园人数</div>
                    <div class="person-num">1320<span>人</span></div>
                    <div class="person-icon"></div>
                </div>
            </div>
            <div class="item-center">
                <div class="item-center-left"></div>
                <div class="item-center-right"></div>
            </div>
            <div class="item-right">
                <img src="@/assets/images/person.png" alt="图标">
                <div class="person">
                    <div class="person-title">出园人数</div>
                    <div class="person-num">1320<span>人</span></div>
                    <div class="person-icon"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    tips: {
        type: String,
        default: '提示'
    },
    data: {
        type: Object,
        default: () => {}
    }
})

</script>

<style scoped lang="scss">
.area-popup {
    display: flex;
    flex-direction: column;
    .popup-title {
        width: 239px;
        height: 31px;
        background: url("@/assets/images/area-popup.png") no-repeat;
        background-size: cover;
        background-position: center;
        .text {
            color: #FFF;
            font-family: pm1;
            font-size: 20px;
            font-weight: 400;
            line-height: 31px;
            padding-left: 15px;
        }
    }
    .popup-content {
        display: flex;
        align-items: center;
        width: 380px;
        padding: 16px;
        border-radius: 0px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background: rgba(45, 57, 87, 0.64);
        backdrop-filter: blur(7px);
        .item-left, .item-right {
            width: 156px;
            height: 60px;
            display: flex;
            align-items: center;
            gap: 12px;
            img {
                display: flex;
                width: 60px;
                padding-bottom: 5.286px;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }
            .person {
                display: flex;
                flex-direction: column;
                gap: 3px;
                .person-title {
                    color: rgba(255, 255, 255, 0.70);
                    /* 文本/正文2-14m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
                .person-num {
                    color: #FFF;
                    font-family: "ding";
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    span {
                        color: rgba(255, 255, 255, 0.50);
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        margin-left: 4px;
                    }
                }
                .person-icon {
                    width: 48px;
                    height: 2px;
                    border-radius: 10px;
                    background: var(---, #00FF85);
                    box-shadow: 0px 0px 10px 0px rgba(0, 255, 133, 0.48);
                }
            }
        }
        .item-center {
            display: flex;
            padding: 0 24px;
            .item-center-left {
                width: 1px;
                height: 52px;
                background: var(--color-basic-white-white-10, rgba(255, 255, 255, 0.10));
            }
            .item-center-right {
                width: 1px;
                height: 52px;
                background: var(--color-basic-black-black-12, rgba(0, 0, 0, 0.12));
            }
        }
    }
}
</style>
