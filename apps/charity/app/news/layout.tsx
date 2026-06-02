import Image from 'next/image';
import Link from 'next/link';
import {getNews} from '@repo/data/datocms';
import styles from '@repo/ui/sections.module.css';

export default async function NewsLayout({children}: {children: React.ReactNode}) {
  const news = await getNews();

  return (
    <div>
      <title>MathsWorld News</title>
      <Image
        src={'/images/banners/puzzles.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <h1 className={'fill'}>News</h1>

      <div className={styles.sections}>
        <nav>
          {news.map((news) => (
            <Link key={news.slug} href={`/news/${news.slug}`}>
              {news.title}
            </Link>
          ))}
        </nav>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
