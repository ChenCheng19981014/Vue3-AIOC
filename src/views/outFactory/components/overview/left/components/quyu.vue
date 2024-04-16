<!-- 区域消耗 -->
<template>
    <div class="quyu">
        <title-type-time :tips="props.title" @delivery-date="handleData">
            <div class="table-list-qu">
                <table-list :menu="tablelist.menu" :columns="filteredData" :currentHight="288"></table-list>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
const props = defineProps({
    title: String,
    menu: Array,
    storeExcelDataMap: Array,
})

// 模拟数据
const tablelist = reactive({
    menu: props.menu,
})

// 传递过来的时间单位，默认是日
let timeUnit = ref('day');
// 处理子组件传递过来的时间
const handleData = (time: string) => {
    timeUnit.value = time;
}
// 计算属性，根据传递的字符串动态过滤数据
const filteredData = computed(() => {
    switch (timeUnit.value) {
        case 'day':
            return props.storeExcelDataMap.day;
        case 'month':
            return props.storeExcelDataMap.month;
        case 'year':
            return props.storeExcelDataMap.year;
        default:
            return [];
    }
});

watch(timeUnit, () => {
    console.log(filteredData.value, 'storeExcelDataMap');

})
</script>

<style scoped lang="scss">
.quyu {
    width: 100%;
    height: 100%;

    .table-list-qu {
        width: 100%;
        height: 100%;
        padding-top: 16px;
    }
}
</style>
