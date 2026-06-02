import {SiteSwitch} from '@repo/ui/site-switch';
import {Ubuntu_Sans} from 'next/font/google';
import {Header} from '@repo/ui/header';
import {Footer} from '@repo/ui/footer';
import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';

import '@repo/ui/globals.css';
import './globals.css';

const ubuntu = Ubuntu_Sans({
  variable: '--font-ubuntu',
  style: ['normal', 'italic'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  subsets: ['latin'],
  axes: ['wght', 'wdth'] as any,
});

export const metadata: Metadata = {
  description:
    'MathsWorld is an interactive discovery centre in London with innovative hands-on exhibits that explore the beauty, wonder, and everyday relevance of mathematics for visitors of all ages.',
  // openGraph: {
  //   type: "website",
  //   url: "https://example.com",
  //   title: "My Website",
  //   description: "My Website Description",
  //   siteName: "My Website",
  //   images: [{ url: "https://example.com/og.png" }]
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@site",
  //   creator: "@creator",
  //   images: "https://example.com/og.png"
  // },
  // verification: {google: "1234567890"}
};

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable}`}>
        <SiteSwitch />
        <Header
          logo={'/images/logo.svg'}
          logoAlt={'MathsWorld London'}
          links={[
            {title: 'About', icon: 'about', url: '/about'},
            {title: 'Donate', icon: 'donate', url: '/support'},
            {title: 'Gallery', icon: 'gallery', url: '/gallery'},
            {title: 'News', icon: 'news', url: '/news'},
          ]}
        />
        <main>{children}</main>
        <Footer showSponsorLogos={false} />
        <Analytics />
      </body>
    </html>
  );
}
