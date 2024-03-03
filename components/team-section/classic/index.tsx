import React from "react";

import User from "./user";

import { users } from "./data";
import { Card, CardContent } from "@/components/ui/card";

function TeamClassic() {
  return (
    <Card>
      <CardContent className="p-20">
        <p className="text-center  mb-10 text-2xl sm:text-4xl md:text-5xl dark:text-white font-semibold">
          Meet Our Team
        </p>

        <div className="flex gap-10 justify-center">
          {users.map(({ fullName, imgSrc, role }) => (
            <User key={imgSrc} {...{ fullName, imgSrc, role }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default TeamClassic;
