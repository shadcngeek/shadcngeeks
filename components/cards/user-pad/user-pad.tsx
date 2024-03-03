import React from "react";
import Link from "next/link";

import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

import UserImage from "./image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function UserPad() {
  return (
    <div>
      <Card className="w-[350px] ml-auto">
        <CardContent className="p-20">
          <div className="w-fit mx-auto">
            <UserImage
              imgSrc={
                "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-5 justify-center">
          <div className="space-y-2 text-left">
            <p className="text-center dark:text-white">Joseph Doglas</p>
            <p className="text-center text-sm text-slate-400 dark:text-slate-700">
              Backend Developer
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
    </div>
  );
}

export default UserPad;
