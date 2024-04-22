<template>
    <div class="outFactory-safe-realTime">
        <title-type-common :tips="title">
            <div class="safe-alarm">
                <div style="width: 430px; height: 402px; padding-top: 16px;">
                    <alarm-list :dataList="dataList"></alarm-list>
                </div>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

// props 值
const props = defineProps(["alarmInfo", "title",]);

// 视频监控 信息
const { alarmInfo, title } = toRefs(props);

// update
const convertDateFormat = (dateString: string) => {
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
    alarmInfo?.value.map((item: { [key: string]: string }) => {
        return {
            name: item[0],
            area: item[1],
            areaRegion: item[2],
            grade: item[3],
            machine: item[4],
            date: `${convertDateFormat(item[5])} ${item[6]}`,
            handle: item[7],
        };
    })
);


</script>

<style scoped lang="scss">
.alarm {
    width: 430px;
    height: 100%;

    .safe-alarm {
        padding-top: 16px;
        width: 100%;
        height: 402px;
    }
}
</style>
