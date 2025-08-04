import Link from 'next/link';
import Image from 'next/image'
import styles from './header.module.css';

import DonateIcon from './icons/donate.svg';
import EventsIcon from './icons/events.svg';
import TicketsIcon from './icons/tickets.svg';
import VisitIcon from './icons/visit.svg';

export function Header() {
  return (<header className={styles.header}>
    <Link href="/"><Image src={`/images/logo.svg`} width={340} height={100} alt={`MathsWorld`}/></Link>
    <nav>
      <Link href="/visit">
        <VisitIcon className={styles.icon}/>
        <span>Visit</span>
      </Link>
      <Link href="/events">
        <EventsIcon className={styles.icon}/>
        <span>Events</span>
      </Link>
      <Link href="/support">
        <DonateIcon className={styles.icon}/>
        <span>Support</span>
      </Link>
      <a className={styles.tickets} style={{cursor: 'not-allowed'}}>
        <TicketsIcon className={styles.icon}/>
        <span>Tickets</span>
      </a>
    </nav>
  </header>);
}
