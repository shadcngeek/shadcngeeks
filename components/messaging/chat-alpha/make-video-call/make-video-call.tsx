import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Expand,
  MicOff,
  PhoneOff,
  Settings,
  Tv2,
  Video,
  ZapOff,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { MakeCallTypes } from "../types";

function MakeVideoCall({ setIsVideo }: MakeCallTypes) {
  return (
    <div className="w-full max-w-[1100px] border-l border-slate-100 dark:border-slate-900 h-full">
      <Card className="m-5 lg:h-[600px] overflow-hidden">
        <CardContent className="p-0">
          <Image
            width={2070}
            height={1080}
            alt="user image"
            className="w-full h-full object-cover rounded-lg"
            src={
              "https://images.unsplash.com/photo-1655961929028-dd144f89de6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </CardContent>
      </Card>
      <div className="flex justify-center mx-5 gap-5">
        <Card className="h-fit lg:h-[150px] w-[300px] overflow-hidden">
          <CardContent className="p-0">
            <Image
              width={2070}
              height={1080}
              alt="user image"
              className="w-full h-full object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </CardContent>
        </Card>

        <Card className="h-fit lg:h-[150px] w-[300px] overflow-hidden">
          <CardContent className="p-0">
            <Image
              width={2070}
              height={1080}
              alt="user image"
              className="w-full h-full object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1633379336519-828c306c7694?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </CardContent>
        </Card>

        <Card className="h-fit lg:h-[150px] w-[300px] overflow-hidden">
          <CardContent className="p-0">
            <Image
              width={2070}
              height={1080}
              alt="user image"
              className="w-full h-full object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1594289980854-d820df55390b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzbWlsbGluZyUyMGJveXxlbnwwfHwwfHx8MA%3D%3D"
              }
            />
          </CardContent>
        </Card>

        <Card className="h-fit lg:h-[150px] w-[300px] overflow-hidden">
          <CardContent className="p-0">
            <Image
              width={2070}
              height={1080}
              alt="user image"
              className="w-full h-full object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1588376483402-acc965d4ac21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxzbWlsbGluZyUyMGJveXxlbnwwfHwwfHx8MA%3D%3D"
              }
            />
          </CardContent>
        </Card>
      </div>

      <div className="hidden sm:flex gap-5 my-8 items-center justify-center">
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <ZapOff />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <Tv2 />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <MicOff />
        </Button>
        <Button
          size={"icon"}
          onClick={setIsVideo && (() => setIsVideo((isCalling) => !isCalling))}
          className="rounded-full h-14 w-14 dark:text-slate-100 bg-red-500 dark:bg-red-500 hover:bg-red-600 hover:dark:bg-red-700"
        >
          <PhoneOff />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <Video />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <Settings />
        </Button>
        <Button
          size={"icon"}
          className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
        >
          <Expand />
        </Button>
      </div>

      <div className="flex sm:hidden flex-col gap-5 my-5 items-center">
        <Button
          size={"icon"}
          onClick={setIsVideo && (() => setIsVideo((isCalling) => !isCalling))}
          className="rounded-full h-14 w-14 dark:text-slate-100 bg-red-500 dark:bg-red-500 hover:bg-red-600 hover:dark:bg-red-700"
        >
          <PhoneOff />
        </Button>

        <div className="flex gap-5 items-center flex-wrap justify-center">
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <ZapOff />
          </Button>
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <Tv2 />
          </Button>
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <MicOff />
          </Button>

          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <Video />
          </Button>
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <Settings />
          </Button>
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <Expand />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MakeVideoCall;
