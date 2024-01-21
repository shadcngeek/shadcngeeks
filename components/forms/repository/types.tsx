export interface SelectOwnerTypes {
  style?: boolean;
  items: string[];
  defaultValue: string;
}

export interface FrameworksType {
  value: string;
  label: string;
}

export interface GitIgnoreTypes {
  placeHolder: string;
  items: FrameworksType[];
}
