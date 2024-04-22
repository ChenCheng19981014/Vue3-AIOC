<style scoped lang="scss">
@import "@/design/hooks.scss";

.outFactory {
  width: 100%;
  height: 100%;
  @include center;

  .header {
    position: absolute;
    top: 0;
    z-index: 2;
  }

  .tips {
    @include tips;
  }

  .outFactory-bottom {
    position: absolute;
    z-index: 2;
    bottom: 0px !important;
    @include center;
  }

  .btn {
    width: 520px;
    @include center;
    gap: 16px;

    .button {
      position: relative;
      cursor: pointer;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 1.6px;
      font-family: "pm1";
      padding: 4px 16px;
      background: var(--green-60,
          linear-gradient(180deg,
            rgba(255, 255, 255, 0.6) 60.42%,
            rgba(0, 255, 133, 0.6) 125%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .active {
      background: var(--green,
          linear-gradient(180deg, #fff 60.42%, #00ff85 125%));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .active::before {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      border-radius: 20px;
      background: var(---, #00ff85);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
        0px -6px 10px 0px rgba(0, 255, 133, 0.4), 0px -10px 20px 0px #00ff85;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: -10px;
      z-index: -1;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch, reactive } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

import type { Tabs, TabsRouter } from "@/types/execel";

import OutFactoryBottom from "@/views/outFactory/components/bottom/index.vue";

import { excelDataMap, sliceByLengthFn } from "@/constant/excel.js";
import { storeExcelData } from "@/store/modules/excel";

import OverviewLeft from "@/views/outFactory/components/overview/left/index.vue";
import OverviewRight from "@/views/outFactory/components/overview/right/index.vue";

import SafeLeft from "@/views/outFactory/components/safe/left/index.vue";
import SafeRight from "@/views/outFactory/components/safe/right/index.vue";

import EnergyLeft from "@/views/outFactory/components/energy/left/index.vue";
import EnergyRight from "@/views/outFactory/components/energy/right/index.vue";

import DeviceLeft from "@/views/outFactory/components/device/left/index.vue";
import DeviceRight from "@/views/outFactory/components/device/right/index.vue";

import Scene from "@/components/scene/index.vue";

// 假设 getRouterIndex 函数返回一个包含 index 属性的对象
interface RouterIndex {
  index: number;
}
// 表格仓库 信息
const { updataExcelData } = storeExcelData();
const loadingEnd = ref(false); // loading
const route = useRoute(); // 查值
const router = useRouter(); // 跳转 功能
// 解析出的excel 表格标题
const excelTitles = ref<string[]>([]);

// excel数据
const exceMapList = ref({}) as any as unknown as {
  [key: string]: any;
};

/**
 *  @Author: cc
 *  @description: 获取当前的路由信息
 *  @param {  路由名称  }
 *  @return {  路由索引 }
 */

// 默认选中那个
const tabState = ref(0);

// tabs 选项
const tabInfo: Tabs = reactive({
  综合态势: "overview",
  安防管理: "safe",
  能源管理: "energy",
  设备管理: "device",
});

// 当前的 模块
const mode = route.params.mode as string;

// 获取 路由 对应的索引
const getRouterIndex = (mode: string): number => {
  let index = 0; // 初始时没有找到任何对象
  // 遍历 tabInfo 的键值对及其索引
  Object.values(tabInfo).forEach((tabsModel, _) => {
    // 如果当前键值对中的 mode 值等于要查找的 modeToFind
    if (tabsModel === mode) {
      // 保存找到的对象及其索引
      index = _;
    }
  });
  return index;
};

// 获取 当前的索引
const routerIndex = getRouterIndex(mode); // 使用类型断言确定返回类型

// 初始化 默认显示哪一个 tabs
tabState.value = routerIndex;

// 切换 tabs
const changeTab = (mode: string, index: number) => {

  tabState.value = index; // 设置显示 索引

  // 更新当前的模块
  router.replace({ params: { mode } });
};

/**
 *  @Author: cc
 *  @description: 解析 xlxs 表格
 */

// 数组 填充
const fillArrays = (data: string[] | number[] | any[]) => {
  const maxLength = Math.max(...data.map((arr) => arr.length)); // 找到最长的数组长度
  return data.map((arr) => {
    const diff = maxLength - arr.length; // 计算需要填充的数量
    if (diff > 0) {
      // 填充 null
      return arr.concat(Array(diff).fill(null));
    } else {
      return arr;
    }
  });
};

// 读 excel
const readerExcel = async () => {

  const response = await axios.get("./excel/AIOC数据表单.xlsx", {
    responseType: "arraybuffer",
  });

  // const response = await axios.get("http://192.168.3.15:3001/AIOC数据表单.xlsx", {
  //   responseType: "arraybuffer",
  // });


  const data = new Uint8Array(response.data);

  const workbook = XLSX.read(data, { type: "array", codepage: 936 }); // 使用 'array' 类型解析

  // 获取 excel 表名
  excelTitles.value = workbook.SheetNames;

  workbook.SheetNames.map((titleName: any, _) => {
    if (_ >= 2) return;
    // 读表
    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[titleName], {
      header: 1,
      raw: false,
    });

    // 数据
    const arr = [];

    //编辑数据
    for (var i = 0; i < ws.length; i++) {
      arr.push(ws[i] as string);
    }

    // 列表
    exceMapList.value[titleName] = fillArrays(arr);
  });

  // 设置显示的标题
  setTabs(workbook.SheetNames);

  return workbook.SheetNames;
};

//  设置  显示 下方 tabs  的标题
const setTabs = (tabsName: TabsRouter | TabsRouter[] | any[]) => {
  const allRouterNames = Object.keys(tabInfo);
  // 将过滤后的数据重新赋值给 tabInfo
  allRouterNames.forEach((routerName: TabsRouter | string | any) => {
    if (!tabsName.includes(routerName)) {
      delete tabInfo[routerName];
    }
  });
};

// 加载完毕
const loadOver = () => (loadingEnd.value = true);

/**
 *  @Author: cc
 *  @description: 根据映射表 获取 对应的 值
 */
// 通过 位置获取值
const getValueByPosition = (exceMapList: string[], tabsModule: string, position: number[]) => {

  let v = undefined;

  const arr = exceMapList[tabsModule][position[0]]

  v = arr[position[1]]

  return v
};

// 获取 表格 内容
const getExcelData = (exceMapList: string[], tabsModule: string) => {

  Object.keys(excelDataMap[tabsModule]).map((type: string) => {

    Object.values(excelDataMap[tabsModule][type]).map((item: any, index: number) => { // 修改这里的类型声明为 number

      const { position } = item;

      let value = getValueByPosition(exceMapList, tabsModule, position);

      // 处理 换行符
      value = value?.replace(/\n/g, '');

      // 修改这里的访问方式
      excelDataMap[tabsModule][type][index]['value'] = value;

    });
  });

  // console.log("映射表：", excelDataMap);

  updataExcelData(excelDataMap)
};

// 表格数据二次处理数据 数据截取
const processExcel = () => {

  excelDataMap['综合态势'].overflowLeft2 = sliceByLengthFn(excelDataMap['综合态势'].overflowLeft2, 9);
  excelDataMap['综合态势'].overflowRight1 = sliceByLengthFn(excelDataMap['综合态势'].overflowRight1, 4);
  excelDataMap['综合态势'].overflowRight2 = sliceByLengthFn(excelDataMap['综合态势'].overflowRight2, 4);
  excelDataMap['综合态势'].overflowRight3 = sliceByLengthFn(excelDataMap['综合态势'].overflowRight3, 8);

  excelDataMap['安防管理'].safeLeft2 = sliceByLengthFn(excelDataMap['安防管理'].safeLeft2, 12);
  excelDataMap['安防管理'].safeLeft4 = sliceByLengthFn(excelDataMap['安防管理'].safeLeft4, 9);
  excelDataMap['安防管理'].safeRight2 = sliceByLengthFn(excelDataMap['安防管理'].safeRight2, 9);
  excelDataMap['安防管理'].safeRight6 = sliceByLengthFn(excelDataMap['安防管理'].safeRight6, 10);

  console.log('修改后的constant的值:', excelDataMap);
}

// 监听 解析表格值
watch(
  exceMapList,
  () => {
    const exceList = exceMapList.value;

    console.log("读的所有表:", exceMapList.value);

    // 获取 表格信息
    getExcelData(exceList, '综合态势');

    getExcelData(exceList, '安防管理');

    // 表格数据二次处理数据
    processExcel();

  },
  { deep: true }
);

// 监听 路由 变化 设置显示面板
watch(
  () => router.currentRoute.value.path,
  (_: string) => {
    // 模 式 初始化
    const { mode } = route.params as { [key: string]: string };

    const index = getRouterIndex(mode);

    // 通过路由 parmas进行判断 设置索引
    tabState.value = index;

    // 显示 对应的 左右侧模块
    changeTab(mode, index);

    // console.log('\n模式', mode, '\n索引:', index);
  },
  { deep: true }
);

onMounted(() => {
  // 读 excel
  readerExcel();
});
</script>

<template>
  <!-- 外场 总组件 -->
  <div class="outFactory">
    <!-- loading -->
    <load v-show="!loadingEnd" />

    <!-- 场景 -->
    <Scene @loadOver="loadOver" />

    <!-- 全局顶部 -->
    <global-header class="header" />

    <!-- 左弹窗 -->
    <trans :showIndex="tabState" direction="left" :slotNumber="4">
      <!-- 左1 -->
      <template v-slot:slot-0>
        <OverviewLeft />
      </template>

      <!-- 左2 -->
      <template v-slot:slot-1>
        <SafeLeft />
      </template>

      <!-- 左1 -->
      <template v-slot:slot-2>
        <EnergyLeft />
      </template>

      <!-- 左2 -->
      <template v-slot:slot-3>
        <DeviceLeft />
      </template>
    </trans>

    <!-- 右弹窗 -->
    <trans :showIndex="tabState" direction="right" :slotNumber="4">
      <!-- 右1 -->
      <template v-slot:slot-0>
        <OverviewRight />
      </template>

      <!-- 右2 -->
      <template v-slot:slot-1>
        <SafeRight />
      </template>

      <!-- 右3 -->
      <template v-slot:slot-2>
        <EnergyRight />
      </template>

      <!-- 右4 -->
      <template v-slot:slot-3>
        <DeviceRight />
      </template>
    </trans>

    <!-- 外总厂  底部 -->
    <OutFactoryBottom class="outFactory-bottom">
      <!-- 测试 btn -->
      <div @pointerdown="(e: any) => e.stopPropagation()" class="btn">
        <div :class="{ button: true, active: index === tabState }" v-for="(mode, key, index) in tabInfo"
          @click="changeTab(mode, index)">
          {{ key }}
        </div>
      </div>
    </OutFactoryBottom>
  </div>
</template>
