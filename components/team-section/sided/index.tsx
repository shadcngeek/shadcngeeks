import React from "react";

import User from "./user";

import { users } from "./data";
import { Card, CardContent } from "@/components/ui/card";

function TeamSided() {
  return (
    <Card>
      <CardContent className="p-4 md:p-10 lg:p-14 xl:p-20">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-2 max-w-[700px] xl:w-full lg:w-[600px] shrink pr-10 lg:border-r dark:border-slate-800">
            <p className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white font-semibold">
              Our Team
            </p>
            <p className="dark:text-slate-400 text-slate-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              nam odio totam aspernatur explicabo repellendus, assumenda ad,
              vero corporis et nisi magnam architecto maiores labore laboriosam
              illo, eveniet est quidem?
            </p>
          </div>
          <div className="mx-auto mt-10 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
            {users.map(({ fullName, imgSrc, role }) => (
              <User key={imgSrc} {...{ fullName, imgSrc, role }} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamSided;
