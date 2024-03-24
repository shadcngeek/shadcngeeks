import React from "react";

import Quote from "./quote";
import { quotes } from "./data";

function TestimonialClassicSimple() {
  return (
    <div className="p-4 lg:p-10 xl:p-40 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="flex flex-col lg:flex-row gap-5 md:gap-10 items-center lg:items-start">
        <div className="space-y-2 md:space-y-4 lg:w-[600px] lg:max-w-[600px]">
          <p className="text-center lg:text-left text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white font-semibold">
            What Our Clients Are Saying
          </p>
          <div className="md:max-w-[600px] text-slate-700 dark:text-slate-400 text-center lg:text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas, nulla delectus explicabo eos autem officia dolore
              obcaecati odit quam maiores illo repellat modi rem porro inventore
              minima vel accusamus?
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 w-fit">
          {quotes.map(({ fullName, quote, imgSrc }, index) => (
            <Quote key={index} {...{ fullName, quote, imgSrc }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialClassicSimple;
