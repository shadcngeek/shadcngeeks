import React from "react";

import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";
import { Feedbacks } from "./components/feedbacks";

function ArrivalHub() {
  return (
    <div>
      <MegaNav />
      <div className="flex justify-center items-center h-dvh px-[200px] dark:bg-slate-950">
        <div>
          <div className="w-[700px] text-center space-y-2 mx-auto">
            <p className="text-6xl font-bold text-center dark:text-white">
              The content-centric website{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                framework
              </span>
              for dynamic online experiences.
            </p>
            <p className="text-[#71717a] dark:text-[#a1a1aa]">
              Transforming the Digital Landscape: Harnessing the Potential of
              Our Content-Centric Website Framework for Immersive and Dynamic
              Online Journeys.
            </p>
          </div>
          <div className="gap-3 w-full flex justify-center my-10 ">
            <Button className="bg-slate-900 text-white">Get Started</Button>
            <Button variant={"outline"} className="dark:text-white">
              Documentation
            </Button>
          </div>
          <div className="mt-5">
            <Feedbacks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrivalHub;
