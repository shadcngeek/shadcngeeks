"use client";
import * as React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Goal from "../goal";

export function CarouselDemo() {
  return (
    <Carousel className="w-fit mx-auto ">
      <CarouselContent className="w-[300px] lg:w-[400px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              <Goal num={index + 1} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white bg-transparent hover:bg-transparent border-slate-800 dark:border-slate-800" />
      <CarouselNext className="text-white bg-transparent hover:bg-transparent border-slate-800 dark:border-slate-800" />
    </Carousel>
  );
}
