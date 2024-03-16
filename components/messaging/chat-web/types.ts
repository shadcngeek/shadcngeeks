import React from "react";

export interface UserListTypes {
  id?: number;
  date: string;
  fullName: string;
  lastMessage: string;
  profileImage?: string;
}

export interface NavTypes {
  isCollapsed?: any;
  isSmallDevice?: boolean;
}

export interface ChatsTypes {
  role: string;
  content: string;
}

export interface UsersTypes {
  [key: string]: {
    messages: {
      role: string;
      content: string;
    }[];
  };
}

export interface SmallDeviceTypes {
  children: React.ReactNode;
}

export interface ChatWebSlugTypes {
  slug: number;
}
