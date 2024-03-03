import React from "react";

import User from "./user";

import { users } from "./data";
import { Card, CardContent } from "@/components/ui/card";

function TeamSided() {
  return (
    <Card className="">
      <CardContent className="p-20">
        <div className="flex justify-between">
          <div className="max-w-[700px] pr-10 border-r dark:border-slate-800">
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
          <div className="grid grid-cols-3 gap-10">
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
