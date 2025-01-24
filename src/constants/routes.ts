import { RouteLabelsEnum } from '@/enums';
import { ILink } from '@/interfaces/ILink';

import { SLUGS } from './slugs';

export const BASE_URL = '/';

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
      { isEnabled: true, label: RouteLabelsEnum.History, url: `/${SLUGS.museum}/${SLUGS.history}` },
      {
        isEnabled: true,
        label: RouteLabelsEnum.Restoration,
        url: `/${SLUGS.museum}/restoration-section`,
      },
      {
        isEnabled: true,
        label: RouteLabelsEnum.Projects,
        url: `/${SLUGS.museum}/${SLUGS.projects}`,
      },
      { isEnabled: true, label: RouteLabelsEnum.Library, url: `/${SLUGS.museum}/${SLUGS.library}` },
      { isEnabled: true, label: RouteLabelsEnum.Shop, url: `/${SLUGS.museum}/${SLUGS.shop}` },
    ],
    url: `/${SLUGS.museum}`,
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Exposition,
    subLinks: [
      {
        isEnabled: true,
        label: RouteLabelsEnum.Archaeology,
        url: `/${SLUGS.exposition}/${SLUGS.archaeology}`,
      },
      {
        isEnabled: true,
        label: RouteLabelsEnum.Art,
        url: `/${SLUGS.exposition}/${SLUGS.art}`,
      },
      {
        isEnabled: true,
        label: RouteLabelsEnum.Gallery,
        url: `/${SLUGS.exposition}/${SLUGS.gallery}`,
      },
    ],
    url: `/${SLUGS.exposition}`,
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Visits,
    url: `/${SLUGS.visits}`,
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Friends,
    url: `/${SLUGS.friends}`,
  },
  {
    isEnabled: true,
    label: RouteLabelsEnum.Contacts,
    url: `/${SLUGS.contacts}`,
  },
];
