"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface StatsTypes {
  buttonText: string;
  buttonStyle?: "outline" | "filled";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  children: React.ReactNode;
}

const className = {
  filled:
    "text-white dark:text-white b-white dark:bg-orange-600 hover:dark:bg-orange-700 bg-orange-700 hover:bg-orange-600 border-none",
  outline:
    "text-white dark:text-white hover:text-orange-600 b-white dark:border-orange-600 hover:dark:border-orange-700 border-orange-700 bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent",
};

export function Stats({
  buttonText,
  children,
  variant,
  buttonStyle = "filled",
}: StatsTypes) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={variant || "default"}
          className={className[buttonStyle]}
        >
          {buttonText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-black dark:bg-black flex justify-center w-full border-slate-800 dark:border-slate-800">
        {children}
      </DrawerContent>
    </Drawer>
  );
}
