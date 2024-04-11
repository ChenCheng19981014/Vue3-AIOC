
let camera, scene, controls, t
// 拿资源
const setAssets = (assets) => {
    camera = assets.camera;
    scene = assets.scene;
    controls = assets.controls;
    t = assets.t;
}

// 用于记录当前场景索引
let currentSceneIndex = 0;

// 页面出口
const Change = (runScene) => {
    setAssets({ ...runScene.assetsEx.get(), t: this, runScene });


}

export default Change;