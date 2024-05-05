import React from "react";
import Link from "next/link";

import SideNav from "./side-nav";
import Icons from "./side-nav/data/icons";
import { sideRef } from "./side-nav/data/nav";
import CodePreview from "./components/code-preview";
import { Card, CardContent } from "@/components/ui/card";

import { SideReference } from "./components/side-ref";
import { SheetDrawer } from "./components/sheet-drawer";
import { allSimpleDocs } from "@/.contentlayer/generated";
import CodeStringPreview from "./components/code-string-preview";

function SimpleDocs() {
  return (
    <>
      <div className="block md:hidden p-4 border-b dark:border-slate-800">
        <SheetDrawer />
      </div>
      <div className="flex max-w-[1500px] mx-auto">
        <SideNav />

        <div className="h-fit m-4 md:m-5 2xl:m-10 w-full overflow-x-scroll">
          <div id="frameworks" className="flex flex-wrap gap-3">
            {Object.keys(Icons).map((icon: any, index) => (
              <Link key={index} href={"#"}>
                <Card className="w-fit border hover:border-rose-600 hover:dark:border-rose-600 transition h-fit mt-0">
                  <CardContent className="p-6 text-slate-500 hover:text-rose-600 transition">
                    {(Icons as any)[icon]()}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div id="installation" className="mt-5 lg:mt-10 space-y-5">
            <div className="space-y-2 md:space-y-5">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Installation
              </p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae a dolorem id vitae perspiciatis doloribus molestias,
                eaque illo dignissimos quia enim assumenda dicta, cupiditate
                quibusdam hic alias nisi consectetur itaque.
              </p>
            </div>
            <CodeStringPreview codeString="npx shadcn-ui@latest init" />
          </div>

          <div id="quick-demo" className="mt-5 lg:mt-10 space-y-5">
            <div className="space-y-2 md:space-y-5">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Quick Demo
              </p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae a dolorem id vitae perspiciatis doloribus molestias,
                eaque illo dignissimos quia enim assumenda dicta, cupiditate
                quibusdam hic alias nisi consectetur itaque.
              </p>
            </div>

            <CodePreview snippet={allSimpleDocs[0]} />
          </div>
        </div>

        <div className="shrink-0 hidden xl:block w-[300px] text-slate-900 dark:text-white sticky top-[96px] h-[calc(100vh-121px)]">
          <SideReference refs={sideRef} />
        </div>
      </div>
    </>
  );
}

export default SimpleDocs;
