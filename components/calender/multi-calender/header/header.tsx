import React from "react";

import { format } from "date-fns";
import { CaptionProps } from "react-day-picker";

function Header(props: CaptionProps) {
  return (
    <div className="w-full dark:border-slate-800 dark:text-white flex border h-10 items-center px-3 rounded-t-xl justify-between">
      <p>{format(props.displayMonth, "MMMM")}</p>
    </div>
  );
}

export default Header;
