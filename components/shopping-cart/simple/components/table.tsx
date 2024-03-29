"use client";
import React from "react";

import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";

import { columns } from "../columns";
import { tableData } from "../data/table-data";

function Table() {
  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      minSize: 0,
      size: Number.MAX_SAFE_INTEGER,
      maxSize: Number.MAX_SAFE_INTEGER,
    },
  });

  return (
    <table className="w-full">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr className="text-left dark:border-slate-800" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="py-4 pl-4 w-fit text-slate-700 dark:text-slate-400"
                key={header.id}
                style={{
                  width:
                    header.getSize() === Number.MAX_SAFE_INTEGER
                      ? "auto"
                      : header.getSize(),
                }}
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
      <tbody className="border-t dark:border-slate-800">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                className={cn(
                  "w-fit border-b border-slate-100 dark:border-slate-900 p-4 text-left text-slate-700 dark:text-slate-400"
                )}
                key={cell.id}
                style={{
                  width:
                    cell.column.getSize() === Number.MAX_SAFE_INTEGER
                      ? "auto"
                      : cell.column.getSize(),
                }}
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
