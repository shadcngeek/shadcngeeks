import React from "react";

import Image from "next/image";

import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";

function DashboardLanding() {
  return (
    <div className="px-4 md:px-[100px] dark:bg-slate-950 p-4 md:p-10">
      <div className="border dark:border-slate-800 rounded-lg overflow-hidden p-4 md:p-10">
        <MegaNav />
        <div className="flex justify-center md:items-center py-10 min-h-dvh">
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
            <div className="mt-5 border rounded-lg border-slate-200 dark:border-slate-800 overflow-hidden ">
              <div className="hidden dark:block">
                <Image
                  alt="image"
                  width={1500}
                  height={400}
                  src={"/images/dashboard-dark.png"}
                />
              </div>
              <div className="block dark:hidden">
                <Image
                  alt="image"
                  width={1500}
                  height={400}
                  src={"/images/dashboard-light.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLanding;
