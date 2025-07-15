"use client";
import {Hero} from './shared/hero';
import styles from './page.module.css';

export default function Home() {
  return (<div className={styles.page}>
    <style global jsx>{`body {--bg-gradient: #de167b33;}`}</style>
    <h1>Explore! Discover! Solve!<br/><span>at London&apos;s new mathematics discovery center</span></h1>
    <Hero/>
    <div className={'row'}>
      <div>
        <h2>Welcome to the first permanent mathematics museum in the UK!</h2>
        <p>Located on the South Bank, a short walk from Blackfrias and Southwark stations, MathsWorld is the perfect destination, for anyone who want to understand why mathematics is beautiful, fun, surprising, mind-blowing, and useful in everyday life – kids or adults.</p>
      </div>
      <div>
        Location map
      </div>
    </div>
  </div>);
}
