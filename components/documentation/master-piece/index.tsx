import React from "react";
import Link from "next/link";

import { Next } from "./components/next";
import SideNav from "./components/side-nav";
import CardText from "./components/card-text";
import { Previous } from "./components/previous";
import { SideReference } from "./components/side-ref";
import { SheetDrawer } from "./components/sheet-drawer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { sideRef } from "./components/side-nav/data/nav";
import { cardItems } from "./components/side-nav/data/card-items";
import { SearchDoc } from "./components/search";

function MasterPieceDocs() {
  return (
    <>
      <div className="md:hidden p-4 border-b dark:border-slate-800 flex gap-3 items-center">
        <SheetDrawer />
        <SearchDoc />
      </div>
      <div className="flex max-w-[1500px] mx-auto">
        <SideNav />

        <div className="h-fit m-4 md:m-5 2xl:m-10 w-full">
          <div id="introduction">
            <div className="space-y-2 md:space-y-3 lg:space-y-5">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Introduction
              </p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia provident laboriosam ad culpa enim id dolorem
                distinctio debitis. Cum totam ab iure vero pariatur nobis esse
                similique cupiditate repellat nam!
              </p>
            </div>
          </div>

          <Card className="my-5 md:lg:my-8 lg:my-10">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                perferendis? Reprehenderit velit quidem quasi laboriosam
                assumenda accusantium esse doloribus ullam!
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2 w-fit">
            {cardItems.map(
              ({ cardClassName, description, icon, title, className }) => (
                <Link href={"#"} key={title}>
                  <CardText
                    {...{
                      icon,
                      title,
                      className,
                      description,
                      cardClassName,
                    }}
                  />
                </Link>
              )
            )}
          </div>

          <div id="why-didodocz">
            <div className="space-y-2 md:space-y-3 lg:space-y-5 mt-5 md:mt-8 lg:mt-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Why DidoDocz
              </p>
              <p className="text-slate-700 dark:text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                dolore nesciunt vel vitae excepturi corporis voluptas similique,
                veritatis cupiditate! Ut exercitationem expedita consectetur
                necessitatibus delectus velit tenetur perspiciatis est. Laborum
                quo, ipsum sapiente ad sunt earum minus! Provident, eum debitis!
              </p>
            </div>

            <div className="space-y-2 md:space-y-3 lg:space-y-5 mt-5">
              <div className="space-y-2">
                <p className="text-2xl font-bold">What we offer.</p>
                <p className="text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  tempora, dolor est accusamus possimus libero eum delectus
                  repudiandae veniam suscipit?
                </p>
              </div>

              <ul className="list-disc ml-10 space-y-2">
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-slate-700 dark:text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between mt-5 md:mt-8 lg:mt-10 flex-wrap gap-3">
            <Previous />
            <Next />
          </div>
        </div>

        <div className="shrink-0 hidden xl:block w-[300px] text-slate-900 dark:text-white sticky top-[96px] h-[calc(100vh-121px)]">
          <SideReference refs={sideRef} />
        </div>
      </div>
    </>
  );
}

export default MasterPieceDocs;
