import { createRouter, createWebHashHistory } from "vue-router";
import beforeEach from "./before-each";

const routes = [
  {
    path: "/",
    name: "app",
    // redirect: "/outFactory/mode?overview", // 重定向
    redirect: "/outFactory/overview", // 重定向
    // redirect: {
    //   name: "outFactory",
    //   query: { mode: "overview" },
    // },
  },
  {
    path: `/outFactory/:mode`,
    name: "outFactory",
    component: () => import("@/views/outFactory/index.vue"),
    props: true,
    meta: {
      title: "首页",
      keepAlive: true, //设置页面是否需要使用缓存
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "any",
    redirect: "/outFactory",
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
