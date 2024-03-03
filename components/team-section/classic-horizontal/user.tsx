import React from "react";

import Link from "next/link";
import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent } from "@/components/ui/card";

import { UserTypes } from "./types";

function User({ fullName, imgSrc, role }: UserTypes) {
  return (
    <Card className="">
      <CardContent className="p-0 flex">
        <div className="mx-auto">
          <UserImage imgSrc={imgSrc} />
        </div>
        <div className="p-6 relative mt-3">
          <div className="space-y-4">
            <div className="space-y-2 text-left">
              <p className="dark:text-white">{fullName}</p>
              <p className="text-sm text-slate-400 dark:text-slate-700">
                {role}
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aspernatur, nulla voluptate neque tenetur quae quam voluptas
              quisquam facere quo consequuntur esse. Obcaecati, aliquam ipsum.
              Necessitatibus eligendi voluptas excepturi sunt!
            </p>
          </div>
          <div className="mb-auto absolute bottom-0 w-full left-0 p-6 flex items-center justify-end">
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
        </div>
      </CardContent>
    </Card>
  );
}

export default User;
