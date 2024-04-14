"use client";

import { useEffect } from "react";

import { useAtom } from "jotai";

import { MessageDisplay } from "../components/message-display";

import { ChatWebSlugTypes } from "../types";
import { chats, messages } from "../data/db";
import { currentChatsAtom, currentUserAtom } from "../jotaiAtoms/atoms";

export function ChatWebSlug({ slug }: ChatWebSlugTypes) {
  const [, setTextMessages] = useAtom(currentChatsAtom);
  const [, setUser] = useAtom(currentUserAtom);

  useEffect(() => {
    const handleSetChats = () => {
      setUser(messages[slug as number]);
      setTextMessages(chats[`user${(slug as number) + 1}`]?.messages);
    };
    handleSetChats();
  }, [slug]);

  return (
    <div className="min-h-[100vh] dark:bg-slate-950 dark:text-white">
      <MessageDisplay />
    </div>
  );
}
