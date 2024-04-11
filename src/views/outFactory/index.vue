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
    display: flex;
    justify-content: space-between;

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
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";

import OutFactoryBottom from "@/views/outFactory/components/bottom/index.vue";

import { excelDataMap } from "@/constant/excel.js";
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
const loadingEnd = ref(false); // loading
const route = useRoute(); // 查值
const router = useRouter(); // 跳转 功能

// 表格仓库 信息
const { updataExcelData } = storeExcelData();

// excel数据
const excellist = ref<string[]>([]);

// tabs 选项
const tabInfo = reactive({
  综合态势: {
    mode: "overview",
  },
  安防管理: {
    mode: "safe",
  },
  能源管理: {
    mode: "energy",
  },
  设备管理: {
    mode: "device",
  },
});

// 当前的 模块
const mode = route.params.mode as string;

// 获取 路由 对应的索引
const getRouterIndex = (mode: string) => {
  let foundObject = null; // 初始时没有找到任何对象
  // 遍历 tabInfo 的键值对及其索引
  Object.entries(tabInfo).forEach(([key, value], index) => {
    // 如果当前键值对中的 mode 值等于要查找的 modeToFind
    if (value.mode === mode) {
      // 保存找到的对象及其索引
      foundObject = { key, value, index };
      // 找到后停止循环
      return;
    }
  });
  return foundObject;
};

// 获取 当前的索引
const routerIndex = getRouterIndex(mode) as unknown as RouterIndex; // 使用类型断言确定返回类型

// 默认选中那个
const tabState = ref(0);

// 初始化 默认显示哪一个 tabs
tabState.value = routerIndex.index; 


/**
 *  @Author: cc
 *  @description:  切换 tabs
 */
const changeTab = (name: string, val: object, index: number) => {
  const { mode } = val as { [key: string]: string };
  tabState.value = index; // 设置显示 索引
  // console.log("模块:", name, "\n索引：", index, "\n值:", val, "\nmode:", mode);
  // 更新当前的模块
  router.replace({ params: { mode } });
};

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
  // const response = await axios.get("./excel/AIOC.xlsx", {
  //   responseType: "arraybuffer",
  // });
  const response = await axios.get("./excel/AIOC数据表单（无公式）.xlsx", {
    responseType: "arraybuffer",
  });
  const data = new Uint8Array(response.data);
  const workbook = XLSX.read(data, { type: "array", codepage: 936 }); // 使用 'array' 类型解析
  const wsname = workbook.SheetNames[0]; //取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
  const arr = [];
  //生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据
  const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {
    header: 1,
    raw: false,
  });

  //编辑数据
  for (var i = 0; i < ws.length; i++) {
    arr.push(ws[i] as string);
  }

  excellist.value = fillArrays(arr);

  // console.log("第一个表名：", wsname, "\n读取结果", [...excellist.value]);
};

// 根据 position 获取对应值
const getValueByPosition = (position: number[]) => {
  const [row, col] = position;
  return [...excellist.value][row][col];
};

// get 获取 数据
const loadExcelNumDate = () => {
  for (const category in excelDataMap) {
    const categoryData = excelDataMap[category];
    for (const timeFrame in categoryData) {
      const timeFrameData = categoryData[timeFrame];
      for (const key in timeFrameData) {
        const { position } = timeFrameData[key];
        // 获取值并更新 dataMap
        excelDataMap[category][timeFrame][key].value =
          getValueByPosition(position);
      }
    }
  }

  //更新 本地存储值
  updataExcelData(excelDataMap);
  // console.log("表格数据:", excelDataMap);
};


// 加载完毕
const loadOver = () => {
  loadingEnd.value = true;
};

onMounted(() => {
  // 读 excel
  readerExcel();
});

watch(excellist, () => {
  // 获取 excel 数据
  loadExcelNumDate();
});

// 监听 路由 变化 设置显示面板
watch(
  () => router.currentRoute.value.path,
  (_: string) => {
    // 模 式
    const { mode } = route.params;

    const foundObject = getRouterIndex(mode);

    const { key, value, index } = foundObject;

    // 通过路由 parmas进行判断 设置索引
    tabState.value = index;

    // 显示 对应的 左右侧模块
    changeTab(key, value, index);

    // console.log("跳转路由", toPath, '\n模式', mode, '\n索引:', index);
  },
  { deep: true }
);

</script>

<template>
  <!-- 外场 总组件 -->
  <div class="outFactory">
    <!-- loading -->
<<<<<<< HEAD
    <load v-show="!loadingEnd" />
=======
    <!-- <load v-show="!loadingEnd"/> -->
>>>>>>> d55437fd830b342e1319bf4eaa197016666a8ee1

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

    <!-- 场景 -->
    <Scene @loadOver="loadOver" />

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
        <div :class="{ button: true, active: _ === tabState }" v-for="(val, key, _) in tabInfo"
          @click="changeTab(key, val, _)">
          {{ key }}
        </div>
      </div>
    </OutFactoryBottom>
  </div>
</template>
