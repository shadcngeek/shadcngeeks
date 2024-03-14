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
        <div className="space-y-10">
          <Logo />

          <p className="text-left w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quis.
          </p>
        </div>

        <div className="text-left space-y-3">
          <p className="font-semibold">Links</p>
          <ul>
            <li className="py-3">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Get Started</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Documentation</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Services</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Blog</Link>
            </li>
          </ul>
        </div>

        <div className="text-left space-y-3">
          <p className="font-semibold">Product</p>
          <ul>
            <li className="py-3">
              <Link href={"#"}>Get Started</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Pricing</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Features</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Roadmap</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Certification</Link>
            </li>
          </ul>
        </div>

        <div className="text-left space-y-3">
          <p className="font-semibold">Legal</p>
          <ul>
            <li className="py-3">
              <Link href={"#"}>Terms & Condition</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>What we collect</Link>
            </li>
            <li className="py-3">
              <Link href={"#"}>Cookies</Link>
            </li>
          </ul>
        </div>

        <div className="text-left space-y-10 w-[400px]">
          <div className="space-y-5">
            <p className="font-semibold">Connect with us</p>
            <div className="flex gap-5 text-slate-700 dark:text-slate-400">
              <Facebook />
              <Twitter />
              <Instagram />
              <Twitch />
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-3">
              <p className="font-semibold">Subscribe to our News Letter</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                error inventore et, fugit alias ad vitae consequatur? Quo,
                consequatur repellat!
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <Input />
                <Button>Subscribe</Button>
              </div>
            </form>
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
