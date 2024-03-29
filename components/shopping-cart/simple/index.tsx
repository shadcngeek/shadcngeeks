import React from "react";
import Table from "./components/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ShoppingCartSimple() {
  return (
    <div className="p-10">
      <div>
        <h2 className="dark:text-white text-2xl font-bold">Shopping Cart</h2>
      </div>

      <div className="py-10">
        <Table />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order summary</CardTitle>
        </CardHeader>
        <CardContent>
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

        <CardFooter>
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
