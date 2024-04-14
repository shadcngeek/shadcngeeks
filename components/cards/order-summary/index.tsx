import React from "react";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function OrderSummary() {
  return (
    <Card className="w-full lg:w-[600px] h-fit">
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
  );
}

export default OrderSummary;
