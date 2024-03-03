import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserAvatarTypes } from "../types";

function UserAvatar({ imgSrc }: UserAvatarTypes) {
  return (
    <Avatar className="w-72 h-72 rounded-lg">
      <AvatarImage src={imgSrc} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
