import Link from 'next/link';
import Image from 'next/image'
import styles from './header.module.css';

import DonateIcon from './icons/donate.svg';
import EventsIcon from './icons/events.svg';
import TicketsIcon from './icons/tickets.svg';
import VisitIcon from './icons/visit.svg';
import PentagonIcon from './icons/pentagon.svg';

export function Header() {
  return (<header className={styles.header}>
    <Link href="/"><Image src={`/images/logo.svg`} width={340} height={100} alt={`MathsWorld`}/></Link>
    <nav>
      <Link href="/visit">
        <PentagonIcon className={styles.pentagon}/>
        <VisitIcon className={styles.icon}/>
        Visit
      </Link>
      <Link href="/events">
        <PentagonIcon className={styles.pentagon}/>
        <EventsIcon className={styles.icon}/>
        Events
      </Link>
      <Link href="/support">
        <PentagonIcon className={styles.pentagon}/>
        <DonateIcon className={styles.icon}/>
        Support
      </Link>
      <a className={styles.tickets}>
        <PentagonIcon className={styles.pentagon}/>
        <TicketsIcon className={styles.icon}/>
        Tickets
      </a>
    </nav>
  </header>);
}
