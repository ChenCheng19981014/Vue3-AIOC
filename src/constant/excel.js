// excel 数据 映射表
const excelDataMap = {
  综合态势: {
    能耗统计: {
      电能耗: {
        日: {
          // 数值
          num: {
            position: [4, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [4, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [4, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [4, 7],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [5, 3],
            value: null,
          },
          // 单位
          unit: {
            position: [5, 4],
            value: null,
          },
          // 上升 或 下降
          target: {
            position: [5, 6],
            value: null,
          },
          // 上升 或 下降 值
          targetNum: {
            position: [5, 7],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [6, 3],
            value: null,
          },
          // 单位
          unit: {
            position: [6, 4],
            value: null,
          },
          // 上升 或 下降
          target: {
            position: [6, 6],
            value: null,
          },
          // 上升 或 下降 值
          targetNum: {
            position: [6, 7],
            value: null,
          },
        },
      },
    
      水能耗: {
        日: {
          // 数值
          num: {
            position: [7, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [7, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [7, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [7, 7],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [8, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [8, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [8, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [8, 7],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [9, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [9, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [9, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [9, 7],
            value: null,
          },
        },
      },
    
      气能耗: {
        日: {
          // 数值
          num: {
            position: [10, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [10, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [10, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [10, 7],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [11, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [11, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [11, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [11, 7],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [12, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [12, 4],
            value: null,
          },
          //   上升 或 下降
          target: {
            position: [12, 6],
            value: null,
          },
          //    上升 或 下降 值
          targetNum: {
            position: [12, 7],
            value: null,
          },
        },
      },
    
      能源费用总计: {
        日: {
          // 数值
          num: {
            position: [13, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [13, 4],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [14, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [14, 4],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [15, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [15, 4],
            value: null,
          },
        },
      },
    
      电费: {
        日: {
          // 数值
          num: {
            position: [16, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [16, 4],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [17, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [17, 4],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [18, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [18, 4],
            value: null,
          },
        },
      },
    
      水费: {
        日: {
          // 数值
          num: {
            position: [19, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [19, 4],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [20, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [20, 4],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [21, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [21, 4],
            value: null,
          },
        },
      },
    
      燃气费: {
        日: {
          // 数值
          num: {
            position: [22, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [22, 4],
            value: null,
          },
        },
        月: {
          // 数值
          num: {
            position: [23, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [23, 4],
            value: null,
          },
        },
        年: {
          // 数值
          num: {
            position: [24, 3],
            value: null,
          },
          //   单位
          unit: {
            position: [24, 4],
            value: null,
          },
        },
      },
    },

    区域能耗: [],

    视频监控: {
      监控总数: {
        position: [48, 3],
        value: null,
      },
      在线: {
        position: [49, 3],
        value: null,
      },
      离线: {
        position: [50, 3],
        value: null,
      },
    },

    设备概况: {
      设备总数: {
        position: [51, 3],
        value: null,
      },
      运行: {
        position: [52, 3],
        value: null,
      },
      待机: {
        position: [53, 3],
        value: null,
      },
      告警: {
        position: [54, 3],
        value: null,
      },
      维修保养: {
        position: [55, 3],
        value: null,
      },
      人工停机: {
        position: [56, 3],
        value: null,
      },
      工艺调整: {
        position: [57, 3],
        value: null,
      },
      更换材料: {
        position: [58, 3],
        value: null,
      },
    },

    综合告警: [],
  },

  安防管理: {},

  能源管理: {},
};

// 区域能耗 每一项
const getAreaData = () => {
  excelDataMap['综合态势']["区域能耗"] = new Array(21).fill("").map((_, index) => {
    const initY = 27 + index;
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
  excelDataMap['综合态势']["综合告警"] = new Array(11).fill("").map((_, index) => {
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

getAreaData();
getComprehensiveWarning();

export { excelDataMap };