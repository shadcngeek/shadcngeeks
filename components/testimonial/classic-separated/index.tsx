import React from "react";

import Quote from "./quote";
import { quotes } from "./data";

function TestimonialClassicSeparated() {
  return (
    <div className="p-4 lg:p-10 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="space-y-5 md:space-y-10 lg:space-y-20">
        <p className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white font-semibold">
          What Clients Say About Us
        </p>
        <div className="flex items-center flex-wrap justify-center md:[&>*:nth-child(2)]:border-l w-fit xl:divide-x divide-solid dark:divide-slate-800">
          {quotes.map(({ fullName, jobTitle, quote, imgSrc, stars }, index) => (
            <Quote
              key={index}
              {...{ fullName, jobTitle, quote, imgSrc, stars }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialClassicSeparated;
