<!-- 能耗统计 -->
<template>
    <div class="nengliang">
        <title-type-time :tips="'能耗统计'" @delivery-date="handleDate">
            <div class="nengliang-content">
                <div class="nengliang-item" v-for="(item, index) in filteredData" :key="index">
                    <div class="left">
                        <img :src="item.imgUrl" :alt="item.name">
                        <div class="designation">{{ item.name }}</div>
                        <div class="record">{{ item.num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}<span>{{ index
                            === 0 ? '(kWh)' : '(m³)' }}</span></div>
                    </div>
                    <div class="percentage">
                        同比
                        <img :src="`${index == 0 ? arrow.upArrow : arrow.downArrow}`" alt="">
                        <span>{{ item.percentage }}%</span>
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

// 模拟数据
let totalData = reactive({
    day: [
        { imgUrl: "/src/assets/images/电能耗.png", name: "电能耗", num: "22000022", percentage: "20" },
        { imgUrl: "/src/assets/images/水能耗.png", name: "水能耗", num: "2222", percentage: "20" },
        { imgUrl: "/src/assets/images/气能耗.png", name: "气能耗", num: "2222", percentage: "20" },
    ],
    month: [
        { imgUrl: "/src/assets/images/电能耗.png", name: "电能耗", num: "0022", percentage: "20" },
        { imgUrl: "/src/assets/images/水能耗.png", name: "水能耗", num: "2222", percentage: "20" },
        { imgUrl: "/src/assets/images/气能耗.png", name: "气能耗", num: "2222", percentage: "20" },
    ],
    year: [
        { imgUrl: "/src/assets/images/电能耗.png", name: "电能耗", num: "22000022", percentage: "20" },
        { imgUrl: "/src/assets/images/水能耗.png", name: "水能耗", num: "22212122", percentage: "20" },
        { imgUrl: "/src/assets/images/气能耗.png", name: "气能耗", num: "2222", percentage: "20" },
    ],
})

// 传递过来的时间单位，默认是日
let timeUnit = ref('day');
// 处理子组件传递过来的时间
const handleDate = (time: string) => {
    timeUnit.value = time;
}

// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (timeUnit.value) {
        case 'day':
            return totalData.day;
        case 'month':
            return totalData.month;
        case 'year':
            return totalData.year;
        default:
            return [];
    }
});
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
                flex: 1;

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
                    flex: 1.9;
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
                        padding-left: 8px;
                    }
                }
            }

            .percentage {
                color: var(--color-text-text-50, rgba(255, 255, 255, 0.50));
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                display: flex;
                align-items: center;

                img {
                    width: 6.001px;
                    height: 13.001px;
                    margin: 0 4px;
                }

                span {
                    color: var(--color-text-text-100, #FFF);
                    font-family: "ding";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }
    }
}</style>
