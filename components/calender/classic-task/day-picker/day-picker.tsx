"use client";
import React from "react";

import { useAtom } from "jotai";
import { format } from "date-fns";
import { DayPicker, DateFormatter, ActiveModifiers } from "react-day-picker";

import { cn } from "@/lib/utils";

import Header from "../header/header";
import DayContent from "../day-content/day-content";
import { buttonVariants } from "@/components/ui/button";

import { CalendarProps } from "../types";
import { descriptionAtom } from "../add-task/add-task";

export interface DayContentProps {
  date: Date;
  displayMonth?: Date;
  activeModifiers?: ActiveModifiers;
}

const formatWeekdayName: DateFormatter = (day) => {
  return format(day, "EEE");
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [description] = useAtom(descriptionAtom);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName,
        formatDay: (date) => DayContent(date, description),
      }}
      className={cn("dark:bg-slate-950 p-3", className)}
      classNames={{
        month: "space-y-4",
        months: "flex justify-center",
        nav: "space-x-1 flex items-center",
        caption_label: "text-sm font-medium",
        caption: "flex justify-center pt-1 relative items-center",
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
        day: "w-full space-y-5 p-4",
        day_range_end: "day-range-end",
        day_today:
          "m-2 !w-[40px] flex justify-center items-center [&>div]:space-y-0 [&>div]:w-fit [&>div]:h-fit  flex !h-[40px] bg-rose-600 dark:!bg-rose-600 !rounded-full hover:!bg-rose-700 text-white dark:bg-slate-800 dark:text-slate-50",
        day_outside:
          "before:absolute before:w-full before:h-full before:left-0 before:top-0 before:-z-50 before:bg-gray-100 dark:before:bg-gray-800 day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400",
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

export default Calendar;
