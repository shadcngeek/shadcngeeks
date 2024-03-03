import React from "react";
import Link from "next/link";

import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function UserHigh() {
  return (
    <div>
      <Card className="w-[350px] ml-auto">
        <CardContent className="p-6">
          <div className="w-fit mx-auto">
            <UserImage
              imgSrc={
                "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
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
            <p className="dark:text-white">Ali Mahmoud</p>
            <p className="text-sm text-slate-400 dark:text-slate-700">
              UI Designer
            </p>
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
    </div>
  );
}

export default UserHigh;
