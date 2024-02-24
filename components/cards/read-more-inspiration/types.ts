export interface AnalyticCardNonExtendsTypes {
  icon?: any;
  title: string;
  subTitle: string;
  description: string;
  barContainerClassName?: string;
}

export interface AnalyticCardTypes extends AnalyticCardNonExtendsTypes {
  showContent?: boolean;
  cardClassName?: string;
}
