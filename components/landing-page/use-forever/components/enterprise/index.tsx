import * as React from "react";

import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnterpriseTypes } from "../../types";

export function Enterprise({ enterpriseData, price, title }: EnterpriseTypes) {
  return (
    <div className="rounded-md">
      <Card className="w-[350px] h-fit bg-transparent dark:bg-transparent">
        <CardHeader>
          <CardTitle className="text-base font-normal">{title}</CardTitle>
          <p>
            <span className="text-2xl font-bold">{price}</span>/month
          </p>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-4 text-slate-700 dark:text-slate-400">
            {enterpriseData.map((data) => (
              <li key={data} className="flex items-center gap-3">
                <CheckCircle size={15} /> <p> {data}</p>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-7">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
