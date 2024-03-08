import { Check, X } from "lucide-react";
import { TableTypes } from "./types";

export const pricing: TableTypes[] = [
  {
    index: "1",
    title: "Reporting",
    hobbyist: "",
    professional: "",
    enterprise: "",
    subRows: [
      {
        title: "Specialized reports",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <X className="h-4 w-5 text-red-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Tailor-made reports",
        hobbyist: <Check className="h-4 w-5 text-blue-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Essential reports",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <X className="h-4 w-5 text-red-500" />,
      },
      {
        title: "Expert analytics",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
    ],
  },

  {
    index: "2",
    title: "Features",
    hobbyist: "",
    professional: "",
    enterprise: "",
    subRows: [
      {
        title: "Free call",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <X className="h-4 w-5 text-red-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Free SMS",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Team members",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: (
          <span className="text-slate-700 dark:text-slate-400 text-sm">
            100 individuals
          </span>
        ),
        enterprise: (
          <span className="text-slate-700 dark:text-slate-400 text-sm">
            Unlimited individuals
          </span>
        ),
      },
      {
        title: "Asset Libraries",
        hobbyist: <Check className="h-4 w-5 text-blue-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
    ],
  },
  {
    index: "3",
    title: "Support",
    hobbyist: "",
    professional: "",
    enterprise: "",
    subRows: [
      {
        title: "24/7 help",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Quarterly training",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <X className="h-4 w-5 text-red-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Priority support",
        hobbyist: <X className="h-4 w-5 text-red-500" />,
        professional: <X className="h-4 w-5 text-red-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
      {
        title: "Onboarding",
        hobbyist: <Check className="h-4 w-5 text-blue-500" />,
        professional: <Check className="h-4 w-5 text-blue-500" />,
        enterprise: <Check className="h-4 w-5 text-blue-500" />,
      },
    ],
  },
];
