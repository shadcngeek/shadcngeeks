import { StatisticListTypes } from "./types";

export const detailedStatisticData: StatisticListTypes[] = [
  {
    icon: () => (
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#71717a] dark:text-[#a1a1aa]-2"
      >
        <path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z" />
        <path d="M6 12V2h12v10" />
        <path d="M14 2v4" />
        <path d="M10 2v2" />
      </svg>
    ),
    amount: "$32,567.90",
    subTitle: "ShadcnGeeks, Shadcn",
    title: "UI tools",
  },
  {
    icon: () => (
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#71717a] dark:text-[#a1a1aa]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
      </svg>
    ),
    amount: "$52,597.99",
    subTitle: "React, NextJS, Angular",
    title: "Frameworks",
  },
  {
    icon: () => (
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#71717a] dark:text-[#a1a1aa]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
    amount: "$32,567.90",
    subTitle: "Figma, Canva, XD",
    title: "Design tools",
  },
  {
    icon: () => (
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#71717a] dark:text-[#a1a1aa]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    amount: "$89,703.99",
    subTitle: "NodeJS, Django",
    title: "Backend",
  },
];
