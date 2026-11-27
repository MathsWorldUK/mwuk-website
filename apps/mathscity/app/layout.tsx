import {SiteSwitch} from '@repo/ui/site-switch';
import {Ubuntu} from 'next/font/google';
import {Header} from '@repo/ui/header';
import {Footer} from '@repo/ui/footer';
import {SITES, siteLinks} from '@repo/ui/sites';
import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';

import '@repo/ui/globals.css';
import './globals.css';

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  description:
    'MathsCity is the home of hands-on maths in the heart of Leeds, with over forty interactive exhibits that explore the wonderful and surprising world of mathematics for visitors of all ages.',
};

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable}`}>
        <SiteSwitch />
        <Header logo={'/images/logo.svg'} logoAlt={'MathsCity Leeds'} links={siteLinks('leeds')} />
        <main>{children}</main>
        <Footer showSponsorLogos={false} socials={SITES.leeds.socials} />
        <Analytics />
      </body>
    </html>
  );
}
