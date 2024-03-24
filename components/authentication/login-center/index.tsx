"use client";
import React from "react";
import Link from "next/link";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginCenterMain() {
  return (
    <div className="flex h-dvh items-center justify-center dark:bg-slate-950">
      <form onSubmit={(e) => e.preventDefault()}>
        <Card className="w-[350px] sm:w-[400px]">
          <CardHeader>
            <CardTitle className="text-center">
              Sign in to your account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>

            <div className="space-y-2">
              <div className="w-full flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href={"#"}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" placeholder="Password" />
            </div>
            <Button className="w-full">Log in</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm  text-slate-700 dark:text-slate-500">
              Not a member yet?{" "}
              <Link href={"#"} className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default LoginCenterMain;
