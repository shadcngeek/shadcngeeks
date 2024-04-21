import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import React from "react";

import Logo from "./components/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaymentMethod } from "./components/payment-method";
import { ExpiryDatePicker } from "./components/date-picker";

function PaymentMethodVariant() {
  return (
    <Card>
      <CardHeader>
        <div className="bg-opacity-25 dark:bg-opacity-50 w-fit mx-auto bg-slate-500 p-3 rounded-full">
          <Logo />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2 pb-4">
          <p className="text-2xl font-bold">Payment details</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Add payment method to activate plan
          </p>
        </div>

        <PaymentMethod />

        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Name on card
          </p>
          <Input />
        </div>

        <div className="space-y-2">
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Card number
          </p>
          <Input type="number" />
        </div>

        <div className="flex justify-between gap-3">
          <div className="space-y-2 w-full">
            <p className="text-sm text-slate-700 dark:text-slate-400">Expiry</p>
            <ExpiryDatePicker />
          </div>

          <div className="space-y-2 w-full">
            <p className="text-sm text-slate-700 dark:text-slate-400">CVV</p>
            <Input type="password" maxLength={3} />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Checkout</Button>
      </CardFooter>
    </Card>
  );
}

export default PaymentMethodVariant;
