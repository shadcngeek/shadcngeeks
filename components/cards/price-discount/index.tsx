import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Size from "./size";
import { Button } from "@/components/ui/button";

function PriceDiscount() {
  return (
    <Card>
      <CardHeader className=" flex justify-between">
        <CardTitle className="space-y-2">
          <p>Sprint Surge</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
      </CardContent>
    </Card>
  );
}

export default PriceDiscount;
