import {
  KanbanSquare,
  CalendarDays,
  CircleDollarSign,
  LayoutDashboard,
  MessageSquareMore,
  Users,
  Folder,
  FileText,
  Image,
  HelpCircle,
  Mail,
  Settings,
  Moon,
  LogOut,
} from "lucide-react";
import { ListItemTypes } from "./types";

export const listItems: ListItemTypes[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: "All Users",
    icon: <Users />,
  },
  {
    title: "Projects",
    icon: <KanbanSquare />,
  },
  {
    isActive: true,
    title: "Conversations",
    icon: <MessageSquareMore />,
  },
  {
    title: "Schedule",
    icon: <CalendarDays />,
  },
  {
    title: "Payment Method",
    icon: <CircleDollarSign />,
  },
];

export const helpItems: ListItemTypes[] = [
  {
    title: "Need Help?",
    icon: <HelpCircle />,
  },
  {
    title: "Contact Us",
    icon: <Mail />,
  },
];

export const accountItems: ListItemTypes[] = [
  {
    title: "Account",
    icon: <Settings />,
  },
  {
    title: "Dark Mode",
    icon: <Moon />,
  },
  {
    title: "Log Out",
    icon: <LogOut />,
  },
];

export const files: ListItemTypes[] = [
  {
    title: "Exercises.zip",
    icon: <Folder className="text-red-500" />,
  },
  {
    title: "React-Handbook.pdf",
    icon: <FileText className="text-blue-500" />,
  },
  {
    title: "Cat-image.jpg",
    icon: <Image className="text-green-500" />,
  },
];

export const filesSent: ListItemTypes[] = [
  {
    title: "Algorithms.zip",
    icon: <Folder className="text-red-500" />,
  },
  {
    title: "JavaScript101.pdf",
    icon: <FileText className="text-blue-500" />,
  },
  {
    title: "The-Python-Handbook.pdf",
    icon: <FileText className="text-blue-500" />,
  },
];
