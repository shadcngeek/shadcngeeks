import React from "react";
import { ProgressBarTypes } from "./tyoes";

function ProgressBar({ percent }: ProgressBarTypes) {
  return (
    <div
      className={`h-2 rounded-full bg-rose-600 mb-1 `}
      style={{ width: `${percent}%` }}
    ></div>
  );
}

export default ProgressBar;
