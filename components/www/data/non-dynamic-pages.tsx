import HeaderX from "@/components/headers/header-x";
import MegaNav from "@/components/headers/mega-nav";
import HeaderCenter from "@/components/headers/header-center";
import HeaderSocial from "@/components/headers/header-social";
import HeaderLeftLogin from "@/components/headers/header-left-login";
import { NonDynamicDataTypes } from "../components/statistics/types";
import HeaderRightLogin from "@/components/headers/header-right-login";
import HeaderCenterLogin from "@/components/headers/header-center-login";
import ClassicStat from "@/components/statistics/classic-stat/classic-stat";
import ClassicCard from "@/components/statistics/classic-card/classic-stat";
import ClassicCardIcon from "@/components/statistics/classic-card-icon/classic-stat-icon";
import ClassicStatSided from "@/components/statistics/classic-stat-sided/classic-stat-sided";
import ClassicStatSidedImage from "@/components/statistics/classic-stat-sided-mage/classic-stat-sided-image";

export const nonDynamicData: NonDynamicDataTypes[] = [
  {
    component: <ClassicStat />,
    path: "classic-stat",
  },
  {
    component: <ClassicCard />,
    path: "classic-card",
  },
  {
    component: <ClassicCardIcon />,
    path: "classic-card-icon",
  },
  {
    component: <ClassicStatSided />,
    path: "classic-stat-sided",
  },
  {
    component: <ClassicStatSidedImage />,
    path: "classic-stat-sided-mage",
  },
];

export const nonDynamicDataHeaders: NonDynamicDataTypes[] = [
  {
    component: <HeaderCenter />,
    path: "header-center",
  },
  {
    component: <HeaderLeftLogin />,
    path: "header-left-login",
  },
  {
    component: <HeaderRightLogin />,
    path: "header-right-login",
  },
  {
    component: <HeaderCenterLogin />,
    path: "header-center-login",
  },
  {
    component: <HeaderX />,
    path: "header-x",
  },
  {
    component: <MegaNav />,
    path: "mega-nav",
  },
  {
    component: <HeaderSocial />,
    path: "header-social",
  },
];
