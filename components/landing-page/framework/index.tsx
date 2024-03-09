import React from "react";

import Icons from "./components/icons";
import MegaNav from "./components/mega-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Framework() {
  return (
    <div className="min-h-dvh dark:bg-slate-950 p-4 md:p-10">
      <div className="border dark:border-slate-800 rounded-lg overflow-hidden pb-10">
        <MegaNav />
        <div className="space-y-4 md:space-y-10 dark:text-white px-4">
          <div className="lg:w-[700px] text-center mx-auto mt-20">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
              The most complete{" "}
              <span className="text-rose-600">Authenticator </span>
              for your projects.
            </p>
            <p className="mt-3 md:mt-8 text-slate-400">
              AuthPickle is an open-source project that provides you with the
              most secure authentication system for your product.
            </p>
          </div>
          <div className="w-fit mx-auto flex justify-center items-center gap-3 flex-wrap">
            <Button className="bg-rose-600 dark:bg-rose-600 hover:dark:bg-rose-500 hover:bg-rose-500 dark:text-white">
              Get Started
            </Button>
            <Button
              variant={"outline"}
              className="border-rose-600 dark:border-rose-600 dark:text-white hover:dark:text-rose-600 hover:text-rose-600 hover:bg-transparent dark:hover:bg-transparent"
            >
              Documentation
            </Button>
          </div>
          <div className="text-sm text mx-auto w-fit">
            <p className="text-slate-400 text-sm">
              {" "}
              Works seamlessly with 20+ frameworks
            </p>
          </div>
        </div>
        <div className="flex max-w-[1100px] gap-3 mt-10 lg:mt-20 mx-auto flex-wrap justify-center">
          {Object.keys(Icons).map((icon: any, index) => (
            <Card
              key={index}
              className="w-fit hover:dark:border-rose-600 transition"
            >
              <CardContent className="p-6 text-slate-500 hover:text-rose-600 transition">
                {(Icons as any)[icon]()}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Framework;
