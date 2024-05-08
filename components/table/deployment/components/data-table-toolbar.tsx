"use client";

import { Cross2Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

import * as React from "react";
import { DataTableToolbarProps } from "../types";
import { Branches } from "./branches";

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 sm:space-x-2">
        <Input
          placeholder="Filter..."
          value={
            (table.getColumn("commitMessage")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("commitMessage")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[250px] lg:w-[250px]"
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Branches table={table} />
          {table.getColumn("status") && (
            <DataTableFacetedFilter
              column={table.getColumn("status")}
              title="Status"
              options={statuses}
            />
          )}
        </div>

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
