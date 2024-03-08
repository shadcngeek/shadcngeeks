import { CheckCircle } from "lucide-react";

import { PriceProTypes } from "./type";

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
    { icon: <CheckCircle size={15} />, text: "Free video calls" },
    { icon: <CheckCircle size={15} />, text: "Unlimited collaborators" },
    { icon: <CheckCircle size={15} />, text: "Media Libraries" },
    { icon: <CheckCircle size={15} />, text: "Unlimited file storage" },
    { icon: <CheckCircle size={15} />, text: "Customizable templates" },
    { icon: <CheckCircle size={15} />, text: "Dedicated account manager" },
  ],
};
