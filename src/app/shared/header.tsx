import Link from 'next/link';
import styles from './header.module.css';

import DonateIcon from './icons/donate.svg';
import EventsIcon from './icons/events.svg';
import TicketsIcon from './icons/tickets.svg';
import VisitIcon from './icons/visit.svg';
import PentagonIcon from './icons/pentagon.svg';

export function Header() {
  return (<header className={styles.header}>
    <Link href="/" style={{
      fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none',
      color: '#333'
    }}> MathsWorld </Link>
    <nav>
      <Link href="/visit">
        <PentagonIcon className={styles.pentagon}/>
        <VisitIcon className={styles.icon}/>
        Visit
      </Link>
      <Link href="/about">
        <PentagonIcon className={styles.pentagon}/>
        <EventsIcon className={styles.icon}/>
        About
      </Link>
      <Link href="/donate">
        <PentagonIcon className={styles.pentagon}/>
        <DonateIcon className={styles.icon}/>
        Donate
      </Link>
      <a href="/tickets" className={styles.tickets}>
        <PentagonIcon className={styles.pentagon}/>
        <TicketsIcon className={styles.icon}/>
        Tickets
      </a>
    </nav>
  </header>);
}
