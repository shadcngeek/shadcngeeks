import * as React from "react";

import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Price() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-base font-normal">Enterprise</CardTitle>
        <p>
          <span className="text-2xl font-bold">$500</span>/month
        </p>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4 text-[#71717a] dark:text-[#a1a1aa]">
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p> 90,000 SMS</p>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle size={15} /> <p> 10 Metrics</p>
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
        <Button className="w-full mt-7">Get Started</Button>
      </CardContent>
    </Card>
  );
}
