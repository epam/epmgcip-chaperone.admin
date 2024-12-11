import { ILink } from '@/interfaces/ILink';

export const Routes: ILink[] = [
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
