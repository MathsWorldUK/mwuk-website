import BackIcon from '@/app/shared/icons/back.svg';
import Image from 'next/image';
import Link from 'next/link';
import {getExhibit, getExhibits} from '@/lib/datocms';
import styles from '../../shared/tiles.module.css';
import ExhibitTabs from './tabs';

interface ExhibitPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  try {
    return (await getExhibits()).map((exhibit) => ({id: exhibit.slug}));
  } catch (error) {
    console.error('Error fetching exhibits for static params:', error);
    return [];
  }
}

export default async function ExhibitDetail({ params }: ExhibitPageProps) {
  const { id } = await params;
  const exhibit = await getExhibit(id);
  if (!exhibit) return <div></div>;

  return (
    <div>
      <title>{exhibit.title} – MathsWorld London</title>
      <Link href="/exhibits" className={styles.backLink}><BackIcon/> All Exhibits</Link>
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
          <ExhibitTabs exhibit={exhibit}/>
        </div>
      </div>
    </div>
  );
}
