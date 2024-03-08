import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PriceProTypes } from "../types";

export function PricePro({
  plan,
  price,
  title,
  className,
  buttonName,
  description,
  priceClassName,
  buttonClassName,
}: PriceProTypes) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="text-base font-normal">{plan}</CardTitle>
        <p className={priceClassName}>
          <span className="text-5xl font-bold ">{price}</span>
          /month
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-slate-800 dark:text-slate-300 mb-1">{title}</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            {description}
          </p>
        </div>
        <Button className={cn("w-full mt-5", buttonClassName)}>
          {buttonName}
        </Button>
      </CardContent>
    </Card>
  );
}
