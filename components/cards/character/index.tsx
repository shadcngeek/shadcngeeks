import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Character() {
  return (
    <Card className="relative">
      <div className="absolute top-0 right-0">
        <Button className="bg-transparent hover:bg-transparent border m-2 text-slate-700 dark:text-slate-400">
          Skip
        </Button>
      </div>
      <CardContent className="p-6">
        <Image alt="image" src={"/images/boy1.png"} width={350} height={350} />

        <div className="text-center">
          <p className="font-bold text-2xl">Code space</p>
          <p className="text-slate-700 dark:text-slate-400 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        <div className="mt-7 flex justify-center">
          <Button className="">Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
