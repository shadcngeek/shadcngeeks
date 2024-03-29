import React from "react";
import Image from "next/image";

import { ItemTypes } from "../type";
import { Card, CardContent } from "@/components/ui/card";
import { Quantity } from "./select";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

function Item({ imgUrl, itemName, color, itemPrice, size }: ItemTypes) {
  return (
    <Card>
      <CardContent className="p-6 flex gap-5">
        <div className="w-[200px] h-[150px] rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={imgUrl}
            alt="Product image"
            width={200}
            height={100}
          />
        </div>

        <div className="w-full flex justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="">{itemName}</p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                <span className="text-slate-600 dark:text-slate-500">
                  Size:
                </span>{" "}
                {size}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                <span className="text-slate-600 dark:text-slate-500">
                  Color:
                </span>{" "}
                {color}
              </p>
            </div>
            <div className="mt-3">
              <Button
                variant={"ghost"}
                className="flex gap-2 text-slate-700 dark:text-slate-400"
              >
                <Heart className="w-4 h-4" />
                <p>Whitelist</p>
              </Button>
            </div>
          </div>

          <Quantity />

          <div className="flex flex-col justify-between">
            <p className="font-semibold">${itemPrice}</p>
            <Button
              variant={"ghost"}
              className="text-red-500 hover:bg-red-200 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-600"
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Item;
