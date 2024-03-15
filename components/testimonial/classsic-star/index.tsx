import React from "react";

import Quote from "./quote";
import { quotes } from "./data";

function TestimonialClassicStar() {
  return (
    <div className="p-10 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white text-center font-semibold">
            What Clients Say About Us
          </p>
          <div className="md:w-[600px] mx-auto text-slate-400 dark:text-slate-700">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas, nulla delectus explicabo eos autem officia dolore
              obcaecati odit quam maiores illo repellat modi rem porro inventore
              minima vel accusamus?
            </p>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center">
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

export default TestimonialClassicStar;
