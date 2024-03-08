import React from "react";

import { Swipe } from "./carousel/Swipe";
import { Card, CardContent } from "@/components/ui/card";

function ClassicSwipe() {
  return (
    <Card>
      <CardContent className="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start gap-5 lg:gap-10 p-4 lg:p-10">
        <div className="text-center lg:text-left lg:w-[700px] space-y-2 h-full">
          <p className="dark:text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Flexible payment pricing for your team
          </p>
          <p className="text-slate-700 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            amet in accusantium rerum similique aspernatur alias repellat,
            dignissimos consectetur, possimus mollitia ullam.
          </p>
        </div>
        <div className="lg:border-l dark:border-slate-800 p-6 shrink w-fit lg:w-full">
          <div className="lg:p-6 md:p-10 md:pt-0 lg:w-fit lg:mx-auto">
            <Swipe />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicSwipe;
