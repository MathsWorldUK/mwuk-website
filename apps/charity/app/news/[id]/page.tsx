import {getNews, getAllNews} from '@repo/data/datocms';
import styles from './news.module.css';

interface NewsPageProps {
  params: Promise<{id: string}>;
}

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  try {
    return (await getAllNews()).map((news) => ({id: news.slug}));
  } catch (error) {
    console.error('Error fetching news for static params:', error);
    return [];
  }
}

export default async function NewsPost({params}: NewsPageProps) {
  const {id} = await params;
  const news = await getNews(id);

  if (!news) {
    return (
      <div>
        <h2>News post not found</h2>
        <p>The news post you're looking for doesn't exist.</p>
      </div>
    );
  }

  const formattedDate = new Date(news.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h2>{news.title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>By {news.author}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
      </header>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: news.body}} />
    </article>
  );
}
