import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserAvatarTypes } from "../types";

function UserAvatar({ imgSrc }: UserAvatarTypes) {
  return (
    <Avatar className="w-20 h-20">
      <AvatarImage src={imgSrc} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
