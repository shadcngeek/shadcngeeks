import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserAvatarTypes } from "../types";

function UserAvatar({ imgSrc }: UserAvatarTypes) {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src={imgSrc} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
