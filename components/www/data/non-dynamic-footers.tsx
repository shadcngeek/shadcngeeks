import FooterCenter from "@/components/footer/center";
import { NonDynamicDataTypes } from "../components/statistics/types";
import FooterRich from "@/components/footer/rich";

export const nonDynamicFootersData: NonDynamicDataTypes[] = [
  {
    component: <FooterRich />,
    path: "rich",
  },

  {
    component: <FooterCenter />,
    path: "center",
  },
];
