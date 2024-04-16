<!-- 能耗统计 -->
<template>
    <div class="nengliang">
        <title-type-time :tips="props.title" @delivery-date="handleDate" >
            <div class="nengliang-content">
                <div class="nengliang-item" v-for="(item, index) in filteredData" :key="index">
                    <div class="left">
                        <img :src="item.imgUrl" :alt="item.name">
                        <div class="designation">{{ item.name }}</div>
                        <div class="record">{{ item.num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}<span>{{ item.unit }}</span></div>
                    </div>
                    <div class="percentage">
                        <div class="percentage-item">
                            同比
                            <img :src="`${item.target == '上升' ? arrow.upArrow : arrow.downArrow}`" alt="">
                        </div>
                        <span>{{ item.percentage }}<span>%</span></span>
                    </div>
                </div>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';


const arrow = reactive({
    upArrow: "/src/assets/images/上箭头.png",
    downArrow: "/src/assets/images/下箭头.png",
})

const props = defineProps({
    storeExcelDataMap: Object,
    title: String
})

// 传递过来的时间单位，默认是日
let timeUnit = ref('day');
// 处理子组件传递过来的时间
const handleDate = (time: string) => {
    timeUnit.value = time;
    emits('nengliang-date', time);
}

// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (timeUnit.value) {
        case 'day':
            return props.storeExcelDataMap!.day;
        case 'month':
            return props.storeExcelDataMap!.month;
        case 'year':
            return props.storeExcelDataMap!.year;
        default:
            return [];
    }
});
const emits = defineEmits(['nengliang-date']); // 传递日期
</script>

<style scoped lang="scss">
.nengliang {
    width: 100%;
    height: 100%;

    .nengliang-content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .nengliang-item {
            width: 100%;
            height: 64px;
            background: var(--color-basic-black-black-12, rgba(0, 0, 0, 0.12));
            display: flex;
            align-items: center;
            padding: 8px;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;
                flex: 8;

                img {
                    width: 48px;
                    height: 48px;
                }

                .designation {
                    padding-left: 8px;
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));

                    /* 文本/正文2-14m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    flex: 0.6;
                }

                .record {
                    flex: 1.6;
                    color: var(--color-text-text-100, #FFF);

                    /* 特殊数字/数字1-28b */
                    font-family: "ding";
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;

                    span {
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                        font-family: "Source Han Sans CN";
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }
                }
            }

            .percentage {
                flex: 2.8;
                color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .percentage-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    img {
                        width: 6.001px;
                        height: 13.001px;
                        margin: 0 4px;
                    }
                }
         

                span {
                    color: var(--color-text-text-100, #FFF);
                    font-family: "ding";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    span {
                        color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                        font-family: "ding";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        letter-spacing: 1.12px;
                    }
                }
            }
        }
    }
}</style>
