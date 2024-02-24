"use client";
import React from "react";

import { Chart } from "react-google-charts";
import { mapData } from "./data";

export const options = {
  legend: false,
  defaultColor: "blue",
  datalessRegionColor: "gray",
  backgroundColor: { fill: "transparent" },
  colorAxis: { colors: ["black"] },
};

export function MapOverview() {
  console.log("Clicked");
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = mapData[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      width="100%"
      height="400px"
      data={mapData}
      chartType="GeoChart"
      options={options as any}
    />
  );
}
