import { Check, CheckCircle, X } from "lucide-react";

import { PriceProTypes } from "./types";

export const freePlan: PriceProTypes = {
  plan: "Free",
  price: "$0",
  title: "For Hobbyist",
  buttonName: "Get Started",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero similique.",
  options: [
    { icon: <Check size={15} />, text: "Onboarding" },
    { icon: <Check size={15} />, text: "Asset Libraries" },
    { icon: <Check size={15} />, text: "Specialized reports" },
    { icon: <Check size={15} />, text: "Tailor-made reports" },
  ],
};

export const professionalPlan: PriceProTypes = {
  plan: "Professional",
  price: "$99.89",
  title: "For Professionals",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  options: [
    { icon: <Check size={15} />, text: "Expert analytics" },
    { icon: <Check size={15} />, text: "Tailor-made reports" },
    { icon: <Check size={15} />, text: "Unlimited individuals" },
    { icon: <Check size={15} />, text: "Asset libraries" },
    { icon: <Check size={15} />, text: "24/7 help" },
    { icon: <Check size={15} />, text: "Onboarding" },
    { icon: <Check size={15} />, text: "Free SMS" },
  ],
};

export const enterprisePlan: PriceProTypes = {
  plan: "Enterprise",
  price: "$299.99",
  title: "For Enterprises",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  options: [
    { icon: <Check size={15} />, text: "Specialized reports" },
    { icon: <Check size={15} />, text: "Expert analytics" },
    { icon: <Check size={15} />, text: "Tailor-made reports" },
    { icon: <Check size={15} />, text: "Unlimited individuals" },
    { icon: <Check size={15} />, text: "Asset libraries" },
    { icon: <Check size={15} />, text: "24/7 help" },
    { icon: <Check size={15} />, text: "Quality Training" },
    { icon: <Check size={15} />, text: "Priority support" },
    { icon: <Check size={15} />, text: "Onboarding" },
    { icon: <Check size={15} />, text: "Free call" },
    { icon: <Check size={15} />, text: "Free SMS" },
  ],
};
