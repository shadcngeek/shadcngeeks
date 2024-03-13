import {
  Mail,
  Home,
  User,
  LogOut,
  Settings,
  Bookmark,
  BarChart4,
  HelpCircle,
  ScatterChart,
  MessageSquareMore,
} from "lucide-react";
import { FavoriteTypes } from "../types";

export const favorites: FavoriteTypes[] = [
  {
    label: "Dashboard",
    icon: <Home />,
  },
  {
    label: "Bookmarks",
    icon: <Bookmark />,
    isActive: true,
  },
  {
    label: "Reports",
    icon: <BarChart4 />,
  },
  {
    label: "Analytics",
    icon: <ScatterChart />,
  },
  {
    label: "Messages",
    icon: <Mail />,
  },
];

export const settings = [
  {
    label: "Settings",
    icon: <Settings />,
  },
  {
    label: "Help",
    icon: <HelpCircle />,
  },
  {
    label: "Contact",
    icon: <MessageSquareMore />,
  },
];

export const account = [
  {
    label: "Phillip Doglas",
    icon: <User />,
  },
  {
    label: "Log out",
    icon: <LogOut />,
  },
];
