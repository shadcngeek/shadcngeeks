"use client";
import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitch, Twitter } from "lucide-react";

function FooterRich() {
  return (
    <Card>
      <CardContent className="p-6 flex gap-16 justify-center space-y-2 text-center dark:text-slate-400 text-slate-700">
        <div className="flex justify-between flex-wrap gap-10 md:gap-16">
          <div className="space-y-2 flex gap-3 sm:block">
            <div className="shrink-0">
              <Logo />
            </div>

            <p className="text-left md:w-[300px] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quis.
            </p>
          </div>

          <div className="flex gap-10 md:gap-16  flex-wrap">
            <div className="text-left space-y-3">
              <p className="font-semibold">Links</p>
              <ul>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Get Started
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Documentation
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Product</p>
              <ul>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Get Started
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Features
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Roadmap
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Certification
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Legal</p>
              <ul>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Terms & Condition
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    What we collect
                  </Link>
                </li>
                <li className="py-3 md:py-4">
                  <Link href={"#"} className="hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-10 md:w-[400px]">
              <div className="space-y-2">
                <p className="font-semibold">Connect with us</p>
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

              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="font-semibold">Subscribe to our News Letter</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque error inventore et, fugit alias ad vitae consequatur?
                    Quo, consequatur repellat!
                  </p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    <Input />
                    <Button>Subscribe</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <Separator className="mb-6" />
        <p className="text-left dark:text-slate-400 text-slate-700 text-sm">
          © 2024 FlexyGrid, Inc
        </p>
      </CardFooter>
    </Card>
  );
}

export default FooterRich;
