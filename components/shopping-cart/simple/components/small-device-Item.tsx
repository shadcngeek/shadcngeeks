import React from "react";
import Image from "next/image";

import { TableTypes } from "../type";

import Quantity from "./quality";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function SmallDeviceItem({
  imgUrl,
  itemName,
  itemPrice,
  totalPrice,
}: TableTypes) {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6 flex gap-5">
        <div className="w-[100px] h-[75px] rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            width={200}
            height={100}
            src={imgUrl!}
            alt="Product image"
          />
        </div>

        <div className="w-full flex justify-between">
          <div className="space-y-2 w-full">
            <div className="flex justify-between w-full">
              <p className="">{itemName}</p>
              <p className="font-semibold">${itemPrice}</p>
            </div>

            <Quantity />

            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-400">
                  <span className="text-slate-600 dark:text-slate-500">
                    Total:
                  </span>{" "}
                  ${totalPrice}
                </p>
              </div>

              <div>
                <Button
                  variant={"ghost"}
                  className="text-red-500 hover:bg-red-200 dark:hover:bg-red-950 hover:text-red-600 dark:hover:text-red-600"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="p-4 sm:p-6 pt-0 flex justify-end items-center">
        
      </CardFooter> */}
    </Card>
  );
}

export default SmallDeviceItem;
