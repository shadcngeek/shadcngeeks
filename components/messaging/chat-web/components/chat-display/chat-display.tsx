import * as React from "react";

import { useAtom } from "jotai";
import { Paperclip, Send, Smile } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";
import { currentChatsAtom } from "../../jotaiAtoms/atoms";

export function CardsChat() {
  const [messages, setMessages] = useAtom(currentChatsAtom);
  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  return (
    <ScrollArea className="p-5 h-[80vh] md:h-[82vh] rounded-md relative pb-14">
      {!messages && (
        <div className="h-full flex justify-center items-center">
          <p className="text-center text-lg">
            No messages yet. Start a conversation...
          </p>
        </div>
      )}
      <div className="space-y-4">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex w-max flex-col gap-2 rounded-lg px-3 py-2 text-sm",
              message.role === "user"
                ? "ml-auto bg-slate-950 dark:bg-white max-w-[75%] w-fit text-white dark:text-black"
                : "bg-slate-100 dark:bg-slate-800 max-w-[75%] w-fit"
            )}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="absolute p-4 md:px-10 py-2 left-0 bottom-0 w-full flex  items-center gap-3">
        <div className="flex gap-3">
          <Button variant={"outline"} className="w-10 h-10 p-0">
            <Smile className="text-slate-400" />
          </Button>
          <Button variant={"outline"} className="w-10 h-10 p-0">
            <Paperclip className="text-slate-400" />
          </Button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (inputLength === 0) return;
            setMessages([
              ...messages,
              {
                role: "user",
                content: input,
              },
            ]);
            setInput("");
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" size="icon" disabled={inputLength === 0}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </ScrollArea>
  );
}
