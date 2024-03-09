import React from "react";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { ImageTypes } from "../types";

function DisplayImages({ path, prompt }: ImageTypes) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Image
          src={path}
          width={800}
          height={800}
          className="rounded-lg"
          alt="ai generated image"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-[260px] text-sm">
        {prompt}
      </HoverCardContent>
    </HoverCard>
  );
}

export default DisplayImages;
