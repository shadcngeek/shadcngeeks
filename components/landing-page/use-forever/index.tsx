import React from "react";

import Image from "next/image";

import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";
import { PriceMostPopular } from "./components/price-most-popular";
import { Enterprise } from "./components/enterprise";

const hobbyist = [
  "10 SMS",
  "10 Metrics",
  "Free call",
  "Unlimited team members",
  "Assets library",
  "Full-time support",
];

const enterprise = [
  "90,000 SMS",
  "10 Metrics",
  "Free call",
  "Unlimited team members",
  "Assets library",
  "Full-time support",
];

function UseForever() {
  return (
    <div className="bg-[url('/images/bg-pink.svg')] dark:bg-[url('/images/bg-pink-light.svg')] bg-no-repeat bg-cover bg-center dark:bg-slate-950 h-dvh ">
      <MegaNav />
      <div className="flex justify-center items-center px-[200px] pt-10 ">
        <div>
          <div className="w-[700px] text-center space-y-2 mx-auto ">
            <p className="text-6xl font-bold text-center dark:text-white">
              The most complete
              <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                AI
              </span>
              of all times.
            </p>
            <p className="text-slate-700 dark:text-slate-400">
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
          <div className="mt-20 flex justify-center gap-3 items-center">
            <Enterprise price="$0" title="Hobbyist" enterpriseData={hobbyist} />
            <PriceMostPopular />
            <Enterprise
              price="$500"
              title="Enterprise"
              enterpriseData={enterprise}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseForever;
