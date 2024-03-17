"use client";
import React from "react";

import { BarDisplay } from "./bar-display";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { AnalyticCardTypes } from "../../types";

function AnalyticCard({
  icon,
  title,
  height,
  showAxis,
  subTitle,
  description,
  analyticBarData,
  showContent = true,
  cardContentClassName,
  barContainerClassName,
}: AnalyticCardTypes) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className={cardContentClassName}>
        {showContent && (
          <>
            <div className="text-2xl font-bold">{subTitle}</div>
            <p className="text-xs text-slate-700 dark:text-slate-400">
              {description}
            </p>
          </>
        )}
        <div className={cn("my-2", barContainerClassName)}>
          <BarDisplay
            height={height}
            showAxis={showAxis}
            analyticBarData={analyticBarData}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default AnalyticCard;
