export type Person = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

export type AreaData = {};

export type Tabs = {
  综合态势?: {
    mode?: string;
  };
  安防管理?: {
    mode?: string;
  };
  能源管理?: {
    mode?: string;
  };
  设备管理?: {
    mode?: string;
  };
};

export type TabsRouter = "综合态势" | "安防管理" | "能源管理" | "设备管理";
