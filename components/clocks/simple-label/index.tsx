"use client";
import React, { useState, useEffect } from "react";

function ClockSimpleLabel() {
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
    <div className="mx-auto w-fit p-4 sm:p-10">
      <div className="relative w-[300px] h-[300px] border-4 rounded-full border-slate-950 dark:border-white">
        <div
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
          className="w-1 h-[70px] bg-cyan-600 absolute origin-bottom top-[26%] left-[50%] translate-x-[-50%] rotate-4"
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
          className="w-1 h-[100px] bg-rose-600 absolute origin-bottom top-[16%] left-[50%] translate-x-[-50%] rotate-45"
        ></div>
        <div
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
          className="w-[1px] h-[100px] bg-slate-950 dark:bg-white absolute origin-bottom top-[16%] left-[50%] translate-x-[-50%] -rotate-90"
        ></div>
        <div className="w-3 h-3 bg-slate-950 dark:bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>

        <div className="absolute w-1 h-[30px] top-0 left-[50%] translate-x-[-50%] bg-slate-950 dark:bg-white" />
        <div className="absolute w-1 h-[30px] right-3 top-[50%] translate-y-[-50%] rotate-90 bg-slate-950 dark:bg-white" />
        <div className="absolute w-1 h-[30px] bottom-0 left-[50%] translate-x-[-50%] bg-slate-950 dark:bg-white" />
        <div className="absolute w-1 h-[30px] left-3 top-[50%] translate-y-[-50%] rotate-90 bg-slate-950 dark:bg-white" />
      </div>
    </div>
  );
}

export default ClockSimpleLabel;
