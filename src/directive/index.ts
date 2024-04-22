import { App } from "vue";

// 分割 字符 fn
const splitCharacterFn = (el: Element, binding: { [key: string]: any }) => {
  const { value } = binding;
  const numStr = value.toString();
  const num = Number(value);
  let dealValue = "";
  if (num < 1000) {
    el.innerHTML = numStr;
  } else {
    dealValue = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    el.innerHTML = dealValue;
  }
};
// 分割 字符
const splitCharacter = (app: App<Element>) => {
  app.directive("splitCharacter", {
    // 及他自己的所有子节点都挂载完成后调用
    mounted(el: Element, binding: { [key: string]: any }) {
      // 分割字节
      splitCharacterFn(el, binding);
    },
    // 及他自己的所有子节点都更新后调用
    updated(el: Element, binding: { [key: string]: any }) {
      // 分割字节
      splitCharacterFn(el, binding);
    },
  });
};

// 自定义 指令
const myDirective = (app: App<Element>) => {
  // v-splitCharacter 分割 字符
  splitCharacter(app);
};

export default myDirective;
