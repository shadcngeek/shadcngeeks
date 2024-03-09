import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarTypes } from "./types";

export function UserAvatar({ avatarImg }: UserAvatarTypes) {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src={avatarImg} alt="avatar image" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
