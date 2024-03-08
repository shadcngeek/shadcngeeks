import { CheckCircle, X } from "lucide-react";
import { PriceProTypes } from "./types";

export const freePlan: PriceProTypes = {
  plan: "Free",
  price: "$0",
  title: "For Hobbyist",
  buttonName: "Get Started",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero similique.",
  options: [
    { icon: <CheckCircle size={15} />, text: "100 SMS" },
    { icon: <CheckCircle size={15} />, text: "1 Metrics" },
    { icon: <CheckCircle size={15} />, text: "Free call" },
    { icon: <X size={15} />, text: "Unlimited team members" },
    { icon: <X size={15} />, text: "Asset Libraries" },
    { icon: <X size={15} />, text: "Full time support" },
  ],
};

export const professionalPlan: PriceProTypes = {
  plan: "Professional",
  price: "$99.89",
  title: "For Professionals",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  options: [
    { icon: <CheckCircle size={15} />, text: "900 SMS" },
    { icon: <CheckCircle size={15} />, text: "40 Metrics" },
    { icon: <CheckCircle size={15} />, text: "Free call" },
    { icon: <CheckCircle size={15} />, text: "Unlimited team members" },
    { icon: <CheckCircle size={15} />, text: "Asset Libraries" },
    { icon: <CheckCircle size={15} />, text: "Full time support" },
  ],
};

export const enterprisePlan: PriceProTypes = {
  plan: "Enterprise",
  price: "$299.99",
  title: "For Enterprises",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  options: [
    { icon: <CheckCircle size={15} />, text: "Frees SMS" },
    { icon: <CheckCircle size={15} />, text: "Unlimited Metrics" },
    { icon: <CheckCircle size={15} />, text: "Free call" },
    { icon: <CheckCircle size={15} />, text: "Asset Libraries" },
    { icon: <CheckCircle size={15} />, text: "Full time support" },
    { icon: <CheckCircle size={15} />, text: "Unlimited team members" },
  ],
};
