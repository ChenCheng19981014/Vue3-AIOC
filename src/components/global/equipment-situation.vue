<!-- 设备情况 -->
<template>
    <div class="equipment-situation">
        <div class="line">
            <img src="@/assets/images/equipment-line.png" alt="">
        </div>
        <div class="situation" v-if="props.status === 'normal'">
            <div class="title"></div>
            <div class="content">
                <div class="content-item" v-for="(item, index) in equipmentData" :key="index">
                    <div class="left">{{ item.name }}</div>
                    <div class="right" :class="{ 'label': item.label && props.status === 'normal' }">{{ item.value }}</div>
                </div>
                <div class="bottom">
                    <div class="btn"></div>
                </div>
            </div>
        </div>
        <div class="situation" v-if="props.status === 'fault'">
            <div class="title"></div>
            <div class="content">
                <div class="content-item" v-for="(item, index) in equipmentData" :key="index">
                    <div class="left">{{ item.name }}</div>
                    <div class="right" :class="{ 'label2': item.label && props.status === 'fault' }">{{ item.value }}</div>
                </div>
                <div class="bottom">
                    <div class="btn"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps({
    status: {
        type: String,
        default: 'normal'
    },
    situation: {
        type: Array as any,
        default: () => [
            { name: '设备名称', value: '精密机床' },
            { name: '设备编号', value: 'SN12345' },
            { name: '设备状态', value: '运行', label: true },
            { name: '运转时长', value: '12.5 时' },
            { name: '技术员', value: '王伟涛' },
        ]   
    }
})

// 设备数据
let equipmentData = ref(props.situation)

watch(props, () => {
    equipmentData.value = props.situation
})

</script>

<style scoped lang="scss">
.equipment-situation {
    width: 493px;
    height: 275px;
    display: flex;
    .line {
        width: 192px;
        height: 100%;
        img {
            margin-top: 20px;
            width: 178.5px;
            height: 80px;
        }
    }
    .situation {
        width: 301px;
        height: 100%;
        border-radius: 8px;
        background: var(--color-secondary-Dark-blue-2bg, rgba(45, 57, 87, 0.90));
        backdrop-filter: blur(4px);
        .title {
            width: 100%;
            height: 36px;
            background-image: url("@/assets/images/equipment-title.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .content {
            width: 100%;
            height: 239px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            .content-item {
                width: 268px;
                height: 28px;
                display: flex;
                padding: 4px 8px;
                align-items: center;
                justify-content: space-between;
                border-radius: 4px;
                background: var(--color-basic-black-black-12, rgba(0, 0, 0, 0.12));
                .left {
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: right;

                    /* 正文/正文14-m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
                .right {
                    color: var(--color-text-text-100, #FFF);
                    text-align: right;

                    /* 正文/正文14-m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
                .label {
                    display: flex;
                    height: 19px;
                    padding: 0px 8px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    border: 1px solid var(--color-basic-white-white-50, rgba(255, 255, 255, 0.50));
                    background: var(--color-basic-cyan-cyan-2-50, rgba(0, 255, 224, 0.50));
                    box-shadow: 0px 0px 8px 0px #22FFD7 inset;
                }
                .label2 {
                    display: flex;
                    height: 19px;
                    padding: 0px 8px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    border: 1px solid var(--color-basic-white-white-50, rgba(255, 255, 255, 0.50));
                    background: rgba(255, 94, 94, 0.50);
                    box-shadow: 0px 0px 8px 0px #FF6359 inset;
                }
            }
            .bottom {
                width: 100%;
                height: 49px;
                padding-top: 14px;
                display: flex;
                justify-content: center;
                .btn {
                    width: 119px;
                    height: 33px;
                    background-image: url("@/assets/images/equipment-detail-normal.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                    &:hover {
                        background-image: url("@/assets/images/equipment-detail-active.png");
                    }
                }
                // 预加载背景图
                .btn:hover::before {
                    content: url("@/assets/images/equipment-detail-active.png");
                    display: none;
                }
            }
        }
    }

}
</style>
