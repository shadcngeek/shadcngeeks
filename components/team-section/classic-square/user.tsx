import React from "react";

import Link from "next/link";
import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { UserTypes } from "./types";

function User({ fullName, imgSrc, role }: UserTypes) {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-0">
        <div className="mx-auto">
          <UserImage imgSrc={imgSrc} />
        </div>
        <div className="p-6 space-y-5 mt-3">
          <p className="text-slate-600 dark:text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            aspernatur, nulla voluptate neque tenetur quae quam voluptas
            quisquam facere quo consequuntur esse. Obcaecati, aliquam ipsum.
            Necessitatibus eligendi voluptas excepturi sunt!
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-start justify-between">
        <div className="space-y-2 text-left">
          <p className="dark:text-white">{fullName}</p>
          <p className="text-sm text-slate-700 dark:text-slate-400">{role}</p>
        </div>
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
