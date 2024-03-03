import React from "react";

import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { UserTypes } from "./types";
import Link from "next/link";

function User({ fullName, imgSrc, role }: UserTypes) {
  return (
    <Card className="w-[350px]">
      <CardContent className="p-6">
        <div className="w-fit mx-auto">
          <UserImage imgSrc={imgSrc} />
        </div>
        <div className="space-y-5 text-center mt-3">
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
          <p className="text-sm text-slate-400 dark:text-slate-700">{role}</p>
        </div>
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
      </CardFooter>
    </Card>
  );
}

export default User;
