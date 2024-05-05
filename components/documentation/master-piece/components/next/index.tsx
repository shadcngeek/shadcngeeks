import * as React from "react";

import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Next() {
  return (
    <Link href={"#"}>
      <Card className="max-w-[350px]">
        <CardContent className="p-6">
          <div className="flex justify-end gap-5 items-center">
            <div className="flex items-center space-x-4 text-right ">
              <div>
                <p className="text-2xl font-bold">Tutorial</p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Lorem, ipsum dolor sit amet consect.
                </p>
              </div>
            </div>
            <ChevronRight size={24} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
