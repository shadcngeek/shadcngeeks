import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CharacterTypes {
  image: string;
  width?: number;
  height?: number;
}

export function Character({ width, height, image }: CharacterTypes) {
  return (
    <Card className="relative h-fit border-none cursor-pointer hover:scale-105 transition">
      <CardContent className="p-0 h-fit">
        <Image
          src={image}
          width={width || 350}
          height={height || 350}
          alt="generated image"
          className={"rounded-lg"}
        />
        {/* <div className="text-center">
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div> */}
      </CardContent>
    </Card>
  );
}
