import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PriceProTypes } from "../types";
import { cn } from "@/lib/utils";

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
    <div className={cn("lg:p-5", borderClassName)}>
      <Card
        className={cn(
          "max-w-[350px] border-none rounded-none shadow-none",
          className
        )}
      >
        <CardHeader className={headerClassName}>
          <CardTitle className="text-base font-normal">{plan}</CardTitle>
          <p>
            <span className="text-2xl font-bold">{price}</span>/month
          </p>
        </CardHeader>
        <CardContent>
          <p
            className={cn(
              "text-slate-900 dark:text-slate-300 mb-1",
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
          <Button className={cn("w-full my-7", btnClassName)}>
            {buttonName}
          </Button>
          <p
            className={cn(
              "border-b dark:border-slate-800 mb-7",
              borderClassName
            )}
          ></p>
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
    </div>
  );
}
