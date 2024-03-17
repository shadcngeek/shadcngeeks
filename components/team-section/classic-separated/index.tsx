import React from "react";

import User from "./user";

import { quotes } from "./data";
import { Card, CardContent } from "@/components/ui/card";

function ClassicSeparated() {
  return (
    <Card className="p-4 lg:p-10 flex justify-center items-center">
      <CardContent>
        <div className="space-y-5 md:space-y-10 lg:space-y-20">
          <p className="text-center  mb-10 text-2xl sm:text-4xl md:text-5xl dark:text-white font-semibold">
            Our Team
          </p>
          <div className="flex gap-10 items-center flex-wrap justify-center">
            {quotes.map(({ fullName, jobTitle, quote, imgSrc }, index) => (
              <div key={index} className="max-w-[400px]">
                <User {...{ fullName, jobTitle, quote, imgSrc }} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClassicSeparated;
