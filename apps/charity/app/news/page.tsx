import {getAllNews} from '@repo/data/datocms';
import Link from 'next/link';

export const revalidate = 300; // 5 minutes

export default async function NewsIndex() {
  const news = await getAllNews();

  return (
    <div>
      <h2>MathsWorld News</h2>
      {news.length > 0 ? (
        <div>
          <h3>Recent Posts</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {news.slice(0, 5).map((news) => (
              <div key={news.slug}>
                <Link href={`/news/${news.slug}`} style={{textDecoration: 'none'}}>
                  <h4 style={{margin: '0 0 0.5rem', color: '#0066cc'}}>{news.title}</h4>
                </Link>
                <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>
                  By {news.author} •{' '}
                  {new Date(news.datePublished).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No news posts available yet. Check back soon!</p>
      )}
    </div>
  );
}
