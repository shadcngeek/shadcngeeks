"use client";
import React from "react";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

import Logo from "./Logo";
import { SwitchMode } from "./switch";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function FooterRichDarkMode() {
  return (
    <Card>
      <CardContent className="p-6 flex gap-16 justify-center space-y-2 text-center dark:text-slate-400 text-slate-700">
        <div className="flex justify-between flex-wrap gap-10 md:gap-16">
          <div className="space-y-5 sm:w-[300px]">
            <div className="shrink-0">
              <Logo />
            </div>

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

          <SwitchMode />
        </div>
      </CardFooter>
    </Card>
  );
}

export default FooterRichDarkMode;
