import React from "react";

export interface AnalyticCardNonExtendsTypes {
  icon?: any;
  title: string;
  subTitle: string;
  description: string;
  barContainerClassName?: string;
}

export interface AnalyticCardTypes extends AnalyticCardNonExtendsTypes {
  showContent?: boolean;
  cardClassName?: string;
}
export interface StatisticTypes {
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  graph?: React.ReactNode;
  children?: React.ReactNode;
}

export interface StatisticListTypes {
  icon?: any;
  title: string;
  amount: string;
  subTitle: string;
}

export interface BarDisplayTypes {
  height: number;
  showAxis: boolean;
  analyticBarData: any;
}

export interface MapStatisticListTypes {
  title: string;
  count: number;
}
