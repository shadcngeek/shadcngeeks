export interface UserAvatarTypes {
  imgSrc: string;
}

export interface UserTypes extends UserAvatarTypes {
  role: string;
  fullName: string;
}

export interface UserImageTypes {
  imgSrc: string;
  className?: string;
}
