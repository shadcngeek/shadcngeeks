"use client";

import React, { useEffect, useState } from "react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

const getData = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken"
  );
  const result = await response.json();
  return result;
};

export function Overview() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetData = async () => {
      const result = await getData();
      setData(result.Data);
    };
    handleGetData();
  }, []);

  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer width="100%" height={"100%"}>
        <AreaChart
          className="w-full h-full"
          data={data}
          margin={{
            top: 5,
            left: 0,
            right: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="currentColor" stopOpacity={1} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis
            fontSize={12}
            stroke="#888888"
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Area
            dataKey="close"
            strokeWidth={2}
            type="monotone"
            stroke="#020617"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
