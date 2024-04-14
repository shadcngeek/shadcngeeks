"use client";
import React, { useState, useEffect } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ClockInner() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ScrollArea>
      <div className="mx-auto w-fit p-4 sm:p-10">
        <div
          className="relative w-[300px] h-[300px] rounded-full border-slate-400 dark:border-white 
        shadow-[inset_10px_10px_20px_0px_#cbd5e0,0px_0px_0px_3px_#e2e8f0,10px_10px_20px_0px_#cbd5e0]
        dark:shadow-[inset_10px_10px_20px_0px_#1e293b,0px_0px_0px_3px_#0f172a,10px_10px_20px_0px_#1e293b]
        "
        >
          <div
            style={{
              transform: `rotateZ(${time.getHours() * 30}deg)`,
            }}
            className="w-1 h-[70px] bg-rose-600 absolute origin-bottom top-[27%] left-[50%] translate-x-[-50%] rotate-4"
          ></div>
          <div
            style={{
              transform: `rotateZ(${time.getMinutes() * 6}deg)`,
            }}
            className="w-1 h-[100px] bg-cyan-600 absolute origin-bottom top-[16%] left-[50%] translate-x-[-50%] rotate-45"
          ></div>
          <div
            style={{
              transform: `rotateZ(${time.getSeconds() * 6}deg)`,
            }}
            className="w-[1px] h-[100px] bg-black dark:bg-white absolute origin-bottom top-[16%] left-[50%] translate-x-[-50%] -rotate-90"
          ></div>
          <div className="w-3 h-3 bg-black dark:bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default ClockInner;
