import React from "react";

export interface CollapsibleDisplayTypes {
  children: React.ReactNode;
  title: string;
}

export interface NavTypes {
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}
