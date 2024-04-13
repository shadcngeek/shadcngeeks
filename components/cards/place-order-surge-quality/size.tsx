"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const initialState = {
  a: false,
  b: false,
  c: false,
  d: false,
  e: false,
  f: false,
  g: false,
  h: false,
};

function Size() {
  const [isSelected, setIsSelected] = useState({
    ...initialState,
    c: true,
  });
  return (
    <div className="space-y-2">
      <p>Size</p>
      <div className="flex flex-wrap gap-2 w-fit">
        <Button
          className={cn(
            "w-20",
            isSelected.a ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, a: true })}
        >
          4
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.b ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, b: true })}
        >
          4.5
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.c ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, c: true })}
        >
          5
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.d ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, d: true })}
        >
          5.5
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.e ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, e: true })}
        >
          6
        </Button>

        <Button
          className={cn(
            "w-20",
            isSelected.f ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, f: true })}
        >
          6.5
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.g ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, g: true })}
        >
          7
        </Button>
        <Button
          className={cn(
            "w-20",
            isSelected.h ? "border-violet-500 dark:border-violet-500" : ""
          )}
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, h: true })}
        >
          7.5
        </Button>
      </div>
    </div>
  );
}

export default Size;
