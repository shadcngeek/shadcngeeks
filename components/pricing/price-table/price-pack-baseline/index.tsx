import React from "react";

import { PricePro } from "./price-pro";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { enterprisePlan, freePlan, professionalPlan } from "./data";

function PricePackBaseline() {
  return (
    <Card>
      <CardHeader>
        <div className="md:w-[600px] lg:w-[700px] space-y-2 mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Choose your plan
          </p>
          <p className="text-slate-700 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            amet in accusantium rerum similique aspernatur alias repellat,
            dignissimos consectetur, possimus mollitia ullam.
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5  flex-wrap justify-center items-center">
        <PricePro {...freePlan} />
        <PricePro
          className="border-blue-600 dark:border-blue-600"
          btnClassName="text-white dark:text-white bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-700"
          {...enterprisePlan}
        />
        <PricePro {...professionalPlan} />
      </CardContent>
    </Card>
  );
}

export default PricePackBaseline;
