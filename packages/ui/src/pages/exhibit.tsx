import Image from 'next/image';
import Link from 'next/link';
import {getExhibit, getExhibits} from '@repo/data/datocms';
import BackIcon from '../icons/back.svg';
import styles from '../tiles.module.css';
import {SITES, Site} from '../sites';
import ExhibitTabs from './exhibit-tabs';

interface ExhibitPageProps {
  site: Site;
  params: Promise<{id: string}>;
}

export async function exhibitStaticParams(site: Site) {
  try {
    return (await getExhibits())
      .filter((exhibit) => exhibit[site])
      .map((exhibit) => ({id: exhibit.slug}));
  } catch (error) {
    console.error('Error fetching exhibits for static params:', error);
    return [];
  }
}

export async function ExhibitPage({site, params}: ExhibitPageProps) {
  const {id} = await params;
  const exhibit = await getExhibit(id);
  if (!exhibit) return <div></div>;

  return (
    <div>
      <title>{`${exhibit.title} – ${SITES[site].name}`}</title>
      <Link href="/exhibits" className={styles.backLink}>
        <BackIcon /> All Exhibits
      </Link>
      <h1>{exhibit.title}</h1>
      <div className={'row'}>
        <div style={{width: '240px'}}>
          <Image
            className={styles.leftThumb}
            src={exhibit.images[0]?.url || ''}
            alt={exhibit.images[0]?.alt || ''}
            width="240"
            height="240"
            priority
          />
        </div>
        <div className={'grow'}>
          <ExhibitTabs exhibit={exhibit} />
        </div>
      </div>
    </div>
  );
}
