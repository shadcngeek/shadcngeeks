"use client";

import { useAtom } from "jotai";

import Nav from "./nav/nav";
import { Separator } from "@/components/ui/separator";
import Calender, { currentYearAtom } from "./calender/calender";

function MultiCalender() {
  const [currentYear] = useAtom(currentYearAtom);

  return (
    <div className="dark:bg-slate-950 p-3 flex justify-center min-h-dvh">
      <div className="border p-2 md:p-5 rounded-xl dark:border-slate-800 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center w">
          <div className="w-full flex flex-col md:flex-row justify-between items-start mr-5 dark:text-white">
            <p className="text-2xl font-semibold">Calender</p>
            <div className="w-full md:w-fit flex flex-row justify-end items-end md:items-center gap-3">
              <p className="dark:text-white text-2xl ">{currentYear}</p>
              <Nav />
            </div>
          </div>
        </div>
        <Separator className="my-5" />
        <Calender />
      </div>
    </div>
  );
}

export default MultiCalender;
