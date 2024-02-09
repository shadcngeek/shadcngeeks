import React from "react";

import { Sparkles } from "lucide-react";

import { Input } from "../../ui/input";
import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";
import { Character } from "./components/character";

const images = [
  { img: "/images/girl1.jpeg" },
  { img: "/images/girl2.jpeg", width: 500, height: 500 },
  { img: "/images/girl3.jpeg" },
];

function AI() {
  return (
    <div className="bg-gradient-to-br from-white to-pink-300 dark:bg-gradient-to-br dark:from-40% via-pink-200 dark:from-slate-950 dark:to-pink-300 bg-no-repeat bg-cover">
      <MegaNav />
      <div className="px-4 flex justify-center items-center h-[100vh] lg:h-dvh lg:px-[200px]">
        <div className="">
          <div className=" lg:w-[700px] text-center space-y-2 mx-auto">
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center dark:text-white">
              Meet{" "}
              <span className="bg-gradient-to-r from-pink-600 to-pink-400 inline-block text-transparent bg-clip-text">
                PixelPro
              </span>{" "}
              Your AI artist! Transform ideas into stunning visuals with just a
              click.
            </p>
          </div>
          <div className="gap-3 flex justify-center items center my-10 flex-col md:flex-row">
            <Input
              className="w-full md:w-80 rounded-full h-11 px-8 focus-visible:ring-transparent ring-offset-transparent dark:focus-visible:ring-transparent dark:ring-offset-transparent focus:border-2"
              placeholder="Enter your idea, then generate"
            />
            <Button
              size={"lg"}
              className="text-white rounded-full bg-pink-500 dark:bg-pink-500 dark:hover:bg-pink-600 hover:bg-pink-600 dark:text-white space-x-2"
            >
              <Sparkles />
              <p>Generate </p>
            </Button>
          </div>
          <div className="mt-10 flex gap-3 md:gap-4 items-center">
            {images.map(({ img, width, height }) => (
              <Character key={img} image={img} width={width} height={height} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI;
