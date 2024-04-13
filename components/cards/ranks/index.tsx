"use client";
import React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { mapData } from "./data";
import { MapStatisticListTypes } from "./types";
import { Progress } from "@/components/ui/progress";

function ProgressBar({ progressValue }: { progressValue: number }) {
  const [progress, setProgress] = React.useState(progressValue);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progress + 20), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full h-2" />;
}

const MapStatisticList = ({ count, title }: MapStatisticListTypes) => (
  <div className="space-y-2 py-4 border-b border-slate-200 dark:border-slate-800 first:pt-0 last:border-none">
    <p className="">{title}</p>
    <ProgressBar progressValue={count} />
  </div>
);

function Ranks() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ranks</CardTitle>
        <p className="text-slate-700 dark:text-slate-400 text-sm">
          Top users of the product
        </p>
      </CardHeader>
      <ScrollArea className="h-[400px]">
        <CardContent>
          {mapData.slice(1).map((data) => (
            <MapStatisticList
              key={data[0]}
              title={data[0] as string}
              count={data[1] as number}
            />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}

export default Ranks;
