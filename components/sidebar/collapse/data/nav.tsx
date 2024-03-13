import {
  BarChart4,
  Bookmark,
  HelpCircle,
  Home,
  LogOut,
  Mail,
  MessageSquareMore,
  ScatterChart,
  Settings,
  User,
} from "lucide-react";
import { FavoriteTypes } from "../types";

export const favorites: FavoriteTypes[] = [
  {
    isActive: true,
    icon: <Home />,
    label: "Dashboard",
  },
  {
    label: "Bookmarks",
    icon: <Bookmark />,
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
