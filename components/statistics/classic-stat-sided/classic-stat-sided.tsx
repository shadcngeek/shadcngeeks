import React from "react";

import { Card, CardContent } from "@/components/ui/card";

function ClassicStatSided() {
  return (
    <Card>
      <CardContent className="flex justify-between items-start p-24 rounded-lg gap-10">
        <div className="space-y-2 w-[600px] shrink-0">
          <p className="text-4xl font-bold">Trusted by designers worldwide</p>
          <p className=" text-slate-500 dark:text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptate mollitia inventore quis minus debitis nesciunt nobis et
            reiciendis non.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full">
          <Card className="w-full">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-3xl font-bold">$43 Million</p>
                <p>Marketing every 1 week</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-3xl font-bold">$200 Million</p>
                <p>Profit every month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-3xl font-bold">700, 000</p>
                <p>Requests per day</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <p className="text-3xl font-bold">500, 000</p>
                <p>Users every day</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicStatSided;
