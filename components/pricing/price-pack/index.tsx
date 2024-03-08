import React from "react";

import { PricePro } from "./price-pro";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { enterprisePlan, freePlan, professionalPlan } from "./data";

function PricePack() {
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
      <CardContent className="md:p-10 md:pt-0 flex flex-col md:flex-row gap-5 md:gap-0 flex-wrap md:flex-nowrap justify-center items-center">
        <PricePro className="md:rounded-r-none md:border-r-0" {...freePlan} />
        <PricePro
          headerClassName="text-white dark:text-white"
          className="bg-violet-700 dark:bg-violet-700"
          titleClassName="text-slate-200 dark:text-slate-200"
          optionsClassName="text-slate-300 dark:text-slate-300"
          borderClassName="dark:border-slate-400 border-slate-400"
          btnClassName="bg-white dark:bg-white text-slate-950 dark:text-slate-950 hover:bg-slate-200"
          {...enterprisePlan}
        />
        <PricePro
          className="md:rounded-l-none md:border-l-0"
          {...professionalPlan}
        />
      </CardContent>
    </Card>
  );
}

export default PricePack;
