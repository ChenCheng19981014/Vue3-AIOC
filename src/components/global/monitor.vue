<template>
    <div class="monitor" v-if="props.status === 'normal'">
        <div class="monitor-header">
            <div class="title">
                <div class="icon"></div>
                <div class="name">外围-001</div>
            </div>
            <div class="close"></div>
        </div>
        <div class="monitor-name">厂区西南角1</div>
        <div class="monitor-content">
            <div class="monitor-content-surveillance"></div>
            <div class="setLarge"></div>
        </div>
    </div>
    <div class="monitor-warm" v-if="props.status === 'offline' || props.status === 'connecting'">
        <div class="monitor-header">
            <div class="title">
                <div class="icon"></div>
                <div class="name">外围-001</div>
            </div>
            <div class="close"></div>
        </div>
        <div class="monitor-name">厂区西南角1</div>
        <div class="monitor-content">
            <div class="monitor-content-offline" v-show="props.status === 'offline'">
                <div class="top">设备离线</div>
                <div class="bottom">监控画面，显示错误</div>
            </div>
            <div class="monitor-content-connecting" v-show="props.status === 'connecting'">
                <div class="top"></div>
                <div class="bottom">视频链接中...</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    status: {
        type: String,
        default: 'normal'
    }
})


</script>

<style scoped lang="scss">
.monitor, .monitor-warm {
    width: 373px;
    height: 307px;
    border-radius: 8px;
    background-image: url("@/assets/images/monitor-normal.png");
    background-size: 100% 100%;
    backdrop-filter: blur(4px);

    .monitor-header {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            display: flex;
            align-items: center;

            .icon {
                width: 15px;
                height: 16.7px;
                background-image: url("@/assets/images/decorate.png");
                background-size: 100% 100%;
                margin: 0 8px 0 16px;
            }

            .name {
                color: #FFF;
                font-family: pm1;
                font-size: 20px;
                font-weight: 400;
            }
        }

        .close {
            width: 48px;
            height: 36px;
            background-image: url("@/assets/images/close.png");
            background-size: 100% 100%;
            border-radius: 0 8px 0 0;
            cursor: pointer;
        }
    }

    .monitor-name {
        width: 100%;
        height: 39px;
        padding: 8px 16px;
        color: var(--color-text-text-100, #FFF);
        font-family: "Source Han Sans CN";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .monitor-content {
        width: 100%;
        height: 232px;
        padding: 16px;
        position: relative;

        .monitor-content-surveillance {
            width: 100%;
            height: 100%;
            background: red;

        }
        // 离线
        .monitor-content-offline, .monitor-content-connecting {
            width: 100%;
            height: 100%;
            background: var(--color-basic-black-black-60, rgba(0, 0, 0, 0.60));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .top {
                color: var(--color-basic-tip-error, #FF5E5E);
                text-align: center;
                font-family: "Source Han Sans CN";
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
            .bottom {
                color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
                text-align: center;
                font-family: "Source Han Sans CN";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }
        }
        // 连接中
        .monitor-content-connecting {
            .top {
                width: 64px;
                height: 64px;
                background-image: url("@/assets/images/connecting.png");
                background-size: 100% 100%;
            }

        }
        .setLarge {
            width: 40px;
            height: 30px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.00);
            background: var(--color-basic-black-black-60, rgba(0, 0, 0, 0.60));
            background-image: url("@/assets/images/video-enlarge.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            right: 16px;
            bottom: 16px;
            cursor: pointer;
        }
    }
}
.monitor-warm {
    background-image: url("@/assets/images/monitor-warm.png");
}
</style>
