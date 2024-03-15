import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { UserImageTypes } from "@/components/team-section/classic/types";

function UserImage({ className, imgSrc }: UserImageTypes) {
  return (
    <div
      className={cn(
        "w-28 h-28 md:w-48 md:h-48 relative rounded-full overflow-hidden",
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
