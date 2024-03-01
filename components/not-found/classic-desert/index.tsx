import React from "react";

import { Button } from "@/components/ui/button";

function ClassicDesert() {
  return (
    <div className="relative -z-50 bg-[url('https://images.unsplash.com/photo-1515581247767-d78687bf2254?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-dvh text-black flex justify-center items-center">
      <div className="absolute w-full h-full bg-gray-500 -z-10 opacity-40"></div>
      <div className="space-y-2">
        <p className="text-center text-[10em] lg:text-[15em] xl:text-[20em] font-bold">
          404
        </p>
        <p className="text-center font-bold">Page not found.</p>

        <div className="mx-auto w-fit pt-5">
          <Button
            variant={"outline"}
            className="text-white dark:text-white bg-slate-950 border-slate-950 hover:bg-slate-900/90 hover:text-white"
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClassicDesert;
