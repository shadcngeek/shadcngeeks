export interface QuoteTypes extends UserAvatarTypes {
  quote: string;
  fullName: string;
}

export interface UserAvatarTypes {
  imgSrc: string;
}

export interface AvatarMoreTypes extends UserAvatarTypes {
  title: string;
}
