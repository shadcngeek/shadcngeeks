import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarMore } from "./avatar-more";

export function Activities() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <AvatarMore
          title="Ahmad Rasheed"
          description="6:33 AM Thursday, April 20"
        />
        <AvatarMore
          title="Ali Mahmood"
          description="6:40 PM Friday, March 20"
        />
        <AvatarMore
          title="Vera Dojo"
          description="4:30 PM Monday, December 20"
        />
        <AvatarMore title="John Doe" description="2:35 PM Friday, March 25" />
      </CardContent>
    </Card>
  );
}
