"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";

import { formatDuration, intervalToDuration } from "date-fns";

import { Subscribe } from "./components/subscribe";

function ComingSoon() {
  const [date, setDate] = useState<string[]>(["", "", "", ""]);

  const handleSetDate = () => {
    let duration = intervalToDuration({
      start: new Date(),
      end: new Date(2030, 6, 2, 0, 0, 15),
    });

    const result = formatDuration(duration, {
      delimiter: ", ",
    });
    return result;
  };

  const handleGetNumbers = (inputString: string): string[] => {
    const numbers = inputString.match(/\d+(\.\d+)?/g);
    return numbers as string[];
  };
  useEffect(() => {
    const dateTimer = () => {
      setInterval(() => {
        const result = handleSetDate();
        const numbers = handleGetNumbers(result);
        setDate(numbers);
      }, 1000);
    };
    dateTimer();
  }, []);
  console.log(date);

  return (
    <div className="bg-black h-dvh relative text-white px-4 md:px-[10vw] overflow-hidden">
      <div className=" pt-[20vh]">
        <div className="border-t border-b border-slate-800 border-dashed text-center">
          <p className="text-[50px] md:text-[10vw] lg:text-[10vw] xl:text-[128px] ">
            Coming Soon
          </p>
        </div>
        <div className="flex justify-between border-b border-slate-800 border-dashed md:mx-10 lg:mx-20">
          <div className="relative  w-full border-r border-slate-800 border-dashed ">
            <div className="absolute h-[900px] border-l border-dashed top-[50%] translate-y-[-50%] border-slate-800"></div>
            <p className="text-[50px] md:text-[100px] lg:text-[128px] font-bold text-center w-full">
              {date[2]}
            </p>
          </div>
          <div className="border-r border-slate-800 border-dashed w-full">
            <p className=" text-[50px] md:text-[100px] lg:text-[128px] font-bold text-center">
              {date[3]}
            </p>
          </div>
          <div className="border-r border-slate-800 border-dashed  text-center w-full">
            <p className=" text-[50px] md:text-[100px] lg:text-[128px] font-bold">
              {date[4]}
            </p>
          </div>
          <div className="relative  w-full">
            <div className="absolute h-[900px] border-r border-dashed top-[50%] translate-y-[-50%] right-0 border-slate-800"></div>

            <p className="text-[50px] md:text-[100px] lg:text-[128px] font-bold text-center  w-full">
              {date[5]}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-10 gap-5">
          <p className="text-center sm:w-[400px] px-2 lg:w-[600px] text-slate-400 text-sm">
            Countdown to Brilliance: Embrace the Excitement of What&apos;s Next!
            Uncover the Mystery of ShadcnGeeks - Where Innovation Meets
            Anticipation. Your Future Unveiled, Your Expectations Redefined.
            Stay Connected for a Spectacle Beyond Imagination!
          </p>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
