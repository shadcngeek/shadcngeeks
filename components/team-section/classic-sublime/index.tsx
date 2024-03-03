import React from "react";

import User from "./user";
import { Card, CardContent } from "@/components/ui/card";

import { users } from "./data";

function ClassicSublime() {
  return (
    <Card>
      <CardContent className="p-4 md:p-10 lg:p-14 xl:p-20">
        <p className="text-center  mb-10 text-2xl sm:text-4xl md:text-5xl dark:text-white font-semibold">
          Meet Our Team
        </p>
        <div className="mx-auto w-fit mt-10 lg:mt-0 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
          {users.map(({ fullName, imgSrc, role }) => (
            <User key={imgSrc} {...{ fullName, imgSrc, role }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicSublime;
