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
      { position: [36, 0], value: null },
      { position: [43, 0], value: null },
      { position: [46, 0], value: null },
      { position: [56, 0], value: null },
    ],
    safeLeft1: getArrByPosition([4, 6], [1, 4]),
    safeLeft2:[],
    safeRight1:[],
    safeRight1:[],
  },

  能源管理: {},
};

export { excelDataMap, sliceByLengthFn };
