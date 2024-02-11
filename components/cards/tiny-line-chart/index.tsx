"use client";
import React from "react";

import { LineChart, Line } from "recharts";

import { Revenue } from "./revenue";
import { Card, CardContent } from "@/components/ui/card";

import data from "./data";

export default function TinyLineChart() {
  return (
    <Card className="w-[350px]">
      <Revenue />
      <CardContent>
        <LineChart width={300} height={100} data={data}>
          <Line dataKey="pv" strokeWidth={2} type="monotone" stroke="#8884d8" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
