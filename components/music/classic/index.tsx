import React from "react";
import Image from "next/image";

import Header from "./header";
import PlayList from "./list";
import Player from "./Player/player";
import UserSimple from "./user-simple/user";
import AudioPlayList from "./playlist/playlist";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { people } from "./data";

function Classico() {
  return (
    <div className="dark:bg-slate-950 p-4 md:p-10 min-h-[100vh]">
      <div className="sm:hidden dark:text-white">
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="block dark:hidden"
          src="/images/www/music-classic.png"
        />
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="hidden dark:block"
          src="/images/www/music-classic-dark.png"
        />

        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Please, switch
          to a large screen device.
        </p>
      </div>
      <ScrollArea className="hidden sm:block mx-auto border dark:border-slate-800 p-4 rounded-lg">
        <Header />

        <Separator className="my-5" />

        <div className="flex gap-5">
          <div className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Recent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {people.slice(0, 5).map((data, index) => (
                    <UserSimple
                      className="w-full"
                      imgClassName={"w-48 h-48"}
                      key={index}
                      {...data}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-5">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <p>Most popular</p>
                    <Button variant={"link"}>See all</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="shrink-0 w-[500px] space-y-5">
                    {people.slice(0, 9).map((data, index) => (
                      <PlayList key={index} {...data} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Trending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {people.slice(0, 6).map((data, index) => (
                      <UserSimple
                        className="w-full"
                        imgClassName={"w-44 h-44"}
                        key={index}
                        {...data}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-[400px] h-fit space-y-5">
            <Player />

            <p className="text-slate-700 dark:text-slate-400">Genre</p>
            <div className="gap-3 flex flex-wrap">
              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                While
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                Loop
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                Code
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                JavaScript
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                Shadcn
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                React
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                Frontend
              </Button>

              <Button
                variant={"outline"}
                size={"sm"}
                className="dark:text-slate-400"
              >
                Backend
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <p>Playlist</p>
                  <Button variant={"link"}>See all</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {people.slice(0, 7).map((data, index) => (
                    <AudioPlayList key={index} {...data} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default Classico;
