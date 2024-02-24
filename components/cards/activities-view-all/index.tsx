import * as React from "react";

import { AvatarMore } from "./avatar-more";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ActivitiesViewAll() {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <AvatarMore title="Ahmad Rasheed" description="Frontend Developer" />
          <Button variant={"outline"}>View</Button>
        </div>
        <div className="flex justify-between items-center">
          <AvatarMore title="Ali Mahmood" description="Frontend Developer" />
          <Button variant={"outline"}>View</Button>
        </div>
        <div className="flex justify-between items-center">
          <AvatarMore title="Vera Dojo" description="UI Designer" />
          <Button variant={"outline"}>View</Button>
        </div>
        <div className="flex justify-between items-center">
          <AvatarMore title="John Doe" description="Backend Developer" />
          <Button variant={"outline"}>View</Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View All</Button>
      </CardFooter>
    </Card>
  );
}
