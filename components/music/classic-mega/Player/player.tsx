"use client";
import React from "react";

import {
  Play,
  Repeat,
  Volume,
  Shuffle,
  SkipBack,
  SkipForward,
  DownloadCloud,
} from "lucide-react";

import UserImage from "./image";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Player() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="w-fit mx-auto">
          <UserImage
            imgSrc={
              "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="flex justify-between">
          <div className="space-y-2 mt-3">
            <p className="dark:text-white">{"Phillip Doglas"}</p>
            <p className="text-sm text-slate-400 dark:text-slate-700">
              {"Frontend Developer"}
            </p>
          </div>

          <div className="flex ">
            <Button size={"icon"} variant={"ghost"}>
              <Volume className="w-4 h-4" />{" "}
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <DownloadCloud className="w-4 h-4" />{" "}
            </Button>
          </div>
        </div>
        <div className="mt-5">
          <div className="space-y-2">
            <Slider
              step={1}
              max={100}
              defaultValue={[50]}
              className={"w-full"}
            />

            <div className="flex justify-between">
              <p className="text-sm text-slate-700 dark:text-slate-400">
                03: 45
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                25: 02
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-5">
            <Button size={"icon"} variant={"ghost"}>
              <Shuffle className="w-4 h-4" />{" "}
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <SkipBack className="w-4 h-4" />{" "}
            </Button>
            <Button size={"icon"} className="rounded-full">
              <Play className="w-4 h-4" />{" "}
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <SkipForward className="w-4 h-4" />{" "}
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <Repeat className="w-4 h-4" />{" "}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Player;
