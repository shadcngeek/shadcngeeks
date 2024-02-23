import React from "react";
import Image from "next/image";

import { MicOff, PhoneOff, Video } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MakeCallTypes } from "../types";

function MakeCall({ setIsCalling }: MakeCallTypes) {
  return (
    <div className="w-full border-l border-slate-100 dark:border-slate-900 h-full">
      <div className="w-full flex flex-col  items-center justify-center h-full">
        <div className="rounded-full overflow-hidden w-[200px] h-[200px]">
          <Image
            width={300}
            height={300}
            alt="user image"
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="text-center mt-5 space-y-2 text-slate-700 dark:text-slate-200">
          <p className="text-2xl font-bold">John Doe</p>
          <p>(234) 999-9999</p>
        </div>
        <p className="text-slate-700 mt-5">00:08</p>

        <div className="flex gap-5 mt-20 items-center">
          <Button
            size={"icon"}
            className="rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <MicOff />
          </Button>
          <Button
            size={"icon"}
            onClick={
              setIsCalling && (() => setIsCalling((isCalling) => !isCalling))
            }
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
        </div>
      </div>
    </div>
  );
}

export default MakeCall;
