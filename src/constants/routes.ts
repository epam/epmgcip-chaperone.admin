import { RouteLabelsEnum } from '@/enums';
import { ILink } from '@/interfaces/ILink';

export const BASE_URL = '/';

export const EXHIBIT_URL = `/exhibit`;

export const APP_ROUTES: ILink[] = [
  {
    isEnabled: true,
    label: RouteLabelsEnum.Home,
    url: '/',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Museum,
    subLinks: [
      { isEnabled: true, label: 'History', url: '/history' },
      { isEnabled: true, label: 'Architecture', url: '/architecture' },
    ],
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Exposition,
    url: '/exposition',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.News,
    url: '/news',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Contacts,
    url: '/contacts',
  },
];
