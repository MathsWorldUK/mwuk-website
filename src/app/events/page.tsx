import {formatDate} from '@/app/shared/utilities';
import Link from 'next/link';
import {getEvents} from '@/lib/datocms';
import styles from '../shared/tiles.module.css';

export const revalidate = 300;  // 5 minutes

export default async function Events() {
  const limit = Date.now() - 1000 * 60 * 60 * 24;
  const events = (await getEvents())
    .filter(event => +new Date(event.date) >= limit)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div>
      <title>MathsWorld London – Upcoming Events</title>
      <h1>Upcoming Events</h1>

      {events.length === 0 ? (
        <p>No upcoming events at the moment. Check back soon!</p>
      ) : (
        <div className={'row'}>
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className={styles.card}
            >
              <div className={styles.image} style={{backgroundImage: event.image ? `url(${event.image.url})` : ''}}></div>
              <div className={styles.content}>
                <h2>{event.title}</h2>
                <p className={styles.meta}>{formatDate(event)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
