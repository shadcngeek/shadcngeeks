import * as React from "react";

import { cn } from "@/lib/utils";
import { CardTextType } from "../../types";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

function CardText({
  icon,
  title,
  className,
  description,
  cardClassName,
}: CardTextType) {
  return (
    <Card className={cn("max-w-[350px] transition", cardClassName)}>
      <CardHeader>
        <div className={cn("w-14 h-1w-14 border p-4 rounded-lg", className)}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="font-semibold">{title}</p>
          <p className="text-slate-700 dark:text-slate-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default CardText;
