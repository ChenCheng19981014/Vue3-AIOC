<!-- 视频监控 -->
<template>
    <div class="outFactory-safe-jiankong">
        <title-type-common :tips="'视频监控'">
            <div class="jiankong-content">
                <div class="jiankong-data">
                    <!-- 监控 组件 -->
                    <machine-states-list :listInfo="monitorInfo" class="list" />
                </div>
                <div class="jiankong-diagram">
                    <img src="@/assets/images/重点监控视频.png" alt="监控视频">
                    <div class="tabs">
                        <div 
                            class="tabs-item" 
                            v-for="(item, index) in tabs" 
                            :key="index" 
                            @click="changeCurrentVideo(index)"
                            :class="{ activeId: currentVideo === index }"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="video">
                    <div class="video-item" v-for="(item, index) in videoSources" :key="index" v-show="currentVideo == 0">
                        <video ref="video" class="video-item-style" autoplay muted loop>
                            <source :src="item.src" type="video/mp4">
                        </video>
                        <div class="text">
                            <div class="position">{{ item.position }}</div>
                            <img @click="setLargeVidoe(index)" src="@/assets/images/video-enlarge.png" alt="放大">
                        </div>
                    </div>
                </div>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { toRefs, ref } from 'vue';
const props = defineProps(['monitorInfo', 'title']);
// 视频监控 信息
const { monitorInfo } = toRefs(props);

// tab按钮
const tabs = ref([
    { name: '外围' },
    { name: '区域B' },
    { name: '区域C' },
    { name: '区域D' },
])
// 视频源
const videoSources = ref([
    { src: "/src/assets/video/1.mp4", position: "室外A1-1001" },
    { src: "/src/assets/video/2.mp4", position: "室外B2-2002" },
    { src: "/src/assets/video/3.mp4", position: "室外C3-3003" },
    { src: "/src/assets/video/2.mp4", position: "室外D4-4004" },
    { src: "/src/assets/video/1.mp4", position: "室外D4-4004" },
    { src: "/src/assets/video/2.mp4", position: "室外D4-4004" },
]);

// 监控视频，默认选择第一个
let currentVideo = ref(0)
// 获得视频的实例
let video = ref()

// 点击的监控视频
const changeCurrentVideo = (id: number) => {
    currentVideo.value = id;
}

// 放大视频
const setLargeVidoe = (index: number) => {
    // 获取目前点击的video
    const currentClickVideo = video.value[index]
    if (currentClickVideo.requestFullscreen) {
      currentClickVideo.requestFullscreen();
    } else if (currentClickVideo.mozRequestFullScreen) { // Firefox
      currentClickVideo.mozRequestFullScreen();
    } else if (currentClickVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
      currentClickVideo.webkitRequestFullscreen();
    } else if (currentClickVideo.msRequestFullscreen) { // IE/Edge
      currentClickVideo.msRequestFullscreen();
    }
}
</script>

<style scoped lang="scss">
.outFactory-safe-jiankong {
    width: 100%;
    height: 100%;
    .jiankong-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .jiankong-data {
            width: 100%;
            padding: 16px 0;
            .list {
                width: 100%;
                height: 76px;
                padding: 8px 0;
            }
        }
        .jiankong-diagram {
            width: 100%;
            display: flex;
            flex-direction: column;
            img {
                width: 100%;
                height: 34px;
            }
            .tabs {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
                padding: 16px 0;
                .tabs-item {
                    display: flex;
                    padding: 8px 10px;
                    width: 101.5px;
                    height: 36px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    border: 1px solid var(--color-basic-cyan-cyan-3-20, rgba(0, 255, 224, 0.20));
                    background: linear-gradient(90deg, #2D3957 -5%, rgba(45, 57, 87, 0.00) 100%);
                    color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                    text-align: center;
                    /* 文本/正文2-14m */
                    font-family: "Source Han Sans CN";
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    &.activeId {
                        border-radius: 4px;
                        border: 1px solid var(--color-basic-cyan-cyan-1, #00FFE0);
                        background: linear-gradient(0deg, rgba(34, 59, 96, 0.50) 0%, rgba(34, 59, 96, 0.50) 100%), linear-gradient(180deg, rgba(45, 130, 255, 0.55) 17.3%, rgba(45, 130, 255, 0.00) 100%);
                        box-shadow: 0px 0px 12px 4px rgba(88, 145, 254, 0.83) inset;
                    }
                }
            }
        }
        .video {
            width: 100%;
            height: 383px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .video-item {
                width: 210px;
                height: 117px;
                // background: #008c8c;
                margin-bottom: 16px; /* 设置下方间距 */
                box-sizing: border-box; /* 盒子大小包含边框 */
                border: 1.051px solid var(--30, rgba(7, 131, 250, 0.30));
                position: relative;

                .video-item-style {
                    width: 210px;
                    height: 117px;
                    &::-webkit-media-controls,
                        video::-moz-media-controls,
                        video::-webkit-media-controls-enclosure{
                        display:none !important;
                    }

                    &::-webkit-media-controls-panel,
                    &::-webkit-media-controls-panel-container,
                    &::-webkit-media-controls-start-playback-button {
                        display:none !important;
                        -webkit-appearance: none;
                    }
                }
                .text {
                    width: 100%;
                    height: 28px;
                    position: absolute;
                    display: flex;
                    width: 210px;
                    padding: 4px 10px;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                    background: url("@/assets/images/video-bg.png");
                    background-size: 100% 100%;
                    bottom: 0;
                    .position {
                        color: var(--color-text-text-100, #FFF);
                        text-align: center;
                        font-family: "Source Han Sans CN";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }
                    img {
                        width: 24px;
                        height: 18px;
                        border-radius: 2.4px;
                        background: var(--color-basic-black-black-30, rgba(0, 0, 0, 0.30));
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
