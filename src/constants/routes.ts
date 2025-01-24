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
      { isEnabled: true, label: RouteLabelsEnum.History, url: '/museum/history' },
      { isEnabled: true, label: RouteLabelsEnum.Restoration, url: '/museum/restoration-section' },
      { isEnabled: true, label: RouteLabelsEnum.Projects, url: '/museum/projects' },
      { isEnabled: true, label: RouteLabelsEnum.Library, url: '/museum/library' },
      { isEnabled: true, label: RouteLabelsEnum.Shop, url: '/museum/book-shop' },
    ],
    url: '/museum',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Exposition,
    subLinks: [
      { isEnabled: true, label: RouteLabelsEnum.Archaeology, url: '/exposition/archaeology' },
      { isEnabled: true, label: RouteLabelsEnum.Art, url: '/exposition/folk-applied-art' },
      { isEnabled: true, label: RouteLabelsEnum.Gallery, url: '/exposition/gallery' },
    ],
    url: '/exposition',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Visits,
    url: '/visits',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Friends,
    url: '/friends',
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Contacts,
    url: '/contacts',
  },
];
