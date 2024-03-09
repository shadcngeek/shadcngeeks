import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CharacterSwipeCardTypes {
  id: number;
  src: string;
  title: string;
  buttonText: string;
  description: string;
}

export function CharacterSwipeCard({
  id,
  src,
  title,
  buttonText,
  description,
}: CharacterSwipeCardTypes) {
  return (
    <Card className="w-full relative">
      <div className="absolute top-0 right-0">
        <Button className="bg-transparent hover:bg-transparent border m-2 text-slate-700 dark:text-slate-400">
          Skip
        </Button>
      </div>
      <CardContent className="p-6">
        <Image alt="image" src={src} width={350} height={350} />

        <div className="text-center">
          <p className="font-bold text-2xl">{title}</p>
          <p className="text-slate-700 dark:text-slate-400 text-sm mt-2">
            {description}
          </p>
        </div>

        <div className="flex gap-3 justify-center my-5">
          <div
            className={cn(
              "w-2 h-2 rounded-full border border-[#71717a]",
              id === 0 && "bg-[#71717a]"
            )}
          ></div>
          <div
            className={cn(
              "w-2 h-2 rounded-full border border-[#71717a]",
              id === 1 && "bg-[#71717a]"
            )}
          ></div>
          <div
            className={cn(
              "w-2 h-2 rounded-full border border-[#71717a]",
              id === 2 && "bg-[#71717a]"
            )}
          ></div>
        </div>
        <div className="mt-7 flex justify-center">
          <Button className="">{buttonText}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
