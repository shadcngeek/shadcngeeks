import React from "react";

export interface CollapsibleDisplayTypes {
  children: React.ReactNode;
  title: string;
}
export interface FavoriteTypes {
  label: string;
  icon: JSX.Element;
  isActive?: boolean;
}
