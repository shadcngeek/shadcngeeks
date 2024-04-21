import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import React from "react";

import { Button } from "@/components/ui/button";
import Logo from "./components/logo";
import { Separator } from "@/components/ui/separator";

function PaymentMethodVariantCard() {
  return (
    <Card>
      <CardHeader>
        <div className="bg-opacity-25 dark:bg-opacity-50 w-fit mx-auto bg-violet-500 p-3 rounded-full">
          <Logo />
        </div>
      </CardHeader>

      <div className="flex flex-wrap gap-2 w-fit justify-center pb-6 mx-auto">
        <Card>
          <CardHeader>
            <CardDescription>Free</CardDescription>
          </CardHeader>

          <CardContent className="p-3">
            <p className="text-2xl font-bold">$0/month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>Enterprise</CardDescription>
          </CardHeader>

          <CardContent className="p-3">
            <p className="text-2xl font-bold">$8/month</p>
          </CardContent>
        </Card>
      </div>

      <CardFooter>
        <Button className="w-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 hover:dark:bg-violet-600">
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PaymentMethodVariantCard;
