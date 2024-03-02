import React from "react";
import { IndicatorTypes } from "../types";
import { cn } from "@/lib/utils";

function Indicator({ index, current }: IndicatorTypes) {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full",
        current === index ? "bg-rose-600" : "border border-rose-600"
      )}
    ></div>
  );
}

export default Indicator;
