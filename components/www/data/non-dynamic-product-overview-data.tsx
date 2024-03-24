import Mysterio from "@/components/product-overview/mysterio";
import ProductMagnify from "@/components/product-overview/magnify";
import SimpleDetail from "@/components/product-overview/simple-detail";
import MysterioDetail from "@/components/product-overview/mysterio-detail";
import MysterioDetailMega from "@/components/product-overview/mysterio-detail-mega";

import { NonDynamicDataTypes } from "../components/statistics/types";

export const nonDynamicProductOverviewData: NonDynamicDataTypes[] = [
  {
    component: <SimpleDetail />,
    path: "simple-detail",
  },
  {
    component: <ProductMagnify />,
    path: "magnify",
  },
  {
    component: <MysterioDetailMega />,
    path: "mysterio-detail-mega",
  },
  {
    component: <MysterioDetail />,
    path: "mysterio-detail",
  },
  {
    component: <Mysterio />,
    path: "mysterio",
  },
];
