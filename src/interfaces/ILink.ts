export interface ILink {
  isEnabled: boolean;
  label: string;
  subLinks?: ISubLink[];
  url: string;
}

export interface ISubLink {
  url: string;
  label: string;
}
