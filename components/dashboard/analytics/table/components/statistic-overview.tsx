"use client";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

import { staticOverViewData } from "../data/data";

function StatisticOverview() {
  return (
    <div className="w-full h-[100px]">
      <ResponsiveContainer width="100%" height={"100%"}>
        <AreaChart
          className="w-full h-full"
          data={staticOverViewData}
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

export default StatisticOverview;
