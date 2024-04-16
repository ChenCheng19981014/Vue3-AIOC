// 例子
export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

export type AreaData = {};

// 全局tabs
export type Tabs = {
  综合态势: object;
  安防管理: object;
  能源管理: object;
  设备管理: object;
};

// 全局tabs 元组
export type TabsRouter = "综合态势" | "安防管理" | "能源管理" | "设备管理";
