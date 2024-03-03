import React from "react";

import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import UserAvatar from "./avatar/user-avatar";

function QuoteStar() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="mx-auto w-fit flex flex-col items-center">
        <UserAvatar
          imgSrc={
            "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
          }
        />
        <p className="font-bold">{"Muhammad Haroon"}</p>
        <p className="text-sm text-slate-400">{"Backend Developer"}</p>
      </CardHeader>
      <CardContent className="">
        <blockquote className="text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero
          incidunt commodi, quam officia repellendus dolor vitae pariatur
          mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
          tempore!
        </blockquote>
      </CardContent>
      <CardFooter className="w-fit mx-auto">
        {Array.from({ length: 3 }).map((_, index) => (
          <StarFilledIcon key={index} className="text-rose-600" />
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <StarIcon key={index} className="text-rose-600 w-4 h-4" />
        ))}
      </CardFooter>
    </Card>
  );
}

export default QuoteStar;
