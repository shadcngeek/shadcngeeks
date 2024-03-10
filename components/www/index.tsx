import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Github } from "lucide-react";

import { PathTypes, pages } from "./data/pages";
import { Card, CardContent } from "@/components/ui/card";

function Homepage() {
  return (
    <div className="py-10 lg:py-20 dark:bg-slate-950">
      <div className="space-y-4 md:space-y-10 dark:text-white px-4">
        <div className="lg:w-[700px] text-center mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Free predesigned components for all{" "}
            <span className="text-rose-600">ShadcnGeeks </span>
          </h1>
          <h2 className="font-normal mt-3 md:mt-8 text-slate-400">
            ShadcnGeeks is an open-source project that provides you with free
            predesigned components you can use in your react projects with no
            limitation.
          </h2>
        </div>
        <div className="w-fit mx-auto flex justify-center items-center gap-3 flex-wrap">
          <Link
            href={"https://github.com/shadcngeek/shadcngeeks"}
            target="_blank"
            className="h-10 px-4 py-2 flex gap-2 items-center rounded-md bg-rose-600 dark:bg-rose-600 hover:dark:bg-rose-500 hover:bg-rose-500 dark:text-white"
          >
            <Github className="w-4 h-4" /> GitHub
          </Link>
        </div>
        <div className="text-sm text mx-auto w-fit">
          <p className="text-slate-400 text-sm text-center">
            This project is inspired by{" "}
            <Link
              target="_blank"
              className="text-blue-500"
              href={"https://ui.shadcn.com/"}
            >
              shadcn
            </Link>
            . You will also find some predesigned components from shadcn here.
          </p>
        </div>
      </div>
      <div className="flex max-w-[1100px] gap-3 mx-auto flex-wrap justify-center mt-10">
        {Object.keys(pages).map((page) => {
          return (
            <Link key={page} href={`/${page}`}>
              <Card className="w-fit hover:dark:border-rose-600 hover:border-rose-600 transition">
                <CardContent className="p-6 text-slate-500 hover:text-rose-600 transition">
                  <Image
                    alt="image"
                    width={300}
                    height={300}
                    src={pages[page as PathTypes].imageSrc}
                  />
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
