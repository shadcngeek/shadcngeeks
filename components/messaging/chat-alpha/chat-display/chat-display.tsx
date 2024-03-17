"use client";
import * as React from "react";

import { Mic, Paperclip, Send, Smile } from "lucide-react";

import FileDisplay from "./file-display";
import AudioDisplay from "./audio-display";
import PhotosDisplay from "./photos-display";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { chats } from "../db";
import { cn } from "@/lib/utils";

export function Chats() {
  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  return (
    <>
      <div className="p-5 h-[85vh] md:h-[80vh] overflow-y-scroll">
        {!chats && (
          <div className="h-full flex justify-center items-center">
            <p className="text-center text-lg">
              No messages yet. Start a conversation...
            </p>
          </div>
        )}
        <div className="space-y-4">
          {chats.map(({ content, role, type }, index) =>
            type ? (
              type === "images" ? (
                <div
                  key={index}
                  className={cn(
                    "flex max-w-[50%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    role === "user"
                      ? "ml-auto rounded-br-none bg-blue-500 dark:bg-blue-500 text-white dark:text-slate-950"
                      : "bg-slate-100 rounded-bl-none dark:text-slate-100 dark:bg-slate-900"
                  )}
                >
                  <PhotosDisplay content={content} />
                </div>
              ) : type === "audio" ? (
                <AudioDisplay key={index} />
              ) : (
                <div
                  key={index}
                  className={cn(
                    "flex w-fit max-w-[50%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                    role === "user"
                      ? "ml-auto rounded-br-none bg-blue-500 dark:bg-blue-500 text-white dark:text-slate-950"
                      : "bg-slate-100 rounded-bl-none dark:text-slate-100 dark:bg-slate-900"
                  )}
                >
                  <FileDisplay />
                </div>
              )
            ) : (
              <div
                key={index}
                className={cn(
                  "flex w-fit max-w-[50%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  role === "user"
                    ? "ml-auto rounded-br-none bg-blue-500 dark:bg-blue-500 text-white dark:text-slate-950"
                    : "bg-slate-100 rounded-bl-none dark:text-slate-100 dark:bg-slate-900"
                )}
              >
                {content}
              </div>
            )
          )}
        </div>
        <div className="absolute p-4 md:px-10 md:py-2 left-0 bottom-0 w-full flex  items-center gap-3">
          <div className="flex gap-3">
            <Button variant={"outline"} className="w-10 h-10 p-0">
              <Smile className="text-slate-400" />
            </Button>
            <Button variant={"outline"} className="w-10 h-10 p-0">
              <Paperclip className="text-slate-400" />
            </Button>
          </div>

          <form className="flex w-full items-center space-x-2">
            <Input
              id="message"
              value={input}
              className="flex-1"
              autoComplete="off"
              placeholder="Type your message..."
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              size="icon"
              type="submit"
              disabled={inputLength === 0}
              className="disabled:bg-blue-400 bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-600"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <div className="shrink-0">
            <Button
              size="icon"
              type="submit"
              className="disabled:bg-blue-400 bg-blue-500 dark:bg-blue-500 hover:bg-blue-600 hover:dark:bg-blue-600"
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
