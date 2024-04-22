"use client";

import { Mail } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Settings } from "./settings";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SmallDeviceDisplay from "./sidebar/small-device/small-device-display";
import { ConfirmUnsubscribing } from "./confirm-unsubscribtion";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Notifications</h3>
          <div className="block lg:hidden">
            <SmallDeviceDisplay />
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3">
          <Input
            className="max-w-[400px]"
            placeholder="Search..."
            value={
              (table?.getColumn("title")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table?.getColumn("title")?.setFilterValue(event.target.value)
            }
          />
          <div className="flex gap-3 flex-wrap">
            <div className="w-fit overflow-hidden border dark:border-slate-800 rounded-lg flex ">
              <Button className="rounded-none " size={"sm"}>
                All
              </Button>
              <Button variant={"ghost"} size={"sm"}>
                Unread
              </Button>
            </div>
            <Button variant={"outline"} size={"sm"}>
              Manage notification
            </Button>

            <Settings />
          </div>
        </div>

        <Card>
          <CardContent className="p-2 sm:p-6 flex justify-between items-center gap-3 flex-wrap">
            <div className="flex gap-2 items-center">
              <div className="border dark:border-slate-800 p-2 rounded-lg">
                <Mail className="text-blue-500 w-10 h-10 sm:w-14 sm:h-14" />
              </div>
              <div className="space-y-2">
                <p className="font-bold">Unsubscribe from MegaTouch?</p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  You haven&apos;t opened any emails from this sender in the
                  last month
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center w-fit ml-auto gap-2 ">
              <ConfirmUnsubscribing />
              <Button variant={"outline"}>No thanks</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
