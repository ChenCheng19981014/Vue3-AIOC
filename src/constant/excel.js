// excel 数据 映射表
const excelDataMap = {
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
          value: null
        },
        //   单位
        unit: {
          position: [5, 4],
          value: null,
        },
        //   上升 或 下降
        target: {
          position: [5, 6],
          value: null,
        },
        //    上升 或 下降 值
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
        //   单位
        unit: {
          position: [6, 4],
          value: null,
        },
        //   上升 或 下降
        target: {
          position: [6, 6],
          value: null,
        },
        //    上升 或 下降 值
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

    能源费用统计: {
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
        unit: {
          position: [22, 4],
          value: null,
        }
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

  区域能耗: [] ,
};

(() => {
  // 区域能耗 每一项
  const getAreaData = () => {
    excelDataMap["区域能耗"] = new Array(21).fill("").map((_, index) => {
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
  }
  getAreaData();


})();

export { excelDataMap };
