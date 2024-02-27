import React from "react";

export interface CountriesTypes {
  [key: string]: string;
}

export interface CountrySelectTypes {
  title: string;
  showIcon?: boolean;
  data: CountriesTypes[] | any;
}

export interface ListItemTypes {
  title: string;
  isActive?: boolean;
  icon: React.JSX.Element;
}
