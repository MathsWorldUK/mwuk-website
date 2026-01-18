import Image from 'next/image';
import Link from 'next/link';
import {formatDate, markdown} from '@repo/data/utilities';
import {getEvent, getEvents} from '@repo/data/datocms';
import styles from '@repo/ui/tiles.module.css';
import CalendarIcon from '@repo/ui/icons/events.svg';
import AudienceIcon from '@repo/ui/icons/audience.svg';
import BackIcon from '@repo/ui/icons/back.svg';
import TicketIcon from '@repo/ui/icons/tickets.svg';

interface EventPageProps {
  params: Promise<{id: string}>;
}

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  try {
    return (await getEvents()).map((event) => ({id: event.slug}));
  } catch (error) {
    console.error('Error fetching events for static params:', error);
    return [];
  }
}

export default async function EventDetail({params}: EventPageProps) {
  const {id} = await params;
  const event = await getEvent(id);
  if (!event) return <div></div>;

  return (
    <div>
      <title>{event.title} – MathsWorld London</title>
      <Link href="/events" className={styles.backLink}>
        <BackIcon /> All Events
      </Link>
      <h1>{event.title}</h1>

      <div className={'row'}>
        <div style={{width: '240px'}}>
          <Image
            className={styles.leftThumb}
            src={event.image?.url || ''}
            alt={event.image?.alt || event.title}
            width="240"
            height="240"
            priority
          />
        </div>
        <div className={'grow'}>
          <div className={styles.properties}>
            <div>
              <CalendarIcon />
              <time dateTime={event.date} className={styles.eventMeta}>
                {formatDate(event)}
              </time>
            </div>
            {event.audience ? (
              <div>
                <AudienceIcon />
                {event.audience}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div dangerouslySetInnerHTML={{__html: markdown(event.description)}} />
          {event.tickets ? (
            <a className={styles.btn} href={event.tickets} target={'_blank'}>
              <TicketIcon /> Get Tickets
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
