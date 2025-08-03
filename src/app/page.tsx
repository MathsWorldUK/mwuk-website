import Image from 'next/image'
import {Hero} from './shared/hero';
import styles from './page.module.css';

export default function Home() {
  return (<div className={styles.page}>
    <title>MathsWorld – London’s new Museum of Mathematics</title>
    <h1>Explore! Discover! Solve!<br/><span>in London’s new mathematics discovery center</span></h1>
    <Hero/>
    <h2>Welcome to the home of hands-on mathematics!</h2>
    <div className={'row'}>
      <div className={'grow'}>
        <p>Located on the South Bank, a few minutes walk from many different tube and train stations, MathsWorld is the perfect destination for anyone who want to understand why mathematics is beautiful, fun, surprising, mind-blowing, and useful in everyday life – kids or adults.</p>
        <p>Climb inside a giant bubble or a kaleidoscope. Try our laser Ring of Fire. Meet the challenge of our fascinating puzzles. Over forty interactive exhibits allow visitors to enjoy and appreciate the power and importance of mathematics as a tool for understanding the world in which we live.</p>
      </div>
      <p></p>
      <div>
        <a href={"https://maps.app.goo.gl/J5Df9KVdJzw2M2Qu7"} target={"_blank"}>
          <Image src={'/images/map.png'} className={'tile'} width={340} height={200} alt={"Location Map"}/>
        </a>
      </div>
    </div>
  </div>);
}
