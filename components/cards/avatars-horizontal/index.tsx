import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarSingleTypes {
  fullName: string;
}

function AvatarSingle({ fullName }: AvatarSingleTypes) {
  return (
    <div className="flex flex-col  items-center gap-2 text-slate-700 dark:text-slate-400">
      <Avatar className="w-14 h-14 border">
        <AvatarImage src="/avatars/02.png" />
        <AvatarFallback className="text-pink-500">OM</AvatarFallback>
      </Avatar>
      <div>
        <p>{fullName}</p>
      </div>
    </div>
  );
}

export function AvatarsHorizontal() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-7 items-start flex-wrap justify-center">
          <AvatarSingle fullName="John Doe" />
          <AvatarSingle fullName="John Doe" />
          <AvatarSingle fullName="John Doe" />
          <AvatarSingle fullName="John Doe" />
        </div>
      </CardContent>
    </Card>
  );
}
