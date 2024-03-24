"use client";
import React from "react";
import Image from "next/image";

import { StarIcon } from "lucide-react";

import Size from "./size";
import Color from "./color";
import Quality from "./quality";
import ProductList from "./product-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";

function MysterioDetailMega() {
  return (
    <Card className="border-none">
      <CardContent className="p-3 lg:p-0 flex flex-col lg:flex-row gap-3">
        <div className="shrink-0">
          <div className="grid grid-cols-2 h-fit gap-3 w-fit">
            <div className="rounded-lg overflow-hidden lg:h-52 lg:w-52 2xl:h-80 2xl:w-80">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className="w-full h-full object-fill"
                src="/images/p1.png"
              />
            </div>
            <div className="rounded-lg overflow-hidden lg:h-52 lg:w-52 2xl:h-80 2xl:w-80">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className="w-full h-full object-fill"
                src="/images/p2.png"
              />
            </div>
            <div className="rounded-lg overflow-hidden lg:h-52 lg:w-52 2xl:h-80 2xl:w-80">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className="w-full h-full object-fill"
                src="/images/p3.png"
              />
            </div>
            <div className="rounded-lg overflow-hidden lg:h-52 lg:w-52 2xl:h-80 2xl:w-80">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className="w-full h-full object-fill"
                src="/images/p4.png"
              />
            </div>
          </div>

          <div className="lg:p-6 mt-5 lg:mt-0">
            <div className="lg:w-[400px] 2xl:w-[600px] space-y-5 lg:space-y-10">
              <div className="space-y-2">
                <h3 className="text-2xl ">Description</h3>
                <p className="text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  optio laborum ratione obcaecati minima! Excepturi quis tempora
                  quidem architecto quia itaque adipisci odio iure nobis, error
                  asperiores dicta ex reprehenderit.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-1xl ">About this item</h3>
                <ul className="space-y-3 list-disc text-slate-700 dark:text-slate-400 pl-8 text-sm">
                  <li>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit sed voluptas ut nobis quod minus? Eveniet eaque id
                      officia suscipit debitis dolores libero, quaerat, rem
                      reiciendis molestiae maxime, enim explicabo.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit sed voluptas ut nobis quod minus? Eveniet eaque id
                      officia suscipit debitis dolores libero, quaerat, rem
                      reiciendis molestiae maxime, enim explicabo.
                    </p>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit sed voluptas ut nobis quod minus? Eveniet eaque id
                      officia suscipit debitis dolores libero, quaerat, rem
                      reiciendis molestiae maxime, enim explicabo.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[650px] lg:p-6 space-y-4 mt-5 lg:mt-0">
          <div className="space-y-2">
            <div className=" flex justify-between">
              <h3 className="text-2xl font-semibold">Sprint Surge</h3>
            </div>

            <div className="flex">
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarIcon className="w-4 h-4 text-orange-500" />
            </div>
          </div>

          <p className="text-3xl font-light">$755.55</p>

          <Color />
          <Size />
          <Quality />

          <div className="flex gap-2">
            <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white w-full">
              Add to cart
            </Button>
            <Button
              variant={"outline"}
              className="w-full border-violet-500 text-violet-500 hover:bg-violet-100 dark:hover:bg-violet-1900 dark:border-violet-500 hover:border-violet-700 hover:dark:border-violet-600 dark:text-violet-500 hover:text-violet-600 dark:hover:text-violet-600"
            >
              Whitelist
            </Button>
          </div>

          <Separator />

          <ProductList />
        </div>
      </CardContent>
    </Card>
  );
}

export default MysterioDetailMega;
