"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const initialState = {
  XS: false,
  S: false,
  M: false,
  L: false,
  XL: false,
};

function Size() {
  const [isSelected, setIsSelected] = useState({
    ...initialState,
    S: true,
  });
  return (
    <div className="space-y-2">
      <p>Size</p>
      <div className="space-x-2">
        <Button
          className={
            isSelected.XS ? "border-violet-500 dark:border-violet-500" : ""
          }
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, XS: true })}
        >
          XS
        </Button>
        <Button
          className={
            isSelected.S ? "border-violet-500 dark:border-violet-500" : ""
          }
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, S: true })}
        >
          S
        </Button>
        <Button
          className={
            isSelected.M ? "border-violet-500 dark:border-violet-500" : ""
          }
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, M: true })}
        >
          M
        </Button>
        <Button
          className={
            isSelected.L ? "border-violet-500 dark:border-violet-500" : ""
          }
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, L: true })}
        >
          L
        </Button>
        <Button
          className={
            isSelected.XL ? "border-violet-500 dark:border-violet-500" : ""
          }
          variant={"outline"}
          onClick={() => setIsSelected({ ...initialState, XL: true })}
        >
          XL
        </Button>
      </div>
    </div>
  );
}

export default Size;
