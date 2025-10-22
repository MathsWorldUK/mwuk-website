import {formatDate, markdown} from '@/app/shared/utilities';
import Image from 'next/image';
import Link from 'next/link';
import {getEvent, getEvents} from '@/lib/datocms';
import styles from '../../shared/tiles.module.css';
import CalendarIcon from '@/app/shared/icons/events.svg';
import AudienceIcon from '@/app/shared/icons/audience.svg';
import BackIcon from '@/app/shared/icons/back.svg';
import TicketIcon from '@/app/shared/icons/tickets.svg';

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  try {
    return (await getEvents()).map((event) => ({id: event.slug}));
  } catch (error) {
    console.error('Error fetching events for static params:', error);
    return [];
  }
}

export default async function EventDetail({ params }: EventPageProps) {
  const { id } = await params;
  const event = await getEvent(id);
  if (!event) return <div></div>;

  return (
    <div>
      <title>{event.title} – MathsWorld London</title>
      <Link href="/events" className={styles.backLink}><BackIcon/> All Events</Link>
      <h1>{event.title}</h1>

      <div className={'row'}>
        <div style={{width: '240px'}}>
          <Image
            className={styles.leftThumb}
            src={event.image!.url}
            alt={event.image!.alt || event.title}
            width="240"
            height="240"
            priority
          />
        </div>
        <div className={'grow'}>
          <div className={styles.properties}>
            <div>
              <CalendarIcon/>
              <time dateTime={event.date} className={styles.eventMeta}>
                {formatDate(event.date)}
              </time>
            </div>
            {event.audience ? (
              <div>
                <AudienceIcon/>
                {event.audience}
              </div>
            ) : <></>}
          </div>
          <div dangerouslySetInnerHTML={{__html: markdown(event.description)}}/>
          {event.tickets ? (
            <a className={styles.btn} href={event.tickets}><TicketIcon/> Get Tickets</a>
          ) : <></>}
        </div>
      </div>
    </div>
  );
}
