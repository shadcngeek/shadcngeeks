import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./components/user-auth-form";
import Download from "../../download/download";
import handleGetFolderPath from "@/actions/handleGetFolderPath";
import { Icons } from "./icons";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationComponent() {
  return (
    <div className="dark:bg-slate-950 h-dvh dark:text-white p-4 md:pt-10 md:px-20 lg:pt-20 lg:px-40">
      <div className="border rounded-lg dark:border-slate-800 overflow-hidden">
        <div className="md:hidden ">
          <Image
            src="/examples/authentication-light.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="block dark:hidden"
          />
          <Image
            src="/examples/authentication-dark.png"
            width={1280}
            height={843}
            alt="Authentication"
            className="hidden dark:block"
          />
        </div>
        <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <Link
            href="/examples/authentication"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            Login
          </Link>
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r dark:border-slate-800">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              Acme Inc
            </div>
            <div className="relative z-20 h-full flex justify-center items-center">
              <blockquote className="px-32 relative">
                <div className="left-24 -top-9 absolute -z-30">
                  <Icons.quote className="w-10 h-10  fill-gray-700 opacity-70" />
                </div>
                <p className="text-3xl">
                  This library has saved me countless hours of work and helped
                  me deliver stunning designs to my clients faster than ever
                  before.
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
