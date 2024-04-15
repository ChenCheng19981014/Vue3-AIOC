import { defineStore } from "pinia";
import { ref } from "vue";
import type { Tabs } from "@/types/execel";
/**
 *  @Author: cc
 *  @description:  当前 excel 表格 数据
 */
export const storeExcelData = defineStore(
  "currentSelectMenu",
  () => {
    // store表格数据
    const storeExcelDataMap = ref<Tabs>({
      综合态势: {},
      安防管理: {},
      能源管理: {},
      设备管理: {},
    });

    const updataExcelData = (tabsName: string, model: string, data: Object) => {
      storeExcelDataMap.value[tabsName][model] = null;
      storeExcelDataMap.value[tabsName][model] = data;
      // console.log("仓库:", tabsName, model, storeExcelDataMap.value);
    };

    return {
      storeExcelDataMap,
      updataExcelData,
    };
  },
  {
    // 配置第三个参数
    persist: {
      storage: sessionStorage,
      key: "storeExcelData",
    },
  }
);
