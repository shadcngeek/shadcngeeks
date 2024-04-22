"use client";
import React from "react";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import columns from "./columns";
import { pricing } from "./data";
import { cn } from "@/lib/utils";

function Table() {
  const [expanded, setExpanded] = React.useState({});

  const table = useReactTable({
    columns,
    state: {
      expanded,
    },
    initialState: {
      expanded: true,
      pagination: { pageSize: 40 },
    },
    data: pricing,
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  React.useEffect(() => table.toggleAllRowsExpanded(true), []);

  return (
    <table className="w-full">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="py-4 pr-4 text-slate-700 dark:text-slate-400"
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                className={cn(
                  "p-4 border dark:border-slate-800 text-center text-slate-700 dark:text-slate-400",
                  row.getCanExpand() &&
                    "bg-slate-100 dark:bg-slate-900 font-semibold text-sm"
                )}
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

export default Table;
