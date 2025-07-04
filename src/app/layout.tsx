import type { Metadata } from "next";
import { Asap } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

import DonateIcon from './shared/icons/donate.svg';
import EventsIcon from './shared/icons/events.svg';
import TicketsIcon from './shared/icons/tickets.svg';
import VisitIcon from './shared/icons/visit.svg';
import PentagonIcon from './shared/icons/pentagon.svg';

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${asap.variable}`}>
      <header style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1rem 2rem', maxWidth: '820px', margin: '0 auto'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none',
          color: '#333'
        }}> MathsWorld </Link>

        <nav>
          <Link href="/visit">
            <PentagonIcon className={'pentagon'}/>
            <VisitIcon className={'icon'}/>
            Visit
          </Link>
          <Link href="/about">
            <PentagonIcon className={'pentagon'}/>
            <EventsIcon className={'icon'}/>
            About
          </Link>
          <Link href="/donate">
            <PentagonIcon className={'pentagon'}/>
            <DonateIcon className={'icon'}/>
            Donate
          </Link>
          <a href="/tickets" className={'tickets'}>
            <PentagonIcon className={'pentagon'}/>
            <TicketsIcon className={'icon'}/>
            Tickets
          </a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>(c) MathsWorldUK</p>
        <p>Instagram • Facebook • ...</p>
        <p>QRT • GResearch</p>
      </footer>
    </body>
    </html>);
}
