"use client";

import { ColumnDef } from "@tanstack/react-table";

import { UserAvatar } from "./avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

import { NotificationsType } from "../data/schema";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<NotificationsType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 w-full xl:w-[600px] 2xl:w-[800px]">
          <div>
            <p className="max-w-[500px] truncate font-medium">
              {row.getValue("title")}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              {row.original.subtitle}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "notificationCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Count" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="text-sm">{row.getValue("notificationCount")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "imgSrc",
    header: () => "User",
    cell: ({ row }) => {
      return (
        <div className="flex relative w-[25px] h-[25px] items-center">
          {row.original.imgSrc.map((img, index) => (
            <div
              key={index}
              className={cn("absolute top-[50%] translate-y-[-50%]")}
              style={{ left: 10 * index }}
            >
              <UserAvatar imgSrc={img} />
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="text-sm">{row.getValue("date")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
