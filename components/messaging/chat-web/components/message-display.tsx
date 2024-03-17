import { useAtom } from "jotai";
import { format } from "date-fns";

import { Separator } from "@/components/ui/separator";
import { CardsChat } from "./chat-display/chat-display";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { currentUserAtom } from "../jotaiAtoms/atoms";

export function MessageDisplay() {
  const [user] = useAtom(currentUserAtom);

  return (
    <div className="flex h-[90vh] flex-col relative">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center p-4">
          <div className="flex items-center gap-4 text-sm">
            <Avatar>
              <AvatarImage alt={"mail.name"} />
              <AvatarFallback>
                {user?.fullName
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="font-semibold">{user?.fullName}</div>
          </div>
          {user?.date && (
            <div className="ml-auto text-xs text-muted-foreground">
              {(format as any)(new Date(), "PPpp")}
            </div>
          )}
        </div>
        <Separator />
        <CardsChat />
      </div>
    </div>
  );
}
