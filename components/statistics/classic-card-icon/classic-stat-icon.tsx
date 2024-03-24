import React from "react";

import { ArrowUpDown, BarChart3, CalendarDays, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

function ClassicCardIcon() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-10 justify-between items-center p-4 md:p-20 lg:p-32 rounded-lg">
        <div className="space-y-2">
          <p className="text-center text-3xl lg:text-5xl font-bold">
            Trusted by designers worldwide
          </p>
          <p className="text-center text-slate-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, dignissimos?
          </p>
        </div>
        <div className="flex flex-wrap justify-center  items-center gap-5">
          <Card className="w-[150px] md:w-[200px]">
            <CardContent className="p-6 text-2xl text-center">
              <div className="mx-auto w-fit bg-rose-600 rounded-full p-2 mb-2">
                <BarChart3 className="text-white" />
              </div>
              <p className="text 2xl font-bold">$43K</p>
              <p className="text-sm text-gray-400 dark:text-gray-800">
                Marketing
              </p>
            </CardContent>
          </Card>

          <Card className="w-[150px] md:w-[200px]">
            <CardContent className="p-6 text-2xl text-center">
              <div className="mx-auto w-fit bg-rose-600 rounded-full p-2 mb-2">
                <CalendarDays className="text-white" />
              </div>
              <p className="text 2xl font-bold">$35M</p>
              <p className="text-sm text-gray-400 dark:text-gray-800">Income</p>
            </CardContent>
          </Card>

          <Card className="w-[150px] md:w-[200px]">
            <CardContent className="p-6 text-2xl text-center">
              <div className="mx-auto w-fit bg-rose-600 rounded-full p-2 mb-2">
                <Users className="text-white" />
              </div>
              <p className="text 2xl font-bold">435K</p>
              <p className="text-sm text-gray-400 dark:text-gray-800">Users</p>
            </CardContent>
          </Card>

          <Card className="w-[150px] md:w-[200px]">
            <CardContent className="p-6 text-2xl text-center">
              <div className="mx-auto w-fit bg-rose-600 rounded-full p-2 mb-2">
                <ArrowUpDown className="text-white" />
              </div>
              <p className="text 2xl font-bold">6M</p>
              <p className="text-sm text-gray-400 dark:text-gray-800">
                Requests
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicCardIcon;
