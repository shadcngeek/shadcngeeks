import React from "react";

import { ColumnIndexTypes } from "./types";

function ColumnIndex({ row }: ColumnIndexTypes) {
  return (
    <div className="w-52 text-left">
      <span className=" text-sm">{row.original.title}</span>
    </div>
  );
}

export default ColumnIndex;
