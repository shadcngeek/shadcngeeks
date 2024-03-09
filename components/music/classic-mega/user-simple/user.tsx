import React from "react";

import { cn } from "@/lib/utils";

import UserImage from "./image";
import { Card, CardContent } from "@/components/ui/card";

import { PeopleTypes } from "../types";

function UserSimple({
  img,
  fullName,
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
          <p className="text-sm text-slate-400 dark:text-slate-700">
            {jobTitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserSimple;
