import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Character() {
  return (
    <Card className="w-[350px] relative">
      <div className="absolute top-0 right-0">
        <Button className="bg-transparent hover:bg-transparent border m-2 text-[#71717a] dark:text-[#a1a1aa]">
          Skip
        </Button>
      </div>
      <CardContent className="p-6">
        <Image alt="" src={"/images/boy1.png"} width={350} height={350} />

        <div className="text-center">
          <p className="font-bold text-2xl">Code space</p>
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
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
