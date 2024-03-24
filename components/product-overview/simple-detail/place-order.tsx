import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, LocateIcon, MapPin } from "lucide-react";
import React from "react";
import Quantity from "./quantity";

function PlaceOrder() {
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between items-center">
            <p>Ship to</p>
            <div className="flex items-center gap-1 font-normal text-base">
              <MapPin className="size-4" />
              <p>US</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p>Delivery</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Estimated delivery 20-30 days
            </p>
          </div>
          <Separator />

          <div>
            <p>Service</p>
            <p className="text-sm text-slate-700 dark:text-slate-400">
              Buyer protection
            </p>
          </div>
          <Separator />
          <Quantity />
          <Separator />
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full bg-violet-500 dark:bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-600 dark:text-white">
            Buy now
          </Button>
          <div className="flex gap-3 w-full">
            <Button
              variant={"outline"}
              className="w-full hover:bg-violet-100 dark:hover:bg-violet-500 border-violet-500 dark:border-violet-500 hover:border-violet-600 dark:hover:border-violet-600 dark:text-white"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              variant={"outline"}
              className="w-full hover:bg-violet-100 dark:hover:bg-violet-500 border-violet-500 dark:border-violet-500 hover:border-violet-600 dark:hover:border-violet-600 dark:text-white"
            >
              Whitelist
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default PlaceOrder;
