import * as React from "react";

import { CheckCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PricePro() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-base font-normal">Free</CardTitle>
        <p>
          <span className="text-2xl font-bold">$0</span>/month
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-[#71717a] dark:text-[#a1a1aa] mb-1">
            For Hobbyist
          </p>
          <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero
            aliquid.
          </p>
        </div>
        <Button className="w-full my-7">Get Started</Button>
        <p className="border-b mb-7"></p>
        <ul className="flex flex-col gap-4 text-[#71717a] dark:text-[#a1a1aa]">
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
            <X size={15} /> <p>Unlimited team members</p>
          </li>
          <li className="flex items-center gap-3">
            <X size={15} /> <p>Assets library</p>
          </li>
          <li className="flex items-center gap-3">
            <X size={15} /> <p>Full time support</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
