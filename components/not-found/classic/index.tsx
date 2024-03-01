import React from "react";

import { Button } from "@/components/ui/button";

function ClassicNotFound() {
  return (
    <div className="dark:bg-slate-950 h-dvh dark:text-white flex justify-center items-center">
      <div className="space-y-2">
        <p className="text-center text-8xl font-bold">404</p>
        <p className="text-center">Page not found.</p>
        <div className="mx-auto w-fit pt-5">
          <Button variant={"outline"}>Go back</Button>
        </div>
      </div>
    </div>
  );
}

export default ClassicNotFound;
