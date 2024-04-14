import React from "react";

import { Card, CardContent } from "@/components/ui/card";

function ClassicCard() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-10 justify-between items-center p-4 md:p-20 lg:p-32 2xl:p-40 rounded-lg">
        <div className="space-y-2">
          <p className="text-center text-3xl lg:text-5xl font-bold">
            Trusted by designers worldwide
          </p>
          <p className="text-center text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, dignissimos?
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Card className="w-[300px]">
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold">$43 Million</p>
              <p>Marketing every 1 week</p>
            </CardContent>
          </Card>

          <Card className="w-[300px]">
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold">$200 Million</p>
              <p>Profit every month</p>
            </CardContent>
          </Card>

          <Card className="w-[300px]">
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold">500, 000</p>
              <p>Users every day</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicCard;
