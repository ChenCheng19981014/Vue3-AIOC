// tab icons
import 待机 from "./svg/待机.svg?url";
import 告警 from "./svg/告警.svg?url";
import 运行 from "./svg/运行.svg?url";
import 摄像头 from "./svg/摄像头.svg?url";
import 设备 from "./svg/设备.svg?url";

import doing from "./svg/doing.svg?url";
import standby from "./svg/standby.svg?url";
import warning from "./svg/warning.svg?url";
import online from "./svg/online.svg?url";
import offline from "./svg/offline.svg?url";

interface SvgIcons {
  round_icons: {
    待机: string;
    告警: string;
    运行: string;
    摄像头: string;
    设备: string;
    online: string;
    doing: string;
    standby: string;
    warning: string;
    offline: string;
  };
}

const SVG_ICONS: SvgIcons = {
  // 圆形 灯珠
  round_icons: {
    待机,
    告警,
    运行,
    摄像头,
    设备,
    online,
    doing,
    standby,
    warning,
    offline,
  },
};

export default SVG_ICONS;
