import Link from "next/link";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import menu from "./data";

export function SocialMenu() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6  flex flex-col text-slate-700 dark:text-slate-400">
        {menu.map((data) => (
          <Link
            href={"#"}
            key={data.name}
            className="flex items-center gap-3 hover:bg-slate-50 p-3 rounded-md"
          >
            {data.icon}
            <p>{data.name}</p>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
