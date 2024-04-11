// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";
export default defineConfig({
  plugins: [vue(), svgLoader()],
  //项目部署的基础路径
  base: "/",
  //静态资源服务的文件夹
  publicDir: "public",
  resolve: {
    //别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: [],
    //解决程序包中package.json配置中的exports 字段
    conditions: [],
    //解析package.json中字段的优先级
    mainFields: ["module", "jsnext:main", "jsnext"],
    //导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    //使Vite通过原始文件路径而不是真正的文件路径确定文件身份
    preserveSymlinks: false,
  },
  css: {
    //配置 CSS modules 的行为。选项将被传递给 postcss-modules。
    modules: {},
    // PostCSS 配置（格式同 postcss.config.js）
    // postcss-load-config 的插件配置
    postcss: {},
    //指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      scss: {
        // 必须配置 才可全局使用 定义的css
        additionalData: `@import "@/design/var.scss";`,
      },
    },
    //开发过程中是否启sourcemap
    devSourcemap: false,
    //开发服务器
    preview: {
      //开发服务器主机名
      host: "localhost",
      //开发服务器端口号
      port: "8888",
      //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: true,
      //https.createServer()配置项
      https: "",
      //服务器启动时自动在浏览器中打开应用程序。
      open: "/docs/index.html",
      //开发服务器，自定义代理规则
      //开发服务器配置 CORS
      cors: {},
    },
  },
  server: {
    // open: true,
    host: "0.0.0.0",
    port: 8888,
  },
});
