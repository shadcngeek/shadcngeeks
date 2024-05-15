import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export interface PriceProTypes {
  plan: string;
  title: string;
  price: string;
  className?: string;
  buttonName: string;
  description: string;
  priceClassName?: string;
  buttonClassName?: string;
}

export const enterprisePlan: PriceProTypes = {
  price: "$299.99",
  plan: "Enterprise",
  title: "For Enterprises",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

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
    <Card className={cn("max-w-[400px] mx-auto", className)}>
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

function PriceUI() {
  return (
    <div>
      <PricePro
        priceClassName="text-slate-500"
        className="border-slate-500 dark:border-slate-500"
        buttonClassName="bg-slate-500 dark:bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-600 dark:text-white"
        {...enterprisePlan}
      />
    </div>
  );
}

export default PriceUI;