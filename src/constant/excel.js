// excel 数据 映射表
const excelDataMap = {
  综合态势: {
    topTips: [
      { position: [4, 0], value: null },
      { position: [25, 0], value: null },
      { position: [48, 0], value: null },
      { position: [51, 0], value: null },
      { position: [59, 0], value: null },
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


// 能耗 统计
const eneryTotal = () => {
  // Rows and ranks

  let row = [4, 24]; // 行数

  let ranks = [2, 9]; // 列数

  let arr = [  ]

  for (let rowIndex = row[0]; rowIndex <= row[1]; rowIndex++) {
    // console.log('rowIndex:',rowIndex);
    for (let ranksIndex = ranks[0]; ranksIndex <= ranks[1]; ranksIndex++) {
      const p1 = rowIndex;
      const p2 = ranksIndex;
      // console.log('ranksIndex:',ranksIndex);
      arr.push( { position:[ p1,p2 ],value:null } )
    }
  }

// 能耗
  excelDataMap['综合态势'].overflowLeft1 = arr;

}

eneryTotal();// 能耗 统计

export { excelDataMap };
