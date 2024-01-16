import {
  Image,
  Compass,
  Monitor,
  HomeIcon,
  MessageSquareText,
} from "lucide-react";
import React from "react";

interface MenuTypes {
  name: string;
  icon: React.ReactNode;
}

const menu: MenuTypes[] = [
  {
    name: "Explore",
    icon: <Compass />,
  },
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Photos",
    icon: <Image />,
  },
  {
    name: "Message",
    icon: <MessageSquareText />,
  },
  {
    name: "Live",
    icon: <Monitor />,
  },
];

export default menu;
