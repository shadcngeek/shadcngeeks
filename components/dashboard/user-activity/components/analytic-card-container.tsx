"use client";

import * as React from "react";

import AnalyticCard from "./analytic-card";
import { analyticsData } from "../data/data";

export function AnalyticCardContainer() {
  return (
    <div className="flex gap-4">
      {analyticsData.map(({ description, icon, subTitle, title }) => (
        <AnalyticCard
          key={title}
          icon={icon()}
          title={title}
          subTitle={subTitle}
          description={description}
        />
      ))}
    </div>
  );
}
