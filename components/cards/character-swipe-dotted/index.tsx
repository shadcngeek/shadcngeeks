import * as React from "react";
import { Swipe } from "./swipe";

interface DataTypes {
  src: string;
  title: string;
  buttonText: string;
  description: string;
}

const data: DataTypes[] = [
  {
    title: "Code Space",
    src: "/images/boy2.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    buttonText: "Next",
  },
  {
    title: "JavaScript",
    src: "/images/boy3.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    buttonText: "Next",
  },
  {
    title: "Python",
    src: "/images/boy1.png",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    buttonText: "Let's Go",
  },
];

export function CharacterSwipeDotted() {
  return <Swipe data={data} />;
}
