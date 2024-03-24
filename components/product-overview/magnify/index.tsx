"use client";
import Image from "next/image";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import Size from "./size";
import { MoreInfo } from "./more-info";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ProductMagnify() {
  const [selected, setSelected] = useState(2);
  const [imgSrc, setImgSrc] = useState("/images/p4.png");

  const handleOnClick = (path: string, id: number) => {
    setImgSrc(path);
    setSelected(id);
  };

  return (
    <Card className="border-none">
      <CardContent className="p-0 flex flex-col lg:flex-row gap-3">
        <div>
          <div className="flex flex-col md:flex-row gap-3 p-3">
            <div className="md:grid h-fit gap-3 hidden">
              <div
                onClick={() => handleOnClick("/images/p1.png", 1)}
                className={cn(
                  "rounded-lg overflow-hidden h-[120px] w-[120px] lg:h-[90px] lg:w-[90px] xl:h-28 xl:w-28",
                  selected === 1 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p1.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p2.png", 2)}
                className={cn(
                  "rounded-lg overflow-hidden h-[120px] w-[120px] lg:h-[90px] lg:w-[90px] xl:h-28 xl:w-28",
                  selected === 2 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p2.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p3.png", 3)}
                className={cn(
                  "rounded-lg overflow-hidden h-[120px] w-[120px] lg:h-[90px] lg:w-[90px] xl:h-28 xl:w-28",
                  selected === 3 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p3.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p4.png", 4)}
                className={cn(
                  "rounded-lg overflow-hidden h-[120px] w-[120px] lg:h-[90px] lg:w-[90px] xl:h-28 xl:w-28",
                  selected === 4 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p4.png"
                />
              </div>
            </div>

            <div className="rounded-lg overflow-hidden w-full lg:h-[400px] lg:w-[400px] xl:h-[485px] xl:w-[485px]">
              <Image
                width={2070}
                alt="Product"
                height={1500}
                className={cn("w-full h-full object-fill")}
                src={imgSrc}
              />
            </div>

            {/* Small Device */}
            <div className="flex h-fit gap-3 md:hidden">
              <div
                onClick={() => handleOnClick("/images/p1.png", 1)}
                className={cn(
                  "rounded-lg overflow-hidden w-full",
                  selected === 1 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p1.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p2.png", 2)}
                className={cn(
                  "rounded-lg overflow-hidden w-full",
                  selected === 2 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p2.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p3.png", 3)}
                className={cn(
                  "rounded-lg overflow-hidden w-full",
                  selected === 3 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p3.png"
                />
              </div>
              <div
                onClick={() => handleOnClick("/images/p4.png", 4)}
                className={cn(
                  "rounded-lg overflow-hidden w-full",
                  selected === 4 &&
                    "border border-violet-500 dark:border-violet-500"
                )}
              >
                <Image
                  width={2070}
                  alt="Product"
                  height={1500}
                  className={cn("w-full h-full object-fill")}
                  src="/images/p4.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 xl:p-6 space-y-3 lg:space-y-4 xl:w-[500px] 2xl:w-[650px]">
          <div className=" flex justify-between">
            <h3 className="text-2xl font-semibold">Sprint Surge</h3>
          </div>

          <p className="text-3xl font-light">$755.55</p>

          <p className="text-slate-700 dark:text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            esse cumque saepe adipisci illum eius veritatis amet, explicabo
            doloribus magni?
          </p>

          <div className="space-y-2">
            <div>
              <p>Coupon & Discount</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Card className="w-[200px] border border-violet-500 dark:border-violet-500">
                <CardHeader className="p-2 pb-0">
                  <CardTitle className="text-1xl">$345.68 off</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    On orders over $400.88
                  </p>
                </CardContent>
              </Card>

              <Card className="w-[200px] border border-violet-500 dark:border-violet-500">
                <CardHeader className="p-2 pb-0">
                  <CardTitle className="text-1xl">5% off</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Buy 5 pieces
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Size />

          <div className="flex gap-2">
            <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white w-full">
              Add to cart
            </Button>
          </div>

          <Separator />

          <div>
            <div className="space-y-5 lg:space-y-10">
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

              <MoreInfo />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductMagnify;
