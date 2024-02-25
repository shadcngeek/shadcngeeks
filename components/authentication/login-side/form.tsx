import React from "react";
import Link from "next/link";

import GitHubIcon from "./github";
import GoogleIcon from "./google";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

function LoginForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card className="w-[400px] border-0">
        <CardHeader>
          <CardTitle className="">Sign in to your account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Username" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" />
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Link href={"#"} className="text-blue-500 text-sm">
              Forgot password?
            </Link>
          </div>
          <Button className="w-full">Login</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-t w-full dark:border-slate-800"></span>
            </div>
            <div className="relative flex justify-center uppercase text-sm dark:text-slate-500">
              <p className="text-center">Or continue with</p>
            </div>
          </div>
          <div className="w-full flex justify-between gap-3">
            <Button className="w-full" variant={"outline"}>
              <GoogleIcon />
              <span className="ml-2">Google</span>
            </Button>
            <Button className="w-full" variant={"outline"}>
              <GitHubIcon />
              <span className="ml-2">GitHub</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default LoginForm;
