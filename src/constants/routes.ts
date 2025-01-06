import { ILink } from '@/interfaces/ILink';

export const BASE_URL = '/';

export const EXHIBIT_URL = `/exhibit`;

export const APP_ROUTES: ILink[] = [
  {
    isEnabled: true,
    label: 'Home',
    url: '/',
  },
  {
    isEnabled: true,
    label: 'Museum',
    subLinks: [
      { isEnabled: true, label: 'History', url: '/history' },
      { isEnabled: true, label: 'Architecture', url: '/architecture' },
    ],
  },
  {
    isEnabled: true,
    label: 'Exposition',
    url: '/exposition',
  },
  {
    isEnabled: true,
    label: 'News',
    url: '/news',
  },
];
