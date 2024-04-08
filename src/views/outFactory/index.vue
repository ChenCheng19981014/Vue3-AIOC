<style scoped lang="scss">
.outFactory {
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as XLSX from "xlsx";
import axios from "axios";

const readerExcel = async () => {
    const response = await axios.get("./excel/AIOC.xlsx", {
      responseType: "arraybuffer",
    });
//   const response = await axios.get("./excel/t.xls", {
//     responseType: "arraybuffer",
//   });
  const data = new Uint8Array(response.data);
  const workbook = XLSX.read(data, { type: "buffer" }); // 使用 'array' 类型解析
  const wsname = workbook.SheetNames[0]; //取第一张表，wb.SheetNames[0]是获取Sheets中第一个Sheet的名字

  const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容，wb.Sheets[Sheet名]获取第一个Sheet的数据

  const excellist = [] as any; //清空接收数据

  //编辑数据
  for (var i = 0; i < ws.length; i++) {
    excellist.push(ws[i]);
  }

  console.log(
    // "第一个表名：",
    // wsname,
    "\n读取结果",
    excellist
    // "\n表信息：",
    // sheet
  );
};

onMounted(() => {
  readerExcel();
});
</script>

<template>
  <div class="outFactory"></div>
</template>
