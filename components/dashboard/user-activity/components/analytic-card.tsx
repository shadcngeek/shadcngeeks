"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { AnalyticCardTypes } from "../types";

function AnalyticCard({
  icon,
  title,
  subTitle,
  showContent = true,
}: AnalyticCardTypes) {
  return (
    <Card className="w-full">
      <CardContent className={"flex justify-between p-6"}>
        <div>
          <p>{title}</p>
          <div className="flex justify-between h-full">
            {showContent && (
              <>
                <div className="text-2xl font-bold">{subTitle}</div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-[52px] h-[104px]] border border-slate-200 dark:border-slate-800 rounded-lg">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}

export default AnalyticCard;
