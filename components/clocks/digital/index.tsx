"use client";
import React, { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";

function ClockDigital() {
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
      <Card className="border-4 rounded-xl max-w-[300px] sm:max-w-[600px] sm:w-[610px]">
        <CardContent className="p-6 flex gap-5 sm:gap-10 items-center justify-center">
          <p className="text-slate-950 dark:text-white font-bold text-3xl sm:text-8xl">
            {time.getHours()}
          </p>

          <p className="text-slate-950 dark:text-white font-bold text-3xl sm:text-8xl pb-1 sm:pb-5">
            :
          </p>

          <p className="text-slate-950 dark:text-white font-bold text-3xl sm:text-8xl">
            {time.getMinutes()}
          </p>

          <p className="text-slate-950 dark:text-white font-bold text-3xl sm:text-8xl pb-1 sm:pb-5">
            :
          </p>

          <p className="text-slate-950 dark:text-white font-bold text-3xl sm:text-8xl">
            {time.getSeconds()}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ClockDigital;
