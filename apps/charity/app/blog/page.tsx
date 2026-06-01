import {getBlogs} from '@repo/data/datocms';
import Link from 'next/link';

export const revalidate = 300; // 5 minutes

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <div>
      <h2>Welcome to the MathsWorld Blog</h2>
      <p>
        Explore the fascinating world of mathematics through our blog posts. Discover stories,
        insights, and updates about our exhibitions, events, and the mathematics that shapes our
        world.
      </p>

      {blogs.length > 0 ? (
        <div>
          <h3>Recent Posts</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {blogs.slice(0, 5).map((blog) => (
              <div key={blog.slug}>
                <Link href={`/blog/${blog.slug}`} style={{textDecoration: 'none'}}>
                  <h4 style={{margin: '0 0 0.5rem', color: '#0066cc'}}>{blog.title}</h4>
                </Link>
                <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>
                  By {blog.author} •{' '}
                  {new Date(blog.datePublished).toLocaleDateString('en-GB', {
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
        <p>No blog posts available yet. Check back soon!</p>
      )}
    </div>
  );
}
