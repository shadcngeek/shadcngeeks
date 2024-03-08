import * as React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { PricePro } from "../price-pro";
import { enterprisePlan, freePlan, professionalPlan } from "../data";

export function Swipe() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <PricePro {...freePlan} />
        </CarouselItem>
        <CarouselItem>
          <PricePro
            priceClassName="text-cyan-500"
            className="border-cyan-500 dark:border-cyan-500"
            buttonClassName="bg-cyan-500 dark:bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-600 dark:text-white"
            {...professionalPlan}
          />
        </CarouselItem>
        <CarouselItem>
          <PricePro
            priceClassName="text-rose-500"
            className="border-rose-500 dark:border-rose-500"
            buttonClassName="bg-rose-500 dark:bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-600 dark:text-white"
            {...enterprisePlan}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
