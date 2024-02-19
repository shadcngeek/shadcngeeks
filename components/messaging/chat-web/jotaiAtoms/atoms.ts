import { atom } from "jotai";
import { chats, messages } from "../data/db";

export const dbMessagesAtom = atom(messages);
export const currentUserAtom = atom(messages[0]);
export const currentChatsAtom = atom(chats["user1"].messages);
