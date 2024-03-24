import React from "react";

import UserImage from "./image";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { PeopleTypes } from "../types";

function UserSimple({
  fullName,
  img,
  jobTitle,
  className,
  imgClassName,
}: PeopleTypes) {
  return (
    <Card className={cn("w-fit h-fit", className)}>
      <CardContent className="p-6">
        <div className="w-fit mx-auto">
          <UserImage imgSrc={img} className={imgClassName} />
        </div>
        <div className="space-y-2 mt-3">
          <p className="dark:text-white">{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">
            {jobTitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserSimple;
