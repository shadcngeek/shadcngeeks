import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UserFollowMessage() {
  return (
    <Card className="w-[300px] p-6">
      <CardContent className="p-2">
        <div className="rounded-full w-fit overflow-hidden mx-auto">
          <Image alt="" src={"/images/shoe.jpeg"} width={100} height={100} />
        </div>
        <div className="w-full flex flex-col text-center items-center my-5">
          <p className="text-2xl font-bold mb-1">Michael Robert</p>
          <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
            Perfection is an illusion, but progress is real and tangible.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant={"outline"} className="w-full">
            Message
          </Button>
          <Button className="w-full">Connect</Button>
        </div>
      </CardContent>
    </Card>
  );
}
