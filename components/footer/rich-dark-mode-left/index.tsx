"use client";
import React from "react";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mode } from "./mode";

function FooterRichDarkModeLeft() {
  return (
    <Card>
      <CardContent className="p-6 flex gap-16 justify-center space-y-2 text-center dark:text-slate-400 text-slate-700">
        <div className="flex justify-between flex-wrap gap-10 md:gap-16">
          <div className="flex gap-10 md:gap-16  flex-wrap">
            <div className="text-left space-y-3">
              <p className="font-semibold">Links</p>
              <ul>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Documentation
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Blog
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    About Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Contact
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Services
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Partners
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    FAQ
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Support
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Product</p>
              <ul>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Documentation
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Blog
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    About Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Contact
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Services
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Legal</p>
              <ul>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Documentation
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Blog
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    About Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Contact
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Services
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Partners
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-left space-y-3">
              <p className="font-semibold">Links</p>
              <ul>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Home
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Documentation
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Blog
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    About Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Contact
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Services
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Partners
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    FAQ
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link className="hover:underline" href={"#"}>
                    Support
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

          <div className="w-fit">
            <Mode />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default FooterRichDarkModeLeft;
