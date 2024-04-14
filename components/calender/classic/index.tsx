"use client";
import React from "react";

import { format } from "date-fns";
import { DayPicker, DateFormatter } from "react-day-picker";

import { cn } from "@/lib/utils";

import Header from "./header/header";
import { buttonVariants } from "@/components/ui/button";

import { CalendarProps } from "./types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const formatWeekdayName: DateFormatter = (day) => {
  return format(day, "EEE");
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{ formatWeekdayName }}
      className={cn("dark:bg-slate-950 p-3", className)}
      classNames={{
        months: "flex justify-center",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row:
          "flex justify-between dark:border-slate-800 border mb-2 border-r-0",
        tbody:
          "dark:border-l-slate-800 dark:border-b-slate-800 border-l border-b",
        head_cell:
          "flex justify-center items-center border-r dark:border-r-slate-800 text-slate-500 w-full h-10 font-normal text-[0.8rem] dark:text-slate-400",
        row: "flex w-full",
        cell: "border-t border-r dark:border-t-slate-800 dark:border-r-slate-800 h-52 w-52 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "mt-3 h-9 w-9 p-0 dark:text-white font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900",
        day_today:
          "bg-rose-600 dark:!bg-rose-600 !rounded-full hover:!bg-rose-700 text-white dark:bg-slate-800 dark:text-slate-50",
        day_outside:
          "day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400",
        day_disabled: "text-slate-500 opacity-50 dark:text-slate-400",
        day_range_middle:
          "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Caption: Header,
      }}
      {...props}
    />
  );
}

function ClassicCalender() {
  return (
    <div className="dark:bg-slate-950 p-4 md:p-10 min-h-[100vh]">
      <div className="sm:hidden dark:text-white">
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="block dark:hidden"
          src="/images/www/classic.png"
        />
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="hidden dark:block"
          src="/images/www/classic-dark.png"
        />

        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Please, switch
          to a large screen device.
        </p>
      </div>
      <ScrollArea className="hidden sm:block">
        <Calendar />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default ClassicCalender;
