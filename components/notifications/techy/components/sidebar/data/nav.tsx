import {
  Mail,
  Home,
  User,
  LogOut,
  Settings,
  BarChart4,
  HelpCircle,
  ScatterChart,
  MessageSquareMore,
  Bell,
} from "lucide-react";
import { FavoriteTypes } from "../types";

export const favorites: FavoriteTypes[] = [
  {
    label: "Dashboard",
    icon: <Home className="size-4" />,
  },
  {
    label: "Notifications",
    icon: <Bell className="size-4" />,
    isActive: true,
  },
  {
    label: "Reports",
    icon: <BarChart4 className="size-4" />,
  },
  {
    label: "Analytics",
    icon: <ScatterChart className="size-4" />,
  },
  {
    label: "Messages",
    icon: <Mail className="size-4" />,
  },
];

export const settings = [
  {
    label: "Settings",
    icon: <Settings className="size-4" />,
  },
  {
    label: "Help",
    icon: <HelpCircle className="size-4" />,
  },
  {
    label: "Contact",
    icon: <MessageSquareMore className="size-4" />,
  },
];

export const account = [
  {
    label: "Phillip Doglas",
    icon: <User className="size-4" />,
  },
  {
    label: "Log out",
    icon: <LogOut className="size-4" />,
  },
];
