<!-- 区域弹窗 -->
<template>
    <div class="popup">
        <div class="popup-title">
            <div class="text">{{ props.tips }}</div>
        </div>
        <div class="popup-content">
            <div class="popup-content-item" v-for="(item, index) in props.data" :key="index">
                <div class="item-left">
                    <img :src="item.icon" alt="图标">
                    <div class="person">
                        <div class="person-title">{{ item.title }}</div>
                        <div class="person-num">{{ item.num }}<span>{{ item.unit }}</span></div>
                        <div class="person-icon"></div>
                    </div>
                </div>
                <div class="item-center">
                    <div class="item-center-left"></div>
                    <div class="item-center-right"></div>
                </div>
                <div class="item-right">
                    <div class="item-right-item" v-for="(item1, index) in item.content" :key="index">
                        <div class="item-right-title">{{ item1.title }}</div>
                        <div class="item-right-num">{{ item1.num }}<span>{{ item.unit }}</span></div>
                    </div>
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
        type: Array as any,
        default: [
            { title: '入园人数', num: '1365', icon: '/src/assets/images/person.png', unit: '人', content: [
                { title: '员工', num: '951' }, { title: '相关方', num: '10' }, { title: '访客', num: '4' }
            ] },
            { title: '入园车数', num: '525', icon: '/src/assets/images/car.png', unit: '辆', content: [
                { title: '员工', num: '450' }, { title: '预约', num: '20' }, { title: '临时', num: '5' },
            ] },
        ]
    }
})

</script>

<style scoped lang="scss">
.popup {
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
        width: 496px;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        border-radius: 0px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background: rgba(45, 57, 87, 0.64);
        backdrop-filter: blur(7px);

        .popup-content-item {
            display: flex;
            align-items: center;
            gap: 24px;

            .item-left {
                width: 156px;
                height: 60px;
                display: flex;
                align-items: center;
                gap: 16px;

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
                align-items: center;
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

            .item-right {
                display: flex;
                align-items: center;
                gap: 40px;
                .item-right-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    .item-right-title {
                        color: rgba(255, 255, 255, 0.70);

                        /* 文本/正文2-14m */
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }
                    .item-right-num {
                        font-family: "ding";
                        font-size: 24px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        background: var(---, linear-gradient(180deg, #FFF 60.42%, #00FF85 125%));
                        background-clip: text;  
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
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
                }
            }
        }
    }

}
</style>
