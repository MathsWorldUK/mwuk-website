import Image from 'next/image';
import styles from '@repo/ui/sections.module.css';
import {SidebarNav} from '@repo/ui/sidebar-nav';
import {GALLERY_NAV_LINKS} from './gallery-constants';


export default function GalleryLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <title>MathsWorld Gallery</title>
      <Image
        src={'/images/banners/bridge.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <h1 className={'fill'}>Gallery</h1>

      <div className={styles.sections}>
        <SidebarNav links={GALLERY_NAV_LINKS} />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
