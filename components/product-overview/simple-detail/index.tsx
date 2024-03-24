"use client";
import Image from "next/image";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { MoreInfo } from "./more-info";
import PlaceOrder from "./place-order";
import { Separator } from "@/components/ui/separator";
import { PlaceOrderModal } from "./place-order-modal";
import { Card, CardContent } from "@/components/ui/card";

function SimpleDetail() {
  const [selected, setSelected] = useState(2);
  const [imgSrc, setImgSrc] = useState("/images/ice-cream3.jpeg");

  const handleOnClick = (path: string, id: number) => {
    setImgSrc(path);
    setSelected(id);
  };

  return (
    <Card className="border-none">
      <CardContent className="p-3 flex flex-col lg:flex-row gap-3">
        <div className="w-fit">
          <div className="flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden w-full lg:h-[400px] lg:w-[400px]">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className={cn("w-full h-full object-fill")}
                src={imgSrc}
              />
            </div>

            <div className="grid h-fit gap-3 grid-cols-4 w-fit">
              <div
                onClick={() => handleOnClick("/images/ice-cream1.jpeg", 1)}
                className={cn(
                  "rounded-lg overflow-hidden w-full lg:h-24 lg:w-24",
                  selected === 1 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/ice-cream1.jpeg"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/ice-cream2.jpeg", 2)}
                className={cn(
                  "rounded-lg overflow-hidden w-full lg:h-24 lg:w-24",
                  selected === 2 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/ice-cream2.jpeg"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/ice-cream3.jpeg", 3)}
                className={cn(
                  "rounded-lg overflow-hidden w-full lg:h-24 lg:w-24",
                  selected === 3 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/ice-cream3.jpeg"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/ice-cream4.jpeg", 4)}
                className={cn(
                  "rounded-lg overflow-hidden w-full lg:h-24 lg:w-24",
                  selected === 4 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/ice-cream4.jpeg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-10 lg:mt-0 lg:p-6 space-y-3 md:space-y-4 w-full">
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">Drippy Cream</h3>
          </div>

          <p className="text-3xl font-light">$5.00</p>

          <p className="text-slate-700 dark:text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            esse cumque saepe adipisci illum eius veritatis amet, explicabo
            doloribus magni?
          </p>

          <div className="block lg:hidden">
            <PlaceOrderModal />
          </div>

          <Separator />

          <div>
            <div className="space-y-5 md:space-y-10">
              <div className="space-y-2">
                <h3 className="text-1xl font-semibold ">Description</h3>
                <p className="text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  optio laborum ratione obcaecati minima! Excepturi quis tempora
                  quidem architecto quia itaque adipisci odio iure nobis, error
                  asperiores dicta ex reprehenderit.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-1xl font-semibold">About this item</h3>
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

              <MoreInfo />
            </div>
          </div>
        </div>

        <div className="hidden xl:w-[400px] xl:shrink-0 xl:block">
          <PlaceOrder />
        </div>
      </CardContent>
    </Card>
  );
}

export default SimpleDetail;
