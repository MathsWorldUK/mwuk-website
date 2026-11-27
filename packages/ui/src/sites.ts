import type {Site} from '@repo/data/interfaces';

export type {Site};

export interface SiteConfig {
  /** Full name, used in page titles, e.g. "MathsWorld London". */
  name: string;
  /** Online ticket shop for this centre. */
  ticketsUrl: string;
  /** Banner image shown at the top of the Visit page. */
  visitBanner: string;
  /** Social media links shown in the footer. */
  socials: {title: string; url: string}[];
}

export const SITES: Record<Site, SiteConfig> = {
  london: {
    name: 'MathsWorld London',
    ticketsUrl: 'https://mathscity.digitickets.co.uk/tickets?branches.branchID=3679',
    visitBanner: '/images/banners/london1.jpg',
    socials: [
      {title: 'Instagram', url: 'https://www.instagram.com/mathsworlduk/'},
      {title: 'Facebook', url: 'https://www.facebook.com/mathsworlduk'},
      {title: 'Bluesky', url: 'https://bsky.app/profile/mathsworld.com'},
      {title: 'TikTok', url: 'https://www.tiktok.com/@mathsworlduk'},
    ],
  },
  leeds: {
    name: 'MathsCity Leeds',
    ticketsUrl: 'https://mathscity.digitickets.co.uk/tickets?branches.branchID=2854',
    visitBanner: '/images/banners/leeds1.jpg',
    socials: [
      {title: 'Instagram', url: 'https://www.instagram.com/mathscityleeds/'},
      {title: 'Facebook', url: 'https://www.facebook.com/MathsCityLeeds/'},
      {title: 'X', url: 'https://twitter.com/MathsCityLeeds'},
    ],
  },
};

export interface SiteLink {
  title: string;
  icon: 'visit' | 'events' | 'exhibits' | 'donate' | 'tickets';
  url: string;
  special?: boolean;
}

/** Navigation links for the header of a centre's website. */
export function siteLinks(site: Site): SiteLink[] {
  const tickets: SiteLink = {
    title: 'Tickets',
    icon: 'tickets',
    url: SITES[site].ticketsUrl,
    special: true,
  };

  if (site === 'leeds') {
    // Events in DatoCMS have no location yet, so Leeds doesn't show them.
    return [
      {title: 'Visit', icon: 'visit', url: '/visit'},
      {title: 'Exhibits', icon: 'exhibits', url: '/exhibits'},
      tickets,
    ];
  }

  return [
    {title: 'Visit', icon: 'visit', url: '/visit'},
    {title: 'Events', icon: 'events', url: '/events'},
    {title: 'Exhibits', icon: 'exhibits', url: '/exhibits'},
    {title: 'Support', icon: 'donate', url: '/support'},
    tickets,
  ];
}
