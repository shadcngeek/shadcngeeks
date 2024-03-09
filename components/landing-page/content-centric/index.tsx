import React from "react";

import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";
import { Feedbacks } from "./components/feedbacks";

function Landing() {
  return (
    <div className="bg-[url('/images/bg-pink.svg')] dark:bg-[url('/images/bg-pink-light.svg')] bg-no-repeat bg-cover dark:bg-slate-950">
      <MegaNav />
      <div className="flex justify-center items-center min-h-dvh p-4 md:px-[100px] lg:px-[200px]">
        <div>
          <div className="md:w-[600px] lg:w-[700px] text-center space-y-2 mx-auto">
            <p className="text-2xl md:text-5xl lg:text-6xl font-bold text-center dark:text-white">
              The content-centric website{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                framework
              </span>
              for dynamic online experiences.
            </p>
            <p className="text-slate-700 dark:text-slate-400">
              Transforming the Digital Landscape: Harnessing the Potential of
              Our Content-Centric Website Framework for Immersive and Dynamic
              Online Journeys.
            </p>
          </div>
          <div className="gap-3 w-full flex justify-center my-5 md:my-10 ">
            <Button className="bg-slate-900 text-white">Get Started</Button>
            <Button variant={"outline"} className="dark:text-white">
              Documentation
            </Button>
          </div>
          <div className="mt-5 mx-auto w-fit">
            <Feedbacks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
