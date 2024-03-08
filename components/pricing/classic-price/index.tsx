import React from "react";

import { PricePro } from "./price-pro";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { enterprisePlan, freePlan, professionalPlan } from "./data";

function ClassicPrice() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="md:w-[600px] lg:w-[700px] space-y-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Choose your plan
            </p>
            <p className="text-slate-700 dark:text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ut amet in accusantium rerum similique aspernatur alias repellat,
              dignissimos consectetur, possimus mollitia ullam.
            </p>
          </div>
        </CardHeader>
        <CardContent className="md:p-10 md:pt-0 flex flex-col md:flex-row flex-wrap gap-5 md:gap-10 justify-center items-center">
          <PricePro
            btnClassName="bg-transparent dark:bg-transparent text-slate-900 dark:text-white border border-rose-500 hover:bg-transparent dark:hover:bg-transparent"
            {...freePlan}
          />
          <PricePro
            className="border-rose-500 dark:border-rose-500"
            btnClassName="bg-rose-500 dark:bg-rose-500 text-white dark:text-white border border-rose-500 hover:bg-rose-600 dark:hover:bg-rose-600"
            {...enterprisePlan}
          />
          <PricePro
            btnClassName="bg-transparent dark:bg-transparent text-slate-900 dark:text-white border border-rose-500 hover:bg-transparent dark:hover:bg-transparent"
            {...professionalPlan}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ClassicPrice;
