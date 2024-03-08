import { Row } from "@tanstack/react-table";

export interface TableTypes {
  index?: string;
  title?: string;
  hobbyist: any;
  professional: any;
  enterprise: any;
  subRows?: TableTypes[];
}

export interface ColumnIndexTypes {
  row: Row<TableTypes>;
}

export interface HeaderPricingCardTypes {
  price: string;
  subtitle: string;
  className?: string;
  description: string;
  priceClassName?: string;
  buttonClassName?: string;
}
