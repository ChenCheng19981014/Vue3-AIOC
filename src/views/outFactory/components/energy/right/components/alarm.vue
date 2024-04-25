<template>
    <div class="alarm-main">
        <title-type-common :tips="title">
            <div class="energy-alarm">
                <alarm-list :dataList="dataList"></alarm-list>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

// props 值
const props = defineProps([ "title", "msg"]);

// 视频监控 信息
const {  title, msg } = toRefs(props);


// update
const convertDateFormat = (dateString: string) => {

    if (!dateString || dateString == 'undefined') return

    // 拆分日期字符串
    const parts = dateString.split('/');

    // 获取当前年份的前两位数
    const currentYearPrefix = new Date().getFullYear().toString().slice(0, 2);

    // 判断年份的格式
    const year = parseInt(parts[2]) >= 0 && parseInt(parts[2]) <= 99 ?
        currentYearPrefix + parts[2] :
        parts[2];

    // 返回转换后的日期字符串
    return year + '/' + parts[0] + '/' + parts[1];
}

// 列表数据
const dataList = ref(
    msg?.value.map((item: { [key: string]: any }) => {
        return {
            name: item[0]?.value,
            area: item[1]?.value,
            areaRegion: item[2]?.value,
            grade: item[3]?.value,
            machine: item[4]?.value,
            date: `${convertDateFormat(item[5]?.value) || '123'} ${item[6]?.value}`,
            handle: item[7]?.value,
        };
    })
);
</script>

<style scoped lang="scss">
.alarm-main {
    width: 100%;
    height: 374px;

    .energy-alarm {
        width: 100%;
        height: 336px;
        overflow: hidden;
        padding-top: 16px;
    }
}
</style>
