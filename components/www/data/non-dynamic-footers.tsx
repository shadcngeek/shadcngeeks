import FooterRich from "@/components/footer/rich";
import FooterCenter from "@/components/footer/center";
import { NonDynamicDataTypes } from "../components/statistics/types";
import FooterRichLeftSubscribe from "@/components/footer/rich-left-subscribe";
import FooterRichDarkMode from "@/components/footer/rich-dark-mode";
import FooterRichDarkModeLeft from "@/components/footer/rich-dark-mode-left";

export const nonDynamicFootersData: NonDynamicDataTypes[] = [
  {
    component: <FooterRichDarkModeLeft />,
    path: "rich-dark-mode-left",
  },
  {
    component: <FooterRichDarkMode />,
    path: "rich-dark-mode",
  },
  {
    component: <FooterRichLeftSubscribe />,
    path: "rich-left-subscribe",
  },
  {
    component: <FooterRich />,
    path: "rich",
  },
  {
    component: <FooterCenter />,
    path: "center",
  },
];
