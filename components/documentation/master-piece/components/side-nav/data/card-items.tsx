import { Component, Layers, Rocket, Slack } from "lucide-react";

export const cardItems = [
  {
    cardClassName: "hover:border-rose-500 dark:hover:border-rose-500",
    className: "border-rose-500 dark:border-rose-500 text-rose-500",
    icon: <Rocket />,
    title: "Get Started",
    description: `Life is a fascinating journey filled with twists and turns. Embrace
    each moment, learn from challenges, and savor the victories.`,
  },
  {
    cardClassName: "hover:border-green-500 dark:hover:border-green-500",
    className: "border-green-500 dark:border-green-500 text-green-500",
    icon: <Layers />,
    title: "Our Stacks",
    description: `Life is a fascinating journey filled with twists and turns. Embrace
    each moment, learn from challenges, and savor the victories.`,
  },
  {
    cardClassName: "hover:border-violet-500 dark:hover:border-violet-500",
    className: "border-violet-500 dark:border-violet-500 text-violet-500",
    icon: <Slack />,
    title: "Slack",
    description: `Life is a fascinating journey filled with twists and turns. Embrace
    each moment, learn from challenges, and savor the victories.`,
  },
  {
    cardClassName: "hover:border-cyan-500 dark:hover:border-cyan-500",
    className: "border-cyan-500 dark:border-cyan-500 text-cyan-500",
    icon: <Component />,
    title: "Components",
    description: `Life is a fascinating journey filled with twists and turns. Embrace
    each moment, learn from challenges, and savor the victories.`,
  },
];
