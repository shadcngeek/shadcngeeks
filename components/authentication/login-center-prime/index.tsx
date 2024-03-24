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
import GoogleIcon from "./google";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function LoginCenterPrime() {
  return (
    <div className="flex h-dvh items-center justify-center dark:bg-slate-950">
      <form onSubmit={(e) => e.preventDefault()}>
        <Card className="w-[350px] sm:w-[400px] border-none">
          <CardHeader>
            <CardTitle className="text-center">
              Sign in to your account
              <p className="text-sm mt-2 font-normal text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant={"outline"}>
              <GoogleIcon />
              <span className="ml-2">Continue with Google</span>
            </Button>
            <Button className="w-full" variant={"outline"}>
              <GitHubLogoIcon className="w-5 h-5" />
              <span className="ml-2">Continue with Github</span>
            </Button>
            <p className="text-center text-sm">Or</p>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Password" />
            </div>
            <Button className="w-full">Log in</Button>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <p className="text-sm  text-slate-700 dark:text-slate-500">
              Not a member yet?{" "}
              <Link href={"#"} className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>

            <Link href={"#"} className="text-blue-500 hover:underline text-sm">
              Forgot password?
            </Link>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default LoginCenterPrime;
