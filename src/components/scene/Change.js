import getHangIndextore from "@/store/modules/hang.js"

let camera, scene, controls, t
let HangIndexStore = getHangIndextore()
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

    // 表示场景是否被暂停切换
    let isPaused = false;

    // 用于存储定时器的引用
    let switchTimeout;
    // 要进行场景切换的场景名称
    const scenes = ["江阴", "惠山", "锡山", "新吴", "梁溪", "滨湖", "宜兴"];

    // 用于切换场景函数
    const switchScenes = (scenes, index) => {
        const totalScenes = scenes.length; // 表示场景总数
        const scene = scenes[index % totalScenes]; // 当前索引要切换的场景

        // 设置场景切换效果
        runScene.cameraEx.setTemp("正式-" + scene, {
            time: 8,
            onComplete: () => {
                if (!isPaused) {
                    switchScenes(scenes, index + 1);
                    HangIndexStore.getCurrentIndex(scene)
                }
            }
        });

        if (index >= totalScenes * 2 - 1) {
            // console.log("执行完毕");
        }
    }

    // 用于暂停场景切换
    function pauseSceneSwitching() {
        isPaused = true;
        clearTimeout(switchTimeout);
    }

    // 用于恢复场景切换
    function resumeSceneSwitching() {
        isPaused = false;
        switchTimeout = setTimeout(() => switchScenes(scenes, currentSceneIndex), 0);
        currentSceneIndex++;
    }

    // 监听全局的点击事件
    window.addEventListener("click", () => {
        pauseSceneSwitching();
        clearTimeout(switchTimeout); // 清除定时器
        switchTimeout = setTimeout(resumeSceneSwitching, 5000); // 暂停5秒后恢复
    });

    // 开始场景切换,传入场景数组 scenes 和当前场景索引 currentSceneIndex。
    switchScenes(scenes, currentSceneIndex);

}

export default Change;