import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Shoe() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-2">
        <div className="rounded-lg overflow-hidden">
          <Image
            alt="image"
            src={"/images/shoe.jpeg"}
            className="w-full"
            width={550}
            height={550}
          />
        </div>
        <div className="mt-5 p-4 flex justify-between items-start">
          <div>
            <p className="text-[#71717a] dark:text-[#a1a1aa]">Lightning Shoe</p>
            <p className="font-bold text-2xl mt-2 text-slate ">$450</p>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
