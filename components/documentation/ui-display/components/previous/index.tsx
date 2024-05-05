import * as React from "react";

import Link from "next/link";

import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Previous() {
  return (
    <Link href={"#"}>
      <Card className="max-w-[350px]">
        <CardContent className="p-6">
          <div className="flex justify-start gap-5 items-center">
            <ChevronLeft size={24} />
            <div className="flex items-center space-x-4 text-left ">
              <div>
                <p className="text-2xl font-bold">Tailwind</p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Lorem, ipsum dolor sit amet consect.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
