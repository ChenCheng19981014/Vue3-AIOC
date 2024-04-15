<template>
    <div class="table-list">
        <!-- 菜单 -->
        <div class="header">
            <div class="header-item" v-for="(item, index) in props.menu" :key="index">
                {{ item }}
            </div>
        </div>
        <!-- 内容列表 -->
        <div class="list" :style="`height: ${currentHight}px;`">
            <!-- 轮播 -->
            <scroll-wrap :distance="props.distanceHeight">
                <div class="list-item" v-for="(item, index) in props.columns" :key="index">
                    <div 
                        v-for="(params, index) in Object.assign(item)" 
                        :key="index"
                        :style="`color:${params.color ? params.color : 'rgb(255, 255, 255, 0.80)'};`"
                    >
                        {{ params.field }}
                    </div>
                </div>
            </scroll-wrap>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    menu: Array,
    columns: Array,
    data: Array,
    initData: Array,
    currentHight: Number,
    isHover: {
        type: Boolean,
        default: false
    },
    distanceHeight: {
        type: Number,
        default: 32
    }
})
</script>

<style scoped lang="scss">
.table-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .header {
    width: 100%;
    height: 32px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--color-basic-blue-blue-2-30, rgba(0, 102, 255, 0.30));
    background: var(--blue, 
        linear-gradient(180deg, 
        rgba(7, 131, 250, 0.18) 0%, 
        rgba(7, 131, 250, 0.12) 51.3%, 
        rgba(7, 131, 250, 0.18) 100%));
    .header-item {
        color: var(--color-text-text-70, rgba(255, 255, 255, 0.70));
        text-align: center;
        font-family: "Source Han Sans CN";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
  }

  .list {
    margin-top: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    .list-item {
      box-sizing: border-box;
      padding: 0 10px 0 10px;
      height: 32px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        flex: 1;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-family: "SourceHanSansCN";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        // &:nth-child(3) {
        //     flex: 3;
        // }
        // &:nth-child(4) {
        //     flex: 3;
        // }
      }
    }

    .list-item:nth-child(even) {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>