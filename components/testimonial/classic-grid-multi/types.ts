export interface QuoteTypes extends UserAvatarTypes {
  stars: number;
  quote: string;
  fullName: string;
  jobTitle: string;
  className?: string;
  textClassName?: string;
}

export interface UserAvatarTypes {
  imgSrc: string;
}
