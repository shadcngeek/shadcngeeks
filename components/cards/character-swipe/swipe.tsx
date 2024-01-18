"use client";

import * as React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CharacterSwipeCard } from "./card";

interface DataTypes {
  src: string;
  title: string;
  buttonText: string;
  description: string;
}

interface SwipeTypes {
  data: DataTypes[];
}

export function Swipe({ data }: SwipeTypes) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map(({ buttonText, description, src, title }, index) => (
          <CarouselItem key={index}>
            <CharacterSwipeCard
              src={src}
              title={title}
              buttonText={buttonText}
              description={description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
