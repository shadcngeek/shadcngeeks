import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function UserFollowers() {
  return (
    <Card className="w-[300px] p-6">
      <CardContent className="p-2">
        <div className="rounded-full w-fit overflow-hidden mx-auto">
          <Image alt="image" src={"/images/shoe.jpeg"} width={150} height={150} />
        </div>
        <div className="w-full flex flex-col items-center my-5">
          <p className="text-2xl font-bold">Michael Robert</p>
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
            Eat, Sleep, Code.
          </p>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">530</p>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">Photos</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">4.7K</p>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              Followers
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">830</p>
            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
              Follows
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
