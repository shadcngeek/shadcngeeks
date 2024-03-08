import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { PriceProTypes } from "../types";

export function PricePro({
  plan,
  price,
  title,
  options,
  className,
  buttonName,
  description,
  btnClassName,
  titleClassName,
  headerClassName,
  borderClassName,
  optionsClassName,
}: PriceProTypes) {
  return (
    <Card className={cn("max-w-[350px] h-fit border-none", className)}>
      <div
        className={cn(
          "border rounded-lg dark:border-slate-800 mb-10",
          borderClassName
        )}
      >
        <CardHeader className={headerClassName}>
          <CardTitle className="text-base font-normal">{plan}</CardTitle>
          <p>
            <span className="text-2xl font-bold">{price}</span>/month
          </p>
        </CardHeader>
        <div className="p-4">
          <p
            className={cn(
              "p-4text-slate-900 dark:text-slate-300 mb-1",
              titleClassName
            )}
          >
            {title}
          </p>
          <p
            className={cn(
              "text-sm text-slate-700 dark:text-slate-400",
              optionsClassName
            )}
          >
            {description}
          </p>
          <Button className={cn("w-full mt-7", btnClassName)}>
            {buttonName}
          </Button>
        </div>
      </div>

      <CardContent>
        <ul
          className={cn(
            "flex flex-col gap-4 text-slate-700 dark:text-slate-400",
            optionsClassName
          )}
        >
          {options.map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              {icon} <p> {text}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
