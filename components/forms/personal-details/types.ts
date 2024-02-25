export interface CountriesTypes {
  [key: string]: string;
}

export interface CountrySelectTypes {
  title: string;
  showIcon?: boolean;
  data: CountriesTypes[] | any;
}
