import Image from 'next/image';
import {SidebarNav} from '@repo/ui/sidebar-nav';
import styles from '@repo/ui/sections.module.css';

const links = [
  {href: '/about', label: 'Our Mission'},
  {href: '/about/team', label: 'Team'},
  {href: '/about/trustees', label: 'Trustees'},
  {href: '/about/ambassadors', label: 'Ambassadors'},
  {href: '/about/policies', label: 'Policies'},
];

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
        <SidebarNav links={links} />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
