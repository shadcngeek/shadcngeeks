"use client";
import React, { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const codeString = "npm i react-uploadify";
const progressString = "████████████████████████████████████████";

function CodeProgress() {
  let [code, setCode] = useState("");
  let [progress, setProgress] = useState("");
  let [progressCount, setProgressCount] = useState(0);
  let [isDone, setIsDOne] = useState<boolean>(false);

  function typeWriter(
    text: string,
    duration: number,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) {
    let i = 0;
    let characters = "";
    const interval = setInterval(() => {
      if (i < text.length) {
        if (isDone) {
          setProgressCount((progressCount += 2.5));
        }
        characters += text.charAt(i);
        setter(characters);
        i++;
      } else {
        setIsDOne(true);
        clearInterval(interval);
      }
    }, duration);
  }

  useEffect(() => {
    if (isDone) {
      typeWriter(progressString, 100, setProgress);
    } else {
      typeWriter(codeString, 100, setCode);
    }
  }, [isDone]);

  return (
    <ScrollArea className="w-full">
      <Card>
        <CardHeader>
          <div className="flex gap-3">
            <div className="w-4 h-4 rounded-full bg-rose-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
        </CardHeader>
        <CardContent className="space-y-5 md:space-y-10 w-fit">
          <p className="md:text-2xl text-slate-500 dark:text-slate-600 font-semibold">
            ${" "}
            <span className="text-slate-700 dark:text-slate-400 ml-4">
              {code}
            </span>
          </p>
          {progress && (
            <p className="ml-10 md:text-2xl font-semibold text-slate-700 dark:text-slate-400">
              {progress}
              <span className="ml-3">{progressCount}%</span>
            </p>
          )}
        </CardContent>
      </Card>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default CodeProgress;
