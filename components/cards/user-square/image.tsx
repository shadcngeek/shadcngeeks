import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { UserImageTypes } from "./types";

function UserImage({ className, imgSrc }: UserImageTypes) {
  return (
    <div
      className={cn(
        "w-full h-72 relative rounded-lg overflow-hidden",
        className
      )}
    >
      <Image
        width={200}
        height={200}
        src={imgSrc}
        alt="user image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default UserImage;
