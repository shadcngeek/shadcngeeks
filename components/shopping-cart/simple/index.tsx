import React from "react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Table from "./components/table";
import { Button } from "@/components/ui/button";
import SmallDeviceItem from "./components/small-device-Item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { tableData } from "./data/table-data";

function ShoppingCartSimple() {
  return (
    <div className="p-4 md:p-8 lg:p-10">
      <div>
        <h2 className="dark:text-white text-2xl font-bold">Shopping Cart</h2>
      </div>

      <div className="py-5 md:py-8 lg:py-10">
        <ScrollArea className="hidden md:block">
          <Table />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex flex-col gap-5 md:hidden">
          {tableData.map(
            ({ itemPrice, quantity, totalPrice, item, itemName }) => (
              <SmallDeviceItem
                quantity={quantity}
                key={item?.itemName}
                itemPrice={itemPrice}
                imgUrl={item?.imgUrl}
                totalPrice={totalPrice}
                itemName={item?.itemName}
              />
            )
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order summary</CardTitle>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pt-0">
          <div className="text-slate-700 dark:text-slate-400 flex justify-between p-4 border-b dark:border-slate-900">
            <p>Subtotal</p>
            <p className="font-semibold">$500.899</p>
          </div>

          <div className="text-slate-700 dark:text-slate-400 flex justify-between p-4 border-b dark:border-slate-900">
            <p>Shopping</p>
            <p className="font-semibold">$3.99</p>
          </div>

          <div className="text-slate-700 dark:text-slate-400 flex justify-between p-4 border-b dark:border-slate-900">
            <p>Tax</p>
            <p className="font-semibold">$0</p>
          </div>

          <div className="text-slate-700 dark:text-slate-400 flex justify-between p-4 border-b dark:border-slate-900">
            <p className="font-bold">Order total</p>
            <p className="font-bold">$504.889</p>
          </div>
        </CardContent>

        <CardFooter className="px-4 sm:px-6 pt-0">
          <div className="ml-auto w-fit">
            <Button className="bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white">
              Checkout
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ShoppingCartSimple;
