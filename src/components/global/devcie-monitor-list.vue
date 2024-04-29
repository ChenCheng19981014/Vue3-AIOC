<!-- 告警列表 -->
<template>
  <div class="device-monitor">
    <!-- 轮播 -->
    <!-- <scroll-wrap :distance="props.distanceHeight"> -->
    <div
      class="device-monitor-item"
      :class="`device-monitor-item${item?.grade}-hover`"
      v-for="(item, index) in props.dataList"
      :key="index"
    >
      <div class="list1">
        <div class="list1-item1">
          {{ item.machineName }}
        </div>
        <div class="list1-item2">
          <div class="key item-color-weight">
            {{ item.type1 }}
          </div>
          :
          <div class="value">{{ item.deviceId }}</div>
        </div>
        <div class="list1-item3 item-color-weight">
          <div class="key">{{ item.type3 }}</div>
          :
          <div class="value">{{ item.maintenanceTime }}</div>
        </div>
      </div>
      <div class="list2">
        <div class="list2-item1">
          <div class="left item-color-weight">{{ item.line }}</div>
          <div class="center"></div>
          <div class="right item-color-weight">{{ item.employee }}</div>
        </div>
        <div class="list2-item2">
          <div class="key item-color-weight">{{ item.type2 }}</div>
          :
          <div class="value">{{ item.runingTime }}</div>
        </div>
        <div class="list2-item3">
          <div class="key item-color-weight">{{ item.type4 }}</div>
          :
          <div class="value">{{ item.maintenanceTime }}</div>
        </div>
      </div>
      <div class="list3">
        <!-- 状态 -->
        <div class="grade" :class="`grade-${item.grade}`">{{ item.grade }}</div>
      </div>
    </div>
    <!-- </scroll-wrap> -->
  </div>
</template>

<script setup lang="ts">
interface Item {
  [key: string]: any;
}

const props = defineProps({
  dataList: {
    type: Array as () => Item[],
    required: true,
  },
  distanceHeight: {
    type: Number,
    default: 82,
  },
});
</script>

<style scoped lang="scss">
.device-monitor {
  width: 100%;
  // height: 402px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;

  .device-monitor-item {
    width: 100%;
    min-height: 94px;
    margin-bottom: 8px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-basic-black-black-12, rgba(0, 0, 0, 0.12));
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid
      var(--color-basic-white-white-10, rgba(255, 255, 255, 0.1));
    background: linear-gradient(180deg);
    backdrop-filter: blur(7.800000190734863px);

    .item-color-weight {
      color: rgba(255, 255, 255, 0.7);
      font-weight: 500;
    }

    > div {
      height: 80px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .list1 {
      justify-content: space-between;
      > div {
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }

      .value {
        margin-left: 8px;
        color: #fff;
      }
    }

    .list2 {
      justify-content: space-between;

      .list2-item1 {
        display: flex;
        align-items: center;
        .center {
          margin-left: 8px;
          width: 1px;
          height: 80%;
          background: rgba(255, 255, 255, 0.3);
        }
        .right {
          margin-left: 8px;
        }
      }

      > div {
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }

      .value {
        margin-left: 8px;
      }
    }

    .list3 {
      > div {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        padding: 0px 8px;
      }

      .grade-故障 {
        border-radius: 4px;
        border: 1px solid
          var(--color-basic-white-white-50, rgba(255, 255, 255, 0.5));
        background: rgba(255, 94, 94, 0.5);
        box-shadow: 0px 0px 8px 0px #ff6359 inset;
      }
      .grade-待机 {
        border-radius: 4px;
        border: 1px solid
          var(--color-basic-white-white-50, rgba(255, 255, 255, 0.5));
        background: rgba(190, 207, 242, 0.5);
      }
      .grade-运行 {
        border-radius: 4px;
        border: 1px solid
          var(--color-basic-white-white-50, rgba(255, 255, 255, 0.5));
        background: var(--color-basic-cyan-cyan-2-50, rgba(0, 255, 224, 0.5));
        box-shadow: 0px 0px 8px 0px #22ffd7 inset;
      }
    }
  }

  .device-monitor-item故障-hover:hover {
    border-radius: 4px;
    background: var(
      ---red-60,
      linear-gradient(
        90deg,
        rgba(255, 67, 55, 0.6) 0%,
        rgba(255, 67, 55, 0) 100%
      )
    );
  }

  .device-monitor-item运行-hover:hover {
    border-radius: 4px;
    background: var(
      ---bule-60,
      linear-gradient(
        90deg,
        rgba(27, 89, 248, 0.6) 0%,
        rgba(89, 175, 255, 0) 100%
      )
    );
  }

  .device-monitor-item待机-hover:hover {
    border-radius: 4px;
    background: var(
      ---bule-60,
      linear-gradient(
        90deg,
        rgba(190, 207, 242, 0.6) 0%,
        rgba(89, 175, 255, 0) 100%
      )
    );
  }
}
</style>
