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
      月: {},
      年: {},
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
      月: {},
      年: {},
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
      月: {},
      年: {},
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
      月: {},
      年: {},
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
      月: {},
      年: {},
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
      月: {},
      年: {},
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
      月: {},
      年: {},
    },
  },

  区域能耗: [
    {
      area: {
        position: [22, 3],
        value: null,
      },
      type: {
        position: [22, 3],
        value: null,
      },
      unit: {
        position: [22, 3],
        value: null,
      },
      dayUse: {
        position: [22, 3],
        value: null,
      },
      dayCost: {
        position: [22, 3],
        value: null,
      },
      monthUse: {
        position: [22, 3],
        value: null,
      },
      monthCost: {
        position: [22, 3],
        value: null,
      },
      yearUse: {
        position: [22, 3],
        value: null,
      },
      yearCost: {
        position: [22, 3],
        value: null,
      },
    },
  ],
};

export { excelDataMap };
