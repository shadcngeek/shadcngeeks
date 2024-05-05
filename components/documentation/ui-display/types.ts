import { PaymentMethod, PriceUI, Snippet } from "@/.contentlayer/generated";

export interface DocsType {
  label: string;
  isActive?: boolean;
}

export type CodePreviewType = {
  snippet: Snippet | PriceUI | PaymentMethod;
};

export type CardTextType = {
  title: string;
  className: string;
  description: string;
  cardClassName: string;
  icon: React.JSX.Element;
};
