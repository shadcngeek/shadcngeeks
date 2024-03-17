"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { AnalyticCardTypes } from "../types";

function ReadMoreCard({
  icon,
  title,
  subTitle,
  description,
  cardClassName,
  showContent = true,
}: AnalyticCardTypes) {
  return (
    <Card className={cn("", cardClassName)}>
      <CardContent className={"p-6 flex gap-4"}>
        <div className="shrink sm:w-[60%]">
          <p>{title}</p>
          <div className="space-y-2">
            {showContent && (
              <>
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">
                    <p>{subTitle}</p>
                  </div>
                  <Image
                    className="block sm:hidden border w-16 h-16 p-4 dark:border-slate-800 rounded-lg "
                    src={"/images/rocket.png"}
                    alt="image of rocket"
                    width={128}
                    height={128}
                  />
                </div>
              </>
            )}
            <p className=" text-slate-700 dark:text-slate-400">{description}</p>
          </div>
        </div>
        <div className="hidden w-[40%] sm:flex justify-end items-start md:items-center border-slate-200 dark:border-slate-800 rounded-lg">
          <Image
            className="border p-5 dark:border-slate-800 rounded-lg "
            src={"/images/rocket.png"}
            alt="image of rocket"
            width={128}
            height={128}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default ReadMoreCard;
