import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import FileTabs from "./tabs/tabs";

function UserDetails() {
  return (
    <div className="w-full border-l dark:border-slate-800 h-full">
      <div className="flex flex-col gap-3 items-center py-5">
        <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
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
        <div className="text-center dark:text-white">
          <p className="text-2xl">Muhammad Rasheed</p>
          <p className="text-sm text-slate-400 dark:text-slate-600">
            Frontend Engineer
          </p>
        </div>
      </div>

      <Separator className="my-10" />
      <div className="px-4">
        <FileTabs />
      </div>
      <Separator className="my-10" />

      <div className="dark:text-white">
        <p className="text-2xl ml-4 mb-2">Images</p>
        <div className="flex gap-3 justify-center px-5">
          <div>
            <Image
              width={200}
              height={200}
              alt="user image"
              className="w-full h-full"
              src={
                "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              alt="user image"
              className="w-full h-full"
              src={
                "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
          <div>
            <Image
              width={200}
              height={200}
              alt="user image"
              className="w-full h-full"
              src={
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
