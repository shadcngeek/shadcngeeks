import { PathTypes } from "../../data/pages";

export interface WrapperTypes {
  parentFolder: PathTypes;
}

export interface WrapperContentTypes {
  path: string;
  imageSrc: string;
  parentFolder: string;
}
