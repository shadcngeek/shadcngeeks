import PricePack from "@/components/pricing/price-pack";
import PriceTable from "@/components/pricing/price-table";
import ClassicSwipe from "@/components/pricing/classic-swipe";
import ClassicPrice from "@/components/pricing/classic-price";
import PricePackBaseline from "@/components/pricing/price-pack-baseline";
import PricePackTopBorder from "@/components/pricing/price-pack-top-border";
import { TeamSectionNonDynamicDataTypes } from "../components/pricing/types";
import ClassicPriceSeparate from "@/components/pricing/classic-price-separate";

export const nonDynamicPricingData: TeamSectionNonDynamicDataTypes[] = [
  {
    component: <PriceTable />,
    path: "price-table",
  },
  {
    component: <ClassicSwipe />,
    path: "classic-swipe",
  },
  {
    component: <ClassicPriceSeparate />,
    path: "classic-price-separate",
  },
  {
    component: <PricePackBaseline />,
    path: "price-pack-baseline",
  },
  {
    component: <PricePackTopBorder />,
    path: "price-pack-top-border",
  },
  {
    component: <ClassicPrice />,
    path: "classic-price",
  },
  {
    component: <PricePack />,
    path: "classic-pack",
  },
];
