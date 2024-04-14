"use client";
import * as React from "react";

import Size from "./size";
import { Range } from "./slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { initialSizes, sizes } from "./data";
import Presets from "./presets";

export interface PriceInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function PriceInput({ ...props }: PriceInput) {
  return <Input {...props} className="w-24" type="number" />;
}

export function RangeFilterPreset() {
  const [price, setPrice] = React.useState<number[]>([2500, 7500]);
  const [size, setSize] = React.useState<typeof sizes>(initialSizes);

  const endPrice = price[1];
  const startPrice = price[0];

  return (
    <div>
      <Card className="max-w-[420px] mx-auto sm:mx-0 sm:ml-auto">
        <CardHeader>
          <CardTitle>Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-5 flex gap-3 items-center">
            <p className="text-slate-500 dark:text-slate-400">Price</p>
            <PriceInput
              min={0}
              max={10000}
              value={startPrice < 9999 ? +startPrice : 9999}
              onChange={(e: any) => {
                setPrice((value: number[]) => [+e.target.value, +value[1]]);
              }}
            />
            <PriceInput
              min={0}
              max={10000}
              value={endPrice < 10000 ? +endPrice : 10000}
              onChange={(e: any) => {
                setPrice((value: number[]) => [+value[0], +e.target.value]);
              }}
            />
          </div>
          <Range
            defaultValue={price}
            value={price}
            onValueChange={(value) => setPrice(value)}
            className="mb-10 w-full"
          />
          <p className="mb-3 text-slate-500 dark:text-slate-400">Gender</p>
          <div className="flex gap-4 text-slate-700 dark:text-slate-400">
            <Button>Male</Button>
            <Button>Female</Button>
          </div>
          <Presets setPrice={setPrice} />

          <div className="mt-10">
            <p className="text-slate-500 dark:text-slate-400">Size</p>
            <div className="flex gap-3 mt-3">
              {Object.keys(sizes).map((i: any, index: any) => (
                <Size
                  key={index}
                  size={(size as any)[i]}
                  sizeName={(sizes as any)[i]}
                  onClick={() => setSize(() => ({ ...initialSizes, [i]: i }))}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
