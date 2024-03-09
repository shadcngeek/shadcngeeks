import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import data from "./data";
import { ContentTypes } from "./types";
import Image from "next/image";

function Content({ subTitle, title }: ContentTypes) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-slate-700 dark:text-slate-400 text-sm">{subTitle}</p>
    </div>
  );
}

export function AboutUser() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="flex gap-5 items-center">
          <div className="rounded-full w-fit shrink-0 overflow-hidden mx-auto">
            <Image
              alt="image"
              src={"/images/shoe.jpeg"}
              width={75}
              height={75}
            />
          </div>
          <div className="w-full flex justify-between">
            {data.map(({ subTitle, title }) => (
              <Content key={subTitle} subTitle={subTitle} title={title} />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-bold">Michael Robert</p>
          <p className="text-slate-700 dark:text-slate-400 text-sm">
            Frontend Developer
          </p>
        </div>
        <p className="text-slate-700 dark:text-slate-400 text-sm mt-2">
          Perfection is an illusion, but progress is real and tangible.
          Celebrate every step forward, no matter how small. Each effort
          contributes to your personal evolution. Remember, it&apos;s the
          journey of improvement that shapes the resilient and empowered
          individual you are becoming.
        </p>
      </CardContent>
    </Card>
  );
}
