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
      { label: 'History', url: 'history' },
      { label: 'Architecture', url: 'architecture' },
    ],
    url: 'museum',
  },
  {
    isEnabled: true,
    label: 'Exposition',
    url: 'exposition',
  },
  {
    isEnabled: true,
    label: 'News',
    url: 'news',
  },
];
