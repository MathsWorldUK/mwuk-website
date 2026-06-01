import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

import DonateIcon from './icons/donate.svg';
import EventsIcon from './icons/events.svg';
import TicketsIcon from './icons/tickets.svg';
import VisitIcon from './icons/visit.svg';
import ExhibitsIcon from './icons/exhibits.svg';
import GalleryIcon from './icons/gallery.svg';
import AboutIcon from './icons/about.svg';

const ICONS = {
  visit: <VisitIcon />,
  events: <EventsIcon />,
  tickets: <TicketsIcon />,
  exhibits: <ExhibitsIcon />,
  donate: <DonateIcon />,
  gallery: <GalleryIcon />,
  about: <AboutIcon />,
};

interface HeaderProps {
  logo: string;
  logoAlt: string;
  links: {url: string; title: string; icon: keyof typeof ICONS; special?: boolean}[];
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={props.logo} width={340} height={100} alt={props.logoAlt} />
      </Link>
      <nav>
        {props.links.map((link, i) => (
          <Link href={link.url} key={i} className={link.special ? styles.tickets : ''} target={link.special ? '_blank' : undefined}>
            {ICONS[link.icon]}
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
