<template>
    <div class="maintenance">
        <title-type-common :tips="'维保计划'" @delivery-date="handleData">
            <div class="maintenance-content">
                <table-list :menu="tablelist.menu" :columns="filteredData" :currentHight="160"></table-list>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
const props = defineProps({
    title: String,
    menu: Array,
    storeExcelDataMap: {
        type: Object,
        required: true
    },
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
            return props.storeExcelDataMap.day.map(item =>
                [item[0], `${item[1]} ${item[2]}`, item[3], item[4]]
            );
        case 'month':
            return props.storeExcelDataMap.month.map(item =>
                [item[0], `${item[1]} ${item[2]}`, item[3], item[4]]
            );
        case 'year':
            return props.storeExcelDataMap.year.map(item =>
                [item[0], `${item[1]} ${item[2]}`, item[3], item[4]]
            );
        default:
            return [];
    }
});

watch(timeUnit, () => {
    console.log(filteredData.value, 'storeExcelDataMap');

})
</script>

<style scoped lang="scss">
.maintenance {
    width: 100%;
    height: 246px;
    .maintenance-content {
        width: 100%;
        height: 208px;
        padding-top: 16px;
    }
}
</style>
