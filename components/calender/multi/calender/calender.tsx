"use client";
import { atom, useAtom } from "jotai";
import { DayPicker } from "react-day-picker";

import Header from "../header/header";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const currentYearAtom = atom<number>(new Date().getFullYear());

function Calender({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: any) {
  const [currentYear] = useAtom(currentYearAtom);
  const fromMonth = new Date(currentYear, 0);

  return (
    <DayPicker
      month={fromMonth}
      numberOfMonths={12}
      showOutsideDays={showOutsideDays}
      className={cn("", className)}
      classNames={{
        month: "space-y-1 w-fit",
        months: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-fit",
        nav: "space-x-1 flex items-center",
        caption_label: "text-sm font-medium",
        caption: "flex justify-center pt-1 relative items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table:
          "space-y-1 border border-separate rounded-lg rounded-t-none dark:border-slate-800",
        head_row: "w-full flex justify-between",
        tbody:
          "dark:border-l-slate-800 dark:border-b-slate-800 border-l border-b",
        head_cell:
          "h-10 w-12 sm:h-10 sm:w-16 md:h-10 md:w-12 xl:h-10 xl:w-14 pt-2 justify-center items-center text-slate-500 font-normal text-[0.8rem] dark:text-slate-400",
        row: "flex w-full [&>*:last-child]:border-r-0",
        cell: "h-12 w-12 sm:h-16 sm:w-16 md:h-12 md:w-12 xl:h-14 xl:w-14 border-t border-r dark:border-t-slate-800 dark:border-r-slate-800 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800",
        day: "space-y-5 p-4 dark:text-white",
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

export default Calender;
