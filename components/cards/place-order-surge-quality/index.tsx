"use client";
import React from "react";

import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import Size from "./size";
import Color from "./color";
import Quality from "./quality";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PlaceOrderSurgeQuality() {
  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className="space-y-2">
          <p>Sprint Surge</p>
        </CardTitle>
        <div className="space-y-2">
          <div className="flex">
            <StarFilledIcon className="text-orange-500" />
            <StarFilledIcon className="text-orange-500" />
            <StarFilledIcon className="text-orange-500" />
            <StarFilledIcon className="text-orange-500" />
            <StarIcon className="w-4 h-4 text-orange-500" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-3xl font-light">$755.55</p>

        <div className="space-y-2">
          <p>Select Quality</p>
          <div className="space-x-2">
            <Button variant={"outline"}>Standard</Button>
            <Button>Premium</Button>
          </div>
        </div>

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
      </CardContent>
    </Card>
  );
}

export default PlaceOrderSurgeQuality;
