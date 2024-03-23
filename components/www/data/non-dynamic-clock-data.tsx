import ClockInner from "@/components/clocks/inner";
import ClockSimple from "@/components/clocks/simple";
import ClockSquare from "@/components/clocks/square";
import ClockDigital from "@/components/clocks/digital";
import ClockSimpleLabel from "@/components/clocks/simple-label";

import { NonDynamicDataTypes } from "../components/statistics/types";

export const nonDynamicClockData: NonDynamicDataTypes[] = [
  {
    component: <ClockDigital />,
    path: "digital",
  },
  {
    component: <ClockSquare />,
    path: "square",
  },
  {
    component: <ClockSimpleLabel />,
    path: "simple-label",
  },
  {
    component: <ClockInner />,
    path: "inner",
  },
  {
    component: <ClockSimple />,
    path: "simple",
  },
];
