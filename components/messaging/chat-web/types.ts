export interface UserListTypes {
  id?: number;
  date: string;
  fullName: string;
  lastMessage: string;
}

export interface NavTypes {
  isCollapsed: any;
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
