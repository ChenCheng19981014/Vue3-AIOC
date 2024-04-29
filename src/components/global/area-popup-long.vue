<template>
    <div class="area-popup-long">
        <div class="popup-long-title">
            <div class="text">{{ props.tips }}</div>
        </div>
        <div class="popup-long-content">
            <div class="popup-long-content-item" v-for="(item, index) in props.data" :key="index">
                <img src="@/assets/images/quyu-dian.png" alt="图标">
                <div class="popup-long-text">
                    <div class="text">{{ item.name }}</div>
                    <div class="num">{{ item.num }}<span>{{ item.unit }}</span></div>
                    <div class="icon"></div>
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
        default: () => [
            { imgUrl: "/src/assets/images/quyu-dian.png", name: "电能耗", num: "999,999", unit: "kWh" },
            { imgUrl: "/src/assets/images/quyu-shui.png", name: "水能耗", num: "99,999", unit: "m³" },
            { imgUrl: "/src/assets/images/quyu-qi.png", name: "燃气能耗", num: "999,999", unit: "m³" }
        ]
    }
})

</script>

<style scoped lang="scss">
.area-popup-long {
    .popup-long-title {
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
    .popup-long-content {
        width: 604px;
        height: 92px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;

        border-radius: 0px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background: linear-gradient(0deg, rgba(45, 57, 87, 0.64) 0%, rgba(45, 57, 87, 0.64) 100%), rgba(28, 42, 77, 0.30);
        backdrop-filter: blur(7px);
        .popup-long-content-item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            img {
                width: 60px;
                height: 60px;
                margin-right: 8px;
            }
            .popup-long-text {
                display: flex;
                flex-direction: column;
                gap: 4px;
                .text {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    /* 文本/正文2-14m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
                .num {
                    color: var(--color-text-text-100, #FFF);
                    font-family: "ding";
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    span {
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        margin-left: 4px;
                    }
                }
                .icon {
                    width: 48px;
                    height: 2px;
                    border-radius: 10px;
                    background: var(--color-basic-tip-success, #00FF85);
                    box-shadow: 0px 0px 10px 0px rgba(0, 255, 133, 0.48);
                }
            }
        }
    }
}
</style>
