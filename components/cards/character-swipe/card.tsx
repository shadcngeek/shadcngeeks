import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CharacterSwipeCardTypes {
  src: string;
  title: string;
  buttonText: string;
  description: string;
}

export function CharacterSwipeCard({
  src,
  title,
  buttonText,
  description,
}: CharacterSwipeCardTypes) {
  return (
    <Card className="w-full relative">
      <div className="absolute top-0 right-0">
        <Button className="bg-transparent hover:bg-transparent border m-2 text-[#71717a] dark:text-[#a1a1aa]">
          Skip
        </Button>
      </div>
      <CardContent className="p-6">
        <Image alt="image" src={src} width={350} height={350} />

        <div className="text-center">
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
            {description}
          </p>
        </div>

        <div className="mt-7 flex justify-center">
          <Button className="">{buttonText}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
