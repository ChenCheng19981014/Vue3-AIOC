import { defineStore } from "pinia";
import { ref } from "vue";
/**
 *  @Author: cc
 *  @description:  当前 excel 表格 数据
 */
export const storeExcelData = defineStore(
  "currentSelectMenu",
  () => {
    // store表格数据
    const storeExcelDataMap = ref<Object>({});

    const updataExcelData = (data: Object) => {
      storeExcelDataMap.value = data;
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
