export interface DocsType {
  label: string;
  isActive?: boolean;
}

export type CodePreviewType = {
  children: React.ReactNode;
};

export type CardTextType = {
  title: string;
  className: string;
  description: string;
  cardClassName: string;
  icon: React.JSX.Element;
};
