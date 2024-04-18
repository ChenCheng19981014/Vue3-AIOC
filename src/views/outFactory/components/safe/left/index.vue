<style scoped lang='scss'>
@import "@/design/hooks.scss";

.outFactory-safe-left {
    width: 430px;
    height: 940px;
    @include tips;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .monitor {
        width: 100%;
        height: 631px;
    }
    .alarm {
        width: 100%;
        height: 278px;
    }
}
</style>
  
<script setup lang='ts'>
import { ref } from "vue";
import JianKong from "./components/jiankong.vue"
import GaoJing from "./components/gaojing.vue"

// 监控信息模拟数据
const monitorInfo = ref({
  png: "摄像头",
  list: [
    { tips: '监控总数', num: '111' },
    { state: '在线', icon: 'online', num: '10' },
    { state: '离线', icon: 'offline', num: '10' },
  ]
})

</script>
  
<template>
    <div class='outFactory-safe-left'>
        <!-- 视频监控 -->
        <div class="monitor">
            <JianKong :monitorInfo="monitorInfo"></JianKong>
        </div>
        <!-- 告警统计 -->
        <div class="alarm">
            <GaoJing></GaoJing>
        </div>
    </div>
</template>