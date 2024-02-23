"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage
        alt="@user"
        src="https://images.unsplash.com/photo-1517588632672-9758d6acba04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJsYWNrJTIwYm95JTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default AvatarUser;
