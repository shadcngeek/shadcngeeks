import React from "react";

import CarouselPlugin from "./container/auto-play";

function TestimonialCarousel() {
  return (
    <div className="p-4 lg:p-10 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="space-y-5 md:space-y-10 lg:space-y-20">
        <p className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white font-semibold">
          Testimonials
        </p>
        <div className="mx-auto w-fit">
          <CarouselPlugin />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
