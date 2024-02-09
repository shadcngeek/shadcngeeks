import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PathTypes, pages } from "./data/pages";
import { Card, CardContent } from "@/components/ui/card";

function Homepage() {
  return (
    <div className="pt-20 dark:bg-slate-950">
      <div className="space-y-4 md:space-y-10 dark:text-white px-4">
        <div className="lg:w-[700px] text-center mx-auto">
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
            The most complete{" "}
            <span className="text-rose-600">Authenticator </span>
            for your projects.
          </p>
          <p className="mt-3 md:mt-8 text-slate-400">
            AuthPickle is an open-source project that provides you with the most
            secure authentication system for your product.
          </p>
        </div>
        <div className="w-fit mx-auto flex justify-center items-center gap-3 flex-wrap">
          <Button className="bg-rose-600 dark:bg-rose-600 hover:dark:bg-rose-500 hover:bg-rose-500 dark:text-white">
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="border-rose-600 dark:border-rose-600 dark:text-white hover:dark:text-rose-600 hover:text-rose-600 hover:bg-transparent dark:hover:bg-transparent"
          >
            Documentation
          </Button>
        </div>
        <div className="text-sm text mx-auto w-fit">
          <p className="text-slate-400 text-sm">
            {" "}
            Works seamlessly with 20+ frameworks
          </p>
        </div>
      </div>
      <div className="flex max-w-[1100px] gap-3 mx-auto flex-wrap justify-center mt-10">
        {Object.keys(pages).map((page) => {
          return (
            <Link key={page} href={`/${page}`}>
              <Card className="w-fit hover:dark:border-rose-600 hover:border-rose-600 transition">
                <CardContent className="p-6 text-slate-500 hover:text-rose-600 transition">
                  <Image alt="" width={300} height={300} src={pages[page as PathTypes].imageSrc}/>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
