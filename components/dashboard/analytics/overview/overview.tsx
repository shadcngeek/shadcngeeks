"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { overViewData } from "../table/data/data";

export function Overview() {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height={"100%"}>
        <AreaChart
          className="w-full h-full"
          data={overViewData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" fill="#3b82f6" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
