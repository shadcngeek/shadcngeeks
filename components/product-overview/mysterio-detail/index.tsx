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

function MysterioDetail() {
  return (
    <Card className="border-none">
      <CardContent className="p-0 flex flex-col lg:flex-row gap-3">
        <div className="flex-[50%] rounded-lg overflow-hidden h-[520px]">
          <Image
            width={2070}
            alt="Product"
            height={1500}
            className="w-full h-full object-fill"
            src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="flex-[50%] p-3 md:p-6 space-y-4">
          <div className="space-y-2">
            <div className=" flex justify-between">
              <h3 className="text-2xl font-semibold">Indoor Sofa</h3>
              <p className="text-2xl">$500.99</p>
            </div>
            <div className="flex">
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarFilledIcon className="text-orange-500" />
              <StarIcon className="w-4 h-4 text-orange-500" />
            </div>
          </div>

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

          <div>
            <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white w-full">
              Add to cart
            </Button>
          </div>

          <Separator />

          <ProductList />
        </div>
      </CardContent>
    </Card>
  );
}

export default MysterioDetail;
