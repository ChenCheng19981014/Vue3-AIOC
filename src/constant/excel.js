// excel 数据 映射表
const excelDataMap = {
  综合态势: {
    topTips: [
      { position: [4,1], value: null },
      { position: [25,1], value: null },
      { position: [48,1], value: null },
      { position: [51,1], value: null },
      { position: [59,1], value: null },
    ],
    overflowLeft1Tips: [],
    overflowLeft1: [],
    overflowLeft2Tips: [],
    overflowLeft2: [],
    overflowRight1: [],
    overflowRight2: [],
    overflowRight3: [],
  },

  安防管理: {},

  能源管理: {},
};

// 区域能耗 每一项
const getAreaData = () => {
  excelDataMap["综合态势"]["区域能耗"] = new Array(22)
    .fill("")
    .map((_, index) => {
      const initY = 26 + index;
      return {
        area: {
          position: [initY, 1],
          value: null,
        },
        type: {
          position: [initY, 2],
          value: null,
        },
        unit: {
          position: [initY, 3],
          value: null,
        },
        dayUse: {
          position: [initY, 4],
          value: null,
        },
        dayCost: {
          position: [initY, 5],
          value: null,
        },
        monthUse: {
          position: [initY, 6],
          value: null,
        },
        monthCost: {
          position: [initY, 7],
          value: null,
        },
        yearUse: {
          position: [initY, 8],
          value: null,
        },
        yearCost: {
          position: [initY, 9],
          value: null,
        },
      };
    });
};

// 综合告警
const getComprehensiveWarning = () => {
  excelDataMap["综合态势"]["综合告警"] = new Array(11)
    .fill("")
    .map((_, index) => {
      const initY = 61 + index;
      return {
        name: {
          position: [initY, 1],
          value: null,
        },
        area: {
          position: [initY, 2],
          value: null,
        },
        areaRegion: {
          position: [initY, 3],
          value: null,
        },
        grade: {
          position: [initY, 4],
          value: null,
        },
        machine: {
          position: [initY, 5],
          value: null,
        },
        day: {
          position: [initY, 6],
          value: null,
        },
        date: {
          position: [initY, 7],
          value: null,
        },
        handle: {
          position: [initY, 8],
          value: null,
        },
      };
    });
};

// getAreaData();
// getComprehensiveWarning();

export { excelDataMap };
