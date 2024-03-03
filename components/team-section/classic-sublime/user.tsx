import React from "react";

import Link from "next/link";
import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { UserTypes } from "./types";

function User({ fullName, imgSrc, role }: UserTypes) {
  return (
    <Card className="max-w-[350px]">
      <CardContent className="p-10 sm:p-4 md:p-14 lg:md:p-20">
        <div className="w-fit mx-auto">
          <UserImage imgSrc={imgSrc} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-5 justify-center">
        <div className="space-y-2 text-left">
          <p className="text-center dark:text-white">{fullName}</p>
          <p className="text-center text-sm text-slate-400 dark:text-slate-700">
            {role}
          </p>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="flex gap-3 justify-end">
            <Link href={"#"}>
              <Twitter className="hover:text-rose-600 transition dark:text-slate-700 text-slate-400 w-4 h-4" />
            </Link>
            <Link href={"#"}>
              <Instagram className="hover:text-rose-600 transition dark:text-slate-700 text-slate-400 w-4 h-4" />
            </Link>
            <Link href={"#"}>
              <Youtube className="hover:text-rose-600 transition dark:text-slate-700 text-slate-400 w-4 h-4" />
            </Link>
            <Link href={"#"}>
              <Twitch className="hover:text-rose-600 transition dark:text-slate-700 text-slate-400 w-4 h-4" />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default User;
