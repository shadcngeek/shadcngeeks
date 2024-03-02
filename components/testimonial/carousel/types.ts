export interface QuoteTypes extends UserAvatarTypes {
  quote: string;
  fullName: string;
  jobTitle: string;
}

export interface UserAvatarTypes {
  imgSrc: string;
}

export interface IndicatorTypes {
  index: number;
  current: number;
}
