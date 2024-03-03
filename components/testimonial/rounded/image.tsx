import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserImageTypes {
  className?: string;
  imgSrc: string;
}
function UserImage({ className, imgSrc }: UserImageTypes) {
  return (
    <div
      className={cn(
        "w-60 h-60 relative rounded-full overflow-hidden",
        className
      )}
    >
      <Image
        width={200}
        height={200}
        alt="user image"
        className="w-full h-full object-cover"
        src={imgSrc}
      />
    </div>
  );
}

export default UserImage;
