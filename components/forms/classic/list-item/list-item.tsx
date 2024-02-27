import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ListItemTypes } from "../types";

function ListItem({ icon, title, isActive }: ListItemTypes) {
  return (
    <>
      <Link
        href={"#"}
        className={cn(
          "px-4 mx-1 rounded-md flex gap-3 p-4 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-500 dark:hover:text-blue-500 transition text-slate-900 dark:text-slate-200",
          isActive && "text-blue-500 dark:text-blue-500"
        )}
      >
        <div>{icon}</div>
        <p>{title}</p>
      </Link>
    </>
  );
}

export default ListItem;
