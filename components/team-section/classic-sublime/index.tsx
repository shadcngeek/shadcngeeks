import React from "react";

import User from "./user";
import { Card, CardContent } from "@/components/ui/card";

import { users } from "./data";

function ClassicSublime() {
  return (
    <Card>
      <CardContent className="p-20">
        <p className="text-center  mb-10 text-2xl sm:text-4xl md:text-5xl dark:text-white font-semibold">
          Meet Our Team
        </p>
        <div className="grid grid-cols-3 gap-10 w-fit mx-auto">
          {users.map(({ fullName, imgSrc, role }) => (
            <User key={imgSrc} {...{ fullName, imgSrc, role }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicSublime;
