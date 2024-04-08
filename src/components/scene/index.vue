<template>
  <div class="scene" ref="scene" onselectstart="return false;" v-show="true">
    <div
      @pointerdown="
        (e) => {
          e.stopPropagation();
        }
      "
      class="btn"
    ></div>
  </div>
</template>

<script setup>
import { RunScene } from "run-scene-v2";
import Change from "./Change";
import { ref, onMounted, defineEmits } from "vue";
import getHangIndextore from "@/store/modules/hang.js";
const emit = defineEmits(["loadOver"]);
const scene = ref(null);
let sceneInstance = null;
let getHangstore = getHangIndextore();

// 加载场景
const loadScene = () => {
  sceneInstance = new RunScene({
    coverSameId: true,
    instanceClone: false,
    render3: true,
    render2: true,
    renderConfig: {
      matrixAutoUpdate: true,
      scriptFrame: 60,
      static: false,
      event: {
        ignores: ["resize"],
      },
    },
  }).load({
    // path: "./assets/s.lt",
    // path: "https://3d-editor-2-1303915342.cos.ap-shanghai.myqcloud.com/202401231638577170091001202448.lt",
    // path: "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202403081423076470111001202413",
    path: "https://3d-editor-2-1303915342.cos.ap-shanghai.myqcloud.com/202403081423076470111001202413.lt",
    dom: scene.value,
  });

  sceneInstance.on("loaded", () => {
    // 宽高
    const { width, height } = document
      .querySelector(".fit-layout")
      .getBoundingClientRect();
    // 自适应
    // scene.setSize(width, height);
    sceneInstance.setSize(2560, 1360);

    getHangstore.isShow = false;

    Change(sceneInstance);

    getHangstore.isShow = true;

    // 场景加载完毕回调
    emit("loadOver");

    // console.log("加载完毕");
  });
};
onMounted(() => {
  loadScene();
});
</script>

<style scoped lang="scss">
.scene {
  width: 100%;
  height: 100%;
}
</style>
