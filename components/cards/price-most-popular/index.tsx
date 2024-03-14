import * as React from "react";

import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PriceMostPopular() {
  return (
    <Card className="md:w-[350px] relative">
      <div className="absolute px-[24px] top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm py-[12px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full">
        Most Popular
      </div>
      <CardHeader>
        <CardTitle className="text-base font-normal">Pro</CardTitle>
        <div className="space-y-2">
          <p>
            <span className="text-2xl font-bold">$0</span> per user / month
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero
            aliquid.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4 text-slate-700 dark:text-slate-400">
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p> 100 SMS</p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p> 1 Metrics</p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p>Free call </p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p>Unlimited team members</p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p>Assets library</p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p>Full time support</p>
          </li>
        </ul>
        <Button className="w-full mt-7">Upgrade now</Button>
      </CardContent>
    </Card>
  );
}
