import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function ProductList() {
  return (
    <Card>
      <CardContent className="p-2 xl:p-6 flex gap-5">
        <div className="rounded-lg overflow-hidden h-44 w-44 shrink-0">
          <Image
            width={500}
            height={500}
            src={"/images/pdm1.png"}
            alt="Product"
            className="w-full h-full object-fill"
          />
        </div>

        <div className="w-full space-y-2">
          <div>
            <h4 className="text-2xl">Velocity Stride</h4>
            <div className="flex gap-1 items-center">
              <div className="flex">
                <StarFilledIcon className="text-orange-500" />
                <StarFilledIcon className="text-orange-500" />
                <StarFilledIcon className="text-orange-500" />
                <StarFilledIcon className="text-orange-500" />
                <StarIcon className="w-4 h-4 text-orange-500" />
              </div>
              <div className="w-full flex justify-end">
                <Link href={"#"} className="text-blue-500 hover:underline">
                  See all 850 reviews
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-2xl font-semibold">$200.53</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Delivery: Mon, Apr 8
            </p>
          </div>

          <div>
            <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white">
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductList;
