import Image from 'next/image';
import Link from 'next/link';
import styles from '@repo/ui/sections.module.css';

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <title>About MathsWorld</title>
      <Image
        src={'/images/banners/london1.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <h1 className={'fill'}>About MathsWorld</h1>

      <div className={styles.sections}>
        <nav>
          <Link href="/about">Our Mission</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/about/trustees">Trustees</Link>
          <Link href="/about/supporters">Supporters</Link>
        </nav>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
