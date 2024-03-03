"use client";
import React from "react";

import { Button } from "@/components/ui/button";

function ComingSoonClassic() {
  return (
    <div className="dark:bg-slate-950 h-dvh relative px-4 md:px-[10vw] flex justify-center items-center">
      <div>
        <div className="space-y-2 lg:space-y-4 text-center">
          <p className="text-5xl lg:text-7xl xl:text-9xl font-semibold text-slate-950 dark:text-white">
            Coming Soon
          </p>
          <div className="md:w-[400px] lg:w-[600px] mx-auto">
            <p className="text-slate-800 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              nostrum ut omnis voluptate, quidem facere architecto asperiores
              veniam doloribus provident maxime aperiam natus similique, illum
              id. Reiciendis reprehenderit nulla consectetur.
            </p>
          </div>
        </div>
        <div className="mx-auto w-fit">
          <Button className="mt-10">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonClassic;
