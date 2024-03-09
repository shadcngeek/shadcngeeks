import * as React from "react";

import { StatisticListTypes } from "../../types";

export function StatisticList({
  icon,
  title,
  amount,
  subTitle,
}: StatisticListTypes) {
  return (
    <div className="w-full">
      <div className="py-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md">
              {icon}
            </div>
            <div>
              <p>{title}</p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                {subTitle}
              </p>
            </div>
          </div>
          <p>{amount}</p>
        </div>
      </div>
    </div>
  );
}
