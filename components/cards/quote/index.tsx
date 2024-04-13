import React from "react";

import UserAvatar from "./avatar/user-avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Quote() {
  return (
    <Card className="max-w-[350px] xl:max-w-[400px] mx-auto">
      <CardHeader className="mx-auto w-fit flex flex-col items-center">
        <UserAvatar
          imgSrc={
            "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <p className="font-bold">David Jackson</p>
        <p className="text-sm text-slate-400">UI Designer</p>
      </CardHeader>
      <CardContent className="">
        <blockquote className="text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero
          incidunt commodi, quam officia repellendus dolor vitae pariatur
          mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
          tempore!
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default Quote;
