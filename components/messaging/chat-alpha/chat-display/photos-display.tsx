import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import { DisplayTypes } from "../types";

function PhotosDisplay({ content }: DisplayTypes) {
  return (
    <>
      <p className="mb-2">{content}</p>
      <div className="flex gap-3 justify-center">
        <Card className="w-[100px] h-[65px]">
          <CardContent className="w-full h-full p-0 rounded-md overflow-hidden">
            <Image
              width={150}
              height={65}
              alt="user image"
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </CardContent>
        </Card>
        <Card className="w-[100px] h-[65px]">
          <CardContent className="w-full h-full p-0 rounded-md overflow-hidden">
            <Image
              width={150}
              height={65}
              alt="user image"
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </CardContent>
        </Card>
        <Card className="w-[100px] h-[65px]">
          <CardContent className="w-full h-full p-0 rounded-md overflow-hidden">
            <Image
              width={150}
              height={65}
              alt="user image"
              className="w-full h-full object-cover"
              src={
                "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default PhotosDisplay;
