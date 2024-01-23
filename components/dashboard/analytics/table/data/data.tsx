import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { AnalyticCardNonExtendsTypes, StatisticListTypes } from "../../types";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

export const analyticsData: AnalyticCardNonExtendsTypes[] = [
  {
    description: "+20.1% from last month",
    icon: () => (
      <svg
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    subTitle: "$45,231.89",
    title: "Total Revenue",
  },
  {
    description: "+180.1% from last month",
    icon: () => (
      <svg
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    subTitle: "+2350",
    title: "Subscriptions",
  },
  {
    description: "+19% from last month",
    icon: () => (
      <svg
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-muted-foreground"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    subTitle: "+12,234",
    title: "Sales",
  },
  {
    description: "+201 since last hour",
    icon: () => (
      <svg
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    subTitle: "+573",
    title: "Active Now",
  },
];

export const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page N",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const analyticBarData = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thur",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sun",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export const tableChartData = [
  {
    name: "Page A",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page B",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page C",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page D",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page E",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page F",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page G",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page H",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page I",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page J",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page K",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page L",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page M",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page M",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page N",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page O",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page P",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page Q",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Page R",
    uv: Math.floor(Math.random() * 5000) + 1000,
    pv: Math.floor(Math.random() * 5000) + 1000,
    amt: Math.floor(Math.random() * 5000) + 1000,
  },
];

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
        stroke-width="2"
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
        stroke-width="2"
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

export const overViewData = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "September",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "October",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "November",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "December",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export const staticOverViewData = [
  {
    name: "January",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "February",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "March",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "April",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "June",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "July",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "August",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "September",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
