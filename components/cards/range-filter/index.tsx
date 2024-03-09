"use client";
import * as React from "react";

import { Range } from "./slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface PriceInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

type Size = "M" | "S" | "L" | "XS" | "XL";
interface SizeTypes {
  size: Size;
  sizeName: Size;
  onClick: () => void;
}

const initialSizes = {
  M: "",
  S: "",
  L: "",
  XS: "",
  XL: "",
};

const sizes = {
  M: "M",
  S: "S",
  L: "L",
  XS: "XS",
  XL: "XL",
};

export function PriceInput({ ...props }: PriceInput) {
  return <Input {...props} className="w-24" type="number" />;
}

function Size({ size, sizeName, onClick }: SizeTypes) {
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      className={cn(
        "w-10 h-10 flex justify-center items-center border text-slate-500 dark:text-800",
        sizes[size] && "bg-slate-900 border-none"
      )}
    >
      {sizeName}
    </Button>
  );
}

export function RangeFilter() {
  const [price, setPrice] = React.useState<number[]>([25, 75]);
  const [size, setSize] = React.useState<typeof sizes>(initialSizes);

  const endPrice = price[1];
  const startPrice = price[0];

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Filter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5 flex gap-3 items-center">
          <p className="text-slate-500 dark:text-slate-700">Price</p>
          <PriceInput
            value={startPrice * 100}
            onChange={(e: any) => {
              setPrice((value) => [e.target.value / 100, value[1]]);
            }}
          />
          <PriceInput
            value={endPrice * 100}
            onChange={(e: any) => {
              setPrice((value) => [value[0], e.target.value / 100]);
            }}
          />
        </div>
        <Range
          defaultValue={price}
          value={price}
          onValueChange={(value) => setPrice(value)}
          className="mb-10 w-full"
        />
        <p className="mb-3 text-slate-500 dark:text-slate-700">Gender</p>
        <div className="flex gap-4 text-slate-700 dark:text-slate-400">
          <Button>Male</Button>
          <Button>Female</Button>
        </div>
        <div className="mt-10">
          <p className="text-slate-500 dark:text-slate-700">Size</p>
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
  );
}
