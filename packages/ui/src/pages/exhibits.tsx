import Link from 'next/link';
import {getExhibits} from '@repo/data/datocms';
import styles from '../tiles.module.css';
import {SITES, Site} from '../sites';

export async function ExhibitsPage({site}: {site: Site}) {
  const exhibits = (await getExhibits())
    .filter((exhibit) => exhibit[site])
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <title>{`${SITES[site].name} – Exhibits`}</title>
      <h1>Exhibits</h1>
      <div className={'row'}>
        {exhibits.map((exhibit) => (
          <Link key={exhibit.slug} href={`/exhibits/${exhibit.slug}`} className={styles.card}>
            <div
              className={styles.image}
              style={{
                backgroundImage: exhibit.images.length ? `url(${exhibit.images[0]?.url})` : '',
              }}></div>
            <div className={styles.content}>
              <h2>{exhibit.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
