import React from "react";

export interface ListItemTypes {
  title: string;
  icon: React.ReactNode;
  isActive?: React.ReactNode;
}

export interface UsersTypes {
  [key: string]: {
    messages: {
      role: string;
      content: string;
    }[];
  };
}

export interface MessageTypes {
  date: string;
  fullName: string;
  lastMessage: string;
  newMessages?: string;
  profileImage?: string;
}

export interface MakeCallTypes {
  setIsVideo?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCalling?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ChatsTypes {
  role: string;
  content: string;
  type?: "images" | "pdf" | "audio";
}

export interface DisplayTypes {
  content: string;
}
