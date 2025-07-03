import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  gradient: string;
}

export default function Layout({ children, gradient }: LayoutProps) {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: `linear-gradient(to bottom, ${gradient}, white)`,
      fontFamily: 'var(--font-geist-sans)'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        maxWidth: '820px',
        margin: '0 auto'
      }}>
        <Link href="/" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          textDecoration: 'none',
          color: '#333'
        }}>
          MathsWorld
        </Link>
        
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link href="/visit" style={{ textDecoration: 'none', color: '#333' }}>
                Visit
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ textDecoration: 'none', color: '#333' }}>
                About
              </Link>
            </li>
            <li>
              <Link href="/donate" style={{ textDecoration: 'none', color: '#333' }}>
                Donate
              </Link>
            </li>
            <li>
              <Link href="/exhibits" style={{ textDecoration: 'none', color: '#333' }}>
                Exhibits
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main style={{
        maxWidth: '820px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {children}
      </main>
    </div>
  );
}