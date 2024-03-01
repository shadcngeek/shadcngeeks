import React from "react";

import { Button } from "@/components/ui/button";

function ClassicLargeNotFound() {
  return (
    <div className="dark:bg-slate-950 h-dvh dark:text-white flex justify-center items-center">
      <div className="space-y-2">
        <p className="w-full text-center text-[10em] lg:text-[15em] xl:text-[20em] font-bold bg-gradient-to-r from-rose-600 via-purple-500 to-rose-600 inline-block text-transparent bg-clip-text">
          404
        </p>
        <p className="text-center font-bold">Page not found.</p>
        <p className="px-4 lg:w-[400px] text-center mx-auto text-slate-800 dark:text-slate-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          repellendus beatae soluta numquam eaque dolor minima.
        </p>
        <div className="mx-auto w-fit pt-5">
          <Button variant={"outline"}>Go back</Button>
        </div>
      </div>
    </div>
  );
}

export default ClassicLargeNotFound;
