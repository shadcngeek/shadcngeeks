"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Quote from "../quote";

import { quotes } from "../data";
import Indicator from "./indicator";

function CarouselPlugin() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-[300px] md:max-w-[400px] lg:max-w-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {quotes.map(({ fullName, jobTitle, quote, imgSrc }, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Quote key={index} {...{ fullName, jobTitle, quote, imgSrc }} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex gap-3 items-center w-full justify-center mt-5">
        {Array.from({ length: quotes.length }).map((_, index) => (
          <Indicator key={index} index={index + 1} current={current} />
        ))}
      </div>
    </>
  );
}

export default CarouselPlugin;
