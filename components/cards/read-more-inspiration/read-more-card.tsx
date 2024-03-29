"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { AnalyticCardTypes } from "./types";

function ReadMoreCard({
  icon,
  title,
  subTitle,
  description,
  cardClassName,
  showContent = true,
}: AnalyticCardTypes) {
  return (
    <Card className={cn("w-full", cardClassName)}>
      <CardContent className={"flex justify-between p-6 h-full"}>
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
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default ReadMoreCard;
