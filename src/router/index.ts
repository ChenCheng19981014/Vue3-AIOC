import { createRouter, createWebHashHistory } from "vue-router";
import beforeEach from "./before-each";

const routes = [
  {
    path: "/",
    name: "app",
    redirect: "/outFactory", // 重定向
  },
  {
    path: "/outFactory",
    name: "outFactory",
    component: () => import("@/views/outFactory/index.vue"),
    meta: {
      title: "首页",
      keepAlive: true, //设置页面是否需要使用缓存
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "any",
    redirect: "/image",
  },
];

// createRouter用于创建路由器实例，可以管理多个路由
const router = createRouter({
  // 路由的模式的设置
  history: createWebHashHistory(),
  routes,
});

beforeEach(router);

export default router;
