import React from "react";

import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import UserAvatar from "./avatar/user-avatar";

import { UserTypes } from "./types";
import Link from "next/link";

function User({ fullName, jobTitle, quote, imgSrc }: UserTypes) {
  return (
    <Card className="w-full border-none rounded-none shadow-none">
      <CardHeader className="mx-auto w-fit flex flex-col items-center p-0">
        <UserAvatar imgSrc={imgSrc} />
        <p className="font-bold">{fullName}</p>
        <p className="text-sm text-slate-700 dark:text-slate-400">{jobTitle}</p>
      </CardHeader>
      <CardContent className="w-72 p-0 mx-auto pt-4">
        <blockquote className="text-center dark:text-slate-400 text-slate-700">
          {quote}
        </blockquote>
      </CardContent>
      <CardFooter className="mt-4 w-fit mx-auto">
        <div className="flex gap-3 justify-end">
          <Link href={"#"}>
            <Twitter className="hover:text-rose-600 transition dark:text-slate-400 text-slate-400 w-4 h-4" />
          </Link>
          <Link href={"#"}>
            <Instagram className="hover:text-rose-600 transition dark:text-slate-400 text-slate-400 w-4 h-4" />
          </Link>
          <Link href={"#"}>
            <Youtube className="hover:text-rose-600 transition dark:text-slate-400 text-slate-400 w-4 h-4" />
          </Link>
          <Link href={"#"}>
            <Twitch className="hover:text-rose-600 transition dark:text-slate-400 text-slate-400 w-4 h-4" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default User;
