<!-- 区域消耗 -->
<template>
    <div class="quyu">
        <title-type-time :tips="'区域消耗'" @delivery-date="handleData">
            <div class="table-list-qu">
                <table-list :menu="tablelist.menu" :columns="filteredData" :currentHight="288"></table-list>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// 模拟数据
let tablelist = reactive({
    menu: ["能耗区域", "能耗品类", "能耗用量", "能耗费用(元)"],
    day: [
        { name: { field: "日区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
    ],
    month: [
        { name: { field: "月区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
    ],
    year: [
        { name: { field: "年区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
    ]
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
      return tablelist.day;
    case 'month':
      return tablelist.month;
    case 'year':
      return tablelist.year;
    default:
      return [];
  }
});
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
