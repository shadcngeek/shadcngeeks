import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({ imgSrc }: { imgSrc: string }) {
  return (
    <Avatar className="size-5">
      <AvatarImage src={imgSrc} alt="avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
