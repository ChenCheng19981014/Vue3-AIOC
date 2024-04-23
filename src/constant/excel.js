/**
 *  @Author: cc
 *  @description:  根据位置[ x, y ] 获取 数组
 *  @param { row[] 、ranks[]  }
 *  @return { arr[{ positon:[], value:'' }]  }
 */
const getArrByPosition = (row, ranks) => {
  let arr = [];
  for (let rowIndex = row[0]; rowIndex <= row[1]; rowIndex++) {
    for (let ranksIndex = ranks[0]; ranksIndex <= ranks[1]; ranksIndex++) {
      const p1 = rowIndex;
      const p2 = ranksIndex;
      arr.push({ position: [p1, p2], value: null });
    }
  }
  return arr;
};

/**
 *  @Author: cc
 *  @description: 根据长度进行截取
 *  @param {  array原数组 len长度  }
 *  @return {  全新数组 }
 */
const sliceByLengthFn = (array, len) => {
  if (!Array.isArray(array) || len <= 0) return [];
  const arr = [];
  for (let i = 0; i < array.length; i += len) {
    arr.push(array.slice(i, i + len));
  }
  return arr;
};


// 动态 EXCEL 数据 映射表
const excelDataMap = {

  综合态势: {
    topTips: [
      { position: [4, 0], value: null },
      { position: [25, 0], value: null },
      { position: [48, 0], value: null },
      { position: [51, 0], value: null },
      { position: [59, 0], value: null },
    ],
    overflowLeft1Tips: [
      { position: [4, 1], value: null },
      { position: [7, 1], value: null },
      { position: [10, 1], value: null },
      { position: [13, 1], value: null },
      { position: [16, 1], value: null },
      { position: [19, 1], value: null },
      { position: [22, 1], value: null },
    ],
    overflowLeft1: getArrByPosition([4, 24], [2, 9]),
    overflowLeft2Tips: getArrByPosition([26, 26], [1, 10]),
    overflowLeft2: getArrByPosition([27, 47], [1, 9]),
    overflowRight1: getArrByPosition([48, 50], [1, 4]),
    overflowRight2: getArrByPosition([51, 58], [1, 4]),
    overflowRight3: getArrByPosition([61, 70], [1, 8]),
  },

  安防管理: {
    topTips: [
      { position: [4, 0], value: null },
      { position: [33, 0], value: null },
      { position: [40, 0], value: null },
      { position: [43, 0], value: null },
      { position: [53, 0], value: null },
    ],
    safeLeft1: getArrByPosition([4, 6], [1, 4]),
    safeLeft2Tips: [
      { position: [9, 1], value: null },
      { position: [15, 1], value: null },
      { position: [21, 1], value: null },
      { position: [27, 1], value: null },
    ],
    safeLeft2: getArrByPosition([9, 32], [2, 3]),
    safeLeft3: getArrByPosition([33, 36], [1, 4]),
    safeLeft4: getArrByPosition([38, 39], [1, 9]),
    safeRight1: getArrByPosition([40, 42], [1, 4]),
    safeRight2Tips: [{ position: [45, 1], value: null }],
    safeRight2: getArrByPosition([43, 44], [1, 9]),
    safeRight3: getArrByPosition([47, 48], [1, 5]),
    safeRight4: getArrByPosition([47, 52], [1, 5]),
    safeRight5: getArrByPosition([55, 64], [1, 8]),
    safeRight6: getArrByPosition([66, 71], [0, 9]),
  },

  能源管理: {
    topTips: [
      { position: [4, 0], value: null },
      { position: [17, 0], value: null },
      { position: [30, 0], value: null },
      { position: [48, 0], value: null },
      { position: [67, 0], value: null },
      { position: [81, 0], value: null },
    ],
    energyLeft1Tips:[{ position: [4, 1], value: null }],
    energyLeft1TipsInfo :getArrByPosition([4, 6], [2, 9]),
    energyLeft1Day:getArrByPosition([9, 10], [1, 8]), // 日
    energyLeft1Month:getArrByPosition([12, 13], [1, 8]), // 月
    energyLeft1Year:getArrByPosition([15, 16], [1, 8]), // 年

  },
};

export { excelDataMap, sliceByLengthFn };


// ssr 需要服务器端实现首屏渲染和首屏渲染 需要承受压力 返回整个页面
// ssr 不存在单个实例的情况 每次用户请求都会生成一个实例 因此有多个实例 每个实例都有自己的状态
// ssr 服务端在异步获取数据的时候 分为两种情况 首屏获取渲染 和  切换组件获取
// 首屏获取数据的时候应该在首页渲染的时候就应该获取到 而 切换组件的时候应该是由mixin混入 后再beforeMount中进行获取