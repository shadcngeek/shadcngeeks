import React from "react";
import Image from "next/image";

import { Stats } from "./components/drawer";
import { Form } from "./components/contact/form";
import { CarouselDemo } from "./components/carousel";

function BodyBuilder() {
  return (
    <div className="bg-black h-dvh overflow-hidden px-4">
      <div className="text-white text-center space-y-2 py-10 lg:w-[700px] mx-auto">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold">
          I am a <span className="text-orange-600">Super Body</span> Builder
          with some <span className="text-orange-600">Super Muscle </span>
        </p>
        <p>
          I am the epitome of raw power and sculpted perfection. With muscles
          chiseled to precision, I dominate the fitness arena. My dedication,
          discipline, and passion inspire others to push beyond limits,
          redefining what the human body can achieve.
        </p>
      </div>
      <div className="mx-auto w-fit pb-10 space-x-3">
        <Stats buttonText="Start Now">
          <CarouselDemo />
        </Stats>

        <Stats buttonText="Contact us" variant="outline" buttonStyle="outline">
          <Form />
        </Stats>
      </div>
      <div className="relative w-full">
        <Image
          alt="image"
          width={800}
          height={800}
          className="mx-auto"
          src={"/images/bodyBuider.jpeg"}
        />
        <div className="absolute w-full h-[150px] lg:h-[300px] bg-gradient-to-t from-black from-70% to-transparent z-50 bottom-0"></div>
      </div>
    </div>
  );
}

export default BodyBuilder;
