<template>
  <div class="scene" ref="scene" onselectstart="return false;" v-show="true">
    <div @pointerdown="
      (e) => {
        e.stopPropagation();
      }
    " class="btn"></div>
  </div>
</template>

<script setup>
import { RunScene } from "run-scene-v2";
import Change from "./Change";
import { ref, onMounted} from "vue";
const emit = defineEmits(["loadOver"]);
const scene = ref(null);
let sceneInstance = null;

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
    path: "https://3d-editor-2-1303915342.cos.ap-shanghai.myqcloud.com/202402271211440188261001202465.lt",
    dom: scene.value,
  });

  sceneInstance.on("loaded", () => {

    sceneInstance.setSize(1920, 1080);

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
