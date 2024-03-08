import { PriceProTypes } from "./types";

export const freePlan: PriceProTypes = {
  plan: "Free",
  price: "$0",
  title: "For Hobbyist",
  buttonName: "Get Started",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero similique.",
};

export const professionalPlan: PriceProTypes = {
  price: "$99.89",
  plan: "Professional",
  title: "For Professionals",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};

export const enterprisePlan: PriceProTypes = {
  price: "$299.99",
  plan: "Enterprise",
  title: "For Enterprises",
  buttonName: "Get Started",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
};
