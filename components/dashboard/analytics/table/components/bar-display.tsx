import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";

import { BarDisplayTypes } from "../../types";

export function BarDisplay({
  height,
  showAxis,
  analyticBarData,
}: BarDisplayTypes) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={analyticBarData}>
        {showAxis && (
          <XAxis
            fontSize={12}
            dataKey="name"
            stroke="#888888"
            tickLine={false}
            axisLine={false}
          />
        )}
        <Bar dataKey="uv" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
