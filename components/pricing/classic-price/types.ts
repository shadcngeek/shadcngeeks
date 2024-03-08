import React from "react";

export interface PriceProTypes {
  plan: string;
  title: string;
  price: string;
  className?: string;
  buttonName: string;
  description: string;
  btnClassName?: string;
  titleClassName?: string;
  borderClassName?: string;
  headerClassName?: string;
  optionsClassName?: string;
  options: {
    text: string;
    icon: React.JSX.Element;
  }[];
}
