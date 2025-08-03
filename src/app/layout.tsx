import { Asap } from "next/font/google";
import {Header} from './shared/header';
import {Footer} from './shared/footer';

import "./globals.css";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
});

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
    <body className={`${asap.variable}`}>
      <div className={'banner'}>Opening in November 2025</div>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </body>
    </html>);
}
