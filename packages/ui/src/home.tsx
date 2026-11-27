import Image from 'next/image';
import styles from './home.module.css';

export function HomePage({children}: {children: React.ReactNode}) {
  return <div className={styles.page}>{children}</div>;
}

export function LocationMap({href, address}: {href: string; address: string}) {
  return (
    <div>
      <a href={href} target={'_blank'} rel={'noreferrer'} className={'tile-wrap'}>
        <Image src={'/images/map.png'} className={'tile'} width={340} height={220} alt={'Map'} />
      </a>
      <p className={styles.caption}>{address}</p>
    </div>
  );
}

export interface Testimonial {
  quote: string;
  /** Name of the person or publication. */
  source: string;
  /** Optional logo of the publication, shown instead of the source name. */
  logo?: string;
  url?: string;
}

export function Testimonials({items}: {items: Testimonial[]}) {
  return (
    <div className={'row'}>
      {items.map((t) => {
        const body = (
          <>
            “{t.quote}”
            {t.logo ? (
              <Image src={t.logo} alt={t.source} width={80} height={32} />
            ) : (
              <span>{t.source}</span>
            )}
          </>
        );
        return t.url ? (
          <a
            key={t.quote}
            href={t.url}
            target={'_blank'}
            rel={'noreferrer'}
            className={styles.quote}>
            {body}
          </a>
        ) : (
          <div key={t.quote} className={styles.quote}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

export interface Award {
  title: string;
  description: string;
  /** Optional badge image, e.g. '/images/awards/dowtk.png'. */
  logo?: string;
  url?: string;
}

export function Awards({items}: {items: Award[]}) {
  return (
    <div className={styles.awards}>
      {items.map((a) => {
        const body = (
          <>
            {a.logo ? <Image src={a.logo} alt={''} width={120} height={120} /> : null}
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </>
        );
        return a.url ? (
          <a
            key={a.title}
            href={a.url}
            target={'_blank'}
            rel={'noreferrer'}
            className={styles.award}>
            {body}
          </a>
        ) : (
          <div key={a.title} className={styles.award}>
            {body}
          </div>
        );
      })}
    </div>
  );
}

export function MathsQuote({quote, author}: {quote: string; author: string}) {
  return (
    <>
      <Image
        src={'/images/banners/puzzles.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <blockquote>
        <p>{quote}</p>
        <p>– {author}</p>
      </blockquote>
    </>
  );
}
