import React from "react";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { HeaderPricingCardTypes } from "./types";
import { cn } from "@/lib/utils";

function HeaderPricingCard({
  price,
  subtitle,
  className,
  description,
  priceClassName,
  buttonClassName,
}: HeaderPricingCardTypes) {
  return (
    <Card className={cn("w-fit", className)}>
      <CardHeader>
        <CardTitle className="text-left">
          <div>
            <p className="text-sm">{subtitle}</p>
            <p className={cn("text-4xl", priceClassName)}>{price}</p>
          </div>
        </CardTitle>
        <CardContent className="p-0">
          <p className="text-sm text-slate-700 dark:text-slate-400 font-normal text-left">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button className={buttonClassName}>Get Started</Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}

export default HeaderPricingCard;
