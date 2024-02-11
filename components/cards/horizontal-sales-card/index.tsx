import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

export function HorizontalSalesCard() {
  return (
    <Card className="">
      <CardContent className="p-2">
        <div className="flex gap-5 items-start">
          <div className=" w-fit shrink-0 rounded-lg overflow-hidden mx-auto">
            <Image alt="" src={"/images/shoe.jpeg"} width={150} height={150} />
          </div>
          <div>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              Different variants of a super lightening sport shoe.
            </p>
            <p className="text-2xl font-bold">$80.00</p>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
              <s>$160</s> |{" "}
              <span className="text-black font-bold">50% OFF</span>
            </p>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm mt-2">
              Free shipping
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
