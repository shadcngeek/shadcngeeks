import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function CodeRight() {
  return (
    <div className="bg-[url('/images/codeBgSM.png')] md:bg-[url('/images/codeBg.png')] overflow-x-hidden dark:bg-slate-950 dark:text-white h-dvh bg-cover bg-no-repeat">
      <div className="h-full flex pt-10 md:pt-0 md:items-center">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-10 items-center">
          <div className="md:flex-[50%] md:pl-10 lg:pl-20 p-4 md:p-0">
            <div className="text-center md:text-left lg:w-[500px] xl:w-[600px] space-y-2 mt-5">
              <p className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
                Your <span className="text-rose-600"> ultimate </span>
                companion for efficient team administration.
              </p>
              <p className="text-gray-800 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                nam harum nobis minus deleniti, fugit sit eveniet numquam id cum
                quis blanditiis, est, quasi pariatur vero ipsa! Aliquam, dolorem
                inventore.
              </p>
            </div>
            <div className="space-x-3 mt-5 mx-auto md:mx-0 w-fit">
              <Button className="bg-rose-600 dark:bg-rose-600 hover:dark:bg-rose-500 hover:bg-rose-700">
                Get started
              </Button>
              <Button
                variant={"outline"}
                className="border-rose-600 dark:border-rose-600 hover:text-rose-600 dark:hover:text-rose-600"
              >
                Watch video
              </Button>
            </div>
          </div>
          <div className="md:flex-[50%] pl-4 md:pl-0">
            <Card className="-mr-28 bg-rose-600 dark:bg-rose-600 border-none dark:border-none">
              <CardContent className="p-5 md:p-10 lg:p-16">
                <Image
                  width={1200}
                  height={500}
                  alt="code image preview"
                  src={"/images/codePreview.png"}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeRight;
