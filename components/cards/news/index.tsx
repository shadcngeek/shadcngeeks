import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarMore } from "./avatar-more";

export function News() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>News</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col gap-3">
        <Card className="">
          <CardContent className="flex flex-col gap-5 p-6">
            <AvatarMore description="In the garden of life, habits are the seeds that bloom." />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="flex flex-col gap-5 p-6">
            <AvatarMore description="In the garden of life, habits are the seeds that bloom." />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="flex flex-col gap-5 p-6">
            <AvatarMore description="In the garden of life, habits are the seeds that bloom." />
          </CardContent>
        </Card>

        <Card className="">
          <CardContent className="flex flex-col gap-5 p-6">
            <AvatarMore description="In the garden of life, habits are the seeds that bloom." />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
