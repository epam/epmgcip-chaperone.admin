import { RouteLabelsValues } from '@/enums';

export interface ILink {
  isEnabled: boolean;
  label: RouteLabelsValues;
  subLinks?: ISubLink[];
  url?: string;
}

export interface ISubLink {
  isEnabled: boolean;
  url: string;
  label: RouteLabelsValues;
}
