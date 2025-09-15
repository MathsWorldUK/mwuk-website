import {Ubuntu} from "next/font/google";
import {Header} from './shared/header';
import {Footer} from './shared/footer';
import type {Metadata} from 'next'

import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: 'MathsWorld is an interactive museum in London with innovative hands-on exhibits that explore the beauty, wonder, and everyday relevance of mathematics for visitors of all ages.',
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
}

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
    <body className={`${ubuntu.variable}`}>
      <div className={'banner'}>Opening in November 2025</div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </body>
    </html>);
}
