import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mapData } from "../data/data";
import { MapStatisticListTypes } from "../types";

const MapStatisticList = ({ count, title }: MapStatisticListTypes) => (
  <div className="space-y-2 py-4 border-b border-slate-200 dark:border-slate-800">
    <p className="">{title}</p>
    <div className="relative w-full h-2 border border-slate-200 dark:border-slate-800 rounded-full">
      <div
        style={{
          width: `${(count / 100) * 10}%`,
        }}
        className={`absolute h-full bg-slate-950 dark:bg-white rounded-full left-0 `}
      ></div>
    </div>
  </div>
);

function MapStatistic() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ranks</CardTitle>
        <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
          Top users of the product
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {mapData.slice(1).map((data) => (
            <MapStatisticList
              key={data[0]}
              title={data[0] as string}
              count={data[1] as number}
            />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default MapStatistic;
