"use client";
import React, { useState } from "react";

import Header from "./header/header";
import ListItem from "./list-item/list-item";
import MakeCall from "./make-call/make-call";
import { Chats } from "./chat-display/chat-display";
import MessageList from "./message-list/message-list";
import UserDetails from "./user-details/user-details";
import MakeVideoCall from "./make-video-call/make-video-call";

import { messages } from "./db";
import { accountItems, helpItems, listItems } from "./data";

function ChatAlpha() {
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [isVideoCalling, setVideoCalling] = useState<boolean>(false);

  return (
    <div className="w-full p-5 dark:bg-slate-950 flex justify-center items-center">
      <div className="border dark:border-slate-800 w-full rounded-lg">
        <Header setIsCalling={setIsCalling} setIsVideo={setVideoCalling} />
        <div className="flex h-[85vh] overflow-scroll w-full">
          <div className="dark:bg-slate-950 w-[300px] shrink-0 mt-1">
            <p className="text-slate-500 pl-4 my-4">MENU</p>
            {listItems.map(({ icon, title, isActive }) => (
              <ListItem
                key={title}
                icon={icon}
                title={title}
                isActive={isActive}
              />
            ))}
            <div className="mt-10">
              <p className="text-slate-500 pl-4 my-4">CONTACT</p>
              {helpItems.map(({ icon, title }) => (
                <ListItem key={title} icon={icon} title={title} />
              ))}
            </div>

            <div className="mt-10">
              <p className="text-slate-500 pl-4 my-4">SETTINGS</p>
              {accountItems.map(({ icon, title }) => (
                <ListItem key={title} icon={icon} title={title} />
              ))}
            </div>
          </div>
          {isVideoCalling ? (
            <MakeVideoCall setIsVideo={setVideoCalling} />
          ) : isCalling ? (
            <MakeCall setIsCalling={setIsCalling} />
          ) : (
            <>
              <div className="h-full overflow-scroll shrink-0 w-[400px]">
                {messages.map(
                  (
                    { date, fullName, lastMessage, newMessages, profileImage },
                    index
                  ) => (
                    <MessageList
                      key={index}
                      date={date}
                      fullName={fullName}
                      newMessages={newMessages}
                      lastMessage={lastMessage}
                      profileImage={profileImage}
                    />
                  )
                )}
              </div>
              <div className="relative w-full max-w-[705px]">
                <Chats />
              </div>
            </>
          )}
          <div className="w-[400px] shrink-0">
            <UserDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatAlpha;
