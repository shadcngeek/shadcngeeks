import React from "react";
import Image from "next/image";

import { Heart, Trash2 } from "lucide-react";

import { ItemTypes } from "./type";

import { Quantity } from "./quantity";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function SmallDeviceItem({
  size,
  color,
  imgUrl,
  itemName,
  itemPrice,
}: ItemTypes) {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 flex gap-5">
        <div className="w-[100px] h-[75px] rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            width={200}
            height={100}
            src={imgUrl}
            alt="Product image"
          />
        </div>

        <div className="w-full flex justify-between">
          <div className="space-y-2 w-full">
            <div className="flex justify-between w-full">
              <p className="">{itemName}</p>
              <p className="font-semibold">${itemPrice}</p>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-400">
              <span className="text-slate-600 dark:text-slate-500">Size:</span>{" "}
              {size}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              <span className="text-slate-600 dark:text-slate-500">Color:</span>{" "}
              {color}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0 flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <div>
            <Button
              variant={"ghost"}
              className="flex gap-2 text-slate-700 dark:text-slate-400"
            >
              <Heart className="w-4 h-4" />
              <p>Whitelist</p>
            </Button>
          </div>
          <Quantity />
        </div>

        <div>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="text-red-500 hover:bg-red-200 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default SmallDeviceItem;
