<!-- 区域消耗 -->
<template>
    <div class="quyu">
        <title-type-time :tips="'区域消耗'">
            <div class="table-list-qu">
                <table-list :menu="tablelist.menu" :columns="tablelist.columns" :currentHight="320"></table-list>
            </div>
        </title-type-time>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 模拟数据
let tablelist = reactive({
    menu: ["能耗区域", "能耗品类", "能耗用量", "能耗费用(元)"],
    columns: [
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "区域A" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
        { name: { field: "最后" }, type: { field: "水 m³" }, value: { field: "425"}, money: { field: "4,100" } },
    ]
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
