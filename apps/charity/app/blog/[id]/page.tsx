import {getBlog, getBlogs} from '@repo/data/datocms';
import styles from './blog.module.css';

interface BlogPageProps {
  params: Promise<{id: string}>;
}

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  try {
    return (await getBlogs()).map((blog) => ({id: blog.slug}));
  } catch (error) {
    console.error('Error fetching blogs for static params:', error);
    return [];
  }
}

export default async function BlogPost({params}: BlogPageProps) {
  const {id} = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <div>
        <h2>Blog post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  const formattedDate = new Date(blog.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h2>{blog.title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>By {blog.author}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>
      </header>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: blog.body}} />
    </article>
  );
}
