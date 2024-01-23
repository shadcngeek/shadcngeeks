import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

import { tableChartData } from "../data/data";

export default function TableChart() {
  return (
    <div className="w-[100px] h-[30px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={tableChartData}>
          <Line dot={false} dataKey="pv" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
