"use client";
import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitch, Twitter } from "lucide-react";

function FooterRichLeftSubscribe() {
  return (
    <Card>
      <CardContent className="p-6 flex gap-16 justify-center space-y-2 text-center dark:text-slate-400 text-slate-700">
        <div className="flex justify-between flex-wrap gap-10 md:gap-16">
          <div className="space-y-2 sm:w-[400px]">
            <div className="shrink-0">
              <Logo />
            </div>

            <div className="space-y-5 text-left">
              <div className="space-y-2">
                <p className="font-semibold">Subscribe to our News Letter</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  error inventore et, fugit alias ad vitae consequatur? Quo,
                  consequatur repellat!
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                  <div className="relative w-full">
                    <Input
                      className="sm:w-[300px]"
                      placeholder="YourEmail@gmail.com"
                    />
                    <div className="absolute top-[50%] translate-y-[-50%] right-[2px]">
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="dark:bg-slate-900 bg-slate-200"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex gap-10 md:gap-16  flex-wrap">
            <div className="text-left space-y-3">
              <p className="font-semibold">Links</p>
              <ul>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Get Started
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Documentation
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Product</p>
              <ul>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Get Started
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Pricing
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Features
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Roadmap
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Certification
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Legal</p>
              <ul>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Terms & Condition
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    What we collect
                  </Link>
                </li>
                <li className="py-2">
                  <Link className="hover:underline" href={"#"}>
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <Separator className="mb-6" />
        <div className="flex justify-between items-center w-full">
          <p className="text-left dark:text-slate-400 text-slate-700 text-sm">
            © 2024 FlexyGrid, Inc
          </p>

          <div className="flex gap-5 text-slate-500 dark:text-slate-400">
            <Link href={"#"}>
              <Facebook />
            </Link>
            <Link href={"#"}>
              <Twitter />
            </Link>
            <Link href={"#"}>
              <Instagram />
            </Link>
            <Link href={"#"}>
              <Twitch />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default FooterRichLeftSubscribe;
