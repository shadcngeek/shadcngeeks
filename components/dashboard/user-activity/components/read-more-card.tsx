"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { AnalyticCardTypes } from "../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function ReadMoreCard({
  icon,
  title,
  subTitle,
  description,
  cardClassName,
  showContent = true,
}: AnalyticCardTypes) {
  return (
    <Card className={cn("w-[60%]", cardClassName)}>
      <CardContent className={"flex justify-between p-6 h-full"}>
        <div className="space-y-4 w-[500px]">
          <div className="space-y-2">
            <p>{title}</p>
            <div className="space-y-2">
              {showContent && (
                <>
                  <div className="text-2xl font-bold">
                    <p>{subTitle}</p>
                  </div>
                </>
              )}
              <p className="w-full">{description}</p>
            </div>
          </div>
          <Button variant={"outline"}>Read More</Button>
        </div>
        <div className="flex  justify-center items-center w-[176px] h-[104px]] border border-slate-200 dark:border-slate-800 rounded-lg">
          <p className="text-[100px]">🚀</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReadMoreCard;
