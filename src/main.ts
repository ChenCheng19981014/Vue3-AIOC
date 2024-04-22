import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入element-plus插件与样式
import ElementPlus from "element-plus";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 引入element-plus样式
import "element-plus/dist/index.css";
// 导入路由组件
import router from "@/router";
// 引入pinia仓库
import pinia from "@/store";
// 引入自定义插件对象：注册整个项目的全局组件
import gloablComponent from "@/components";
//公共样式
import "@/design/index.scss";
import myDirective from "@/directive/index";
// 获取应用实例对象
const app = createApp(App);

myDirective(app);

// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, // element-plus国际化配置
});
// 获取应用实例对象
app.use(router);
// 安装pinia仓库
app.use(pinia);
// 安装自定义插件
app.use(gloablComponent);

// 将应用挂载到挂载点上
app.mount("#app");
