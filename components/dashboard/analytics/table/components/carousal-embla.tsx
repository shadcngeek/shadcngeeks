"use client";

import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnalyticCard from "./analytic-card";
import { analyticsData, barData } from "../data/data";

export function CarouselEmbla() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {analyticsData.map(({ description, icon, subTitle, title }) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={title}>
            <AnalyticCard
              icon={icon}
              height={40}
              title={title}
              showAxis={false}
              subTitle={subTitle}
              description={description}
              analyticBarData={barData}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
