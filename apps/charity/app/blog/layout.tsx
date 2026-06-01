import Image from 'next/image';
import Link from 'next/link';
import {getBlogs} from '@repo/data/datocms';
import styles from '@repo/ui/sections.module.css';

export default async function BlogLayout({children}: {children: React.ReactNode}) {
  const blogs = await getBlogs();

  return (
    <div>
      <title>MathsWorld Blog</title>
      <Image
        src={'/images/banners/puzzles.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <h1 className={'fill'}>Blog</h1>

      <div className={styles.sections}>
        <nav>
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          ))}
        </nav>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
