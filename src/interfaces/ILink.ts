export interface ILink {
  isEnabled: boolean;
  label: string;
  subLinks?: ISubLink[];
  url?: string;
}

export interface ISubLink {
  isEnabled: boolean;
  url: string;
  label: string;
}
