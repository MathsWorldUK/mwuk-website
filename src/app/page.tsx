import Image from 'next/image'
import {Hero} from './shared/hero';
import styles from './page.module.css';

export default function Home() {
  return (<div className={styles.page}>
    <title>MathsWorld – London’s new Museum of Mathematics</title>
    <h1>Explore! Discover! Solve!<br/><span>in London’s new mathematics discovery centre</span></h1>
    <Hero/>
    <h2 className={"fill purple"}>Welcome to the home of hands-on mathematics!</h2>
    <div className={'row'}>
      <div className={'grow'}>
        <p>MathsWorld is London’s first maths discovery centre, located beneath a railway arch on London’s vibrant South Bank, just a few minutes walk from major tube and train stations.</p>
        <p>We invite <strong>visitors of all ages</strong>, from 1 to 100, to explore the beauty, creativity, and power of mathematics. MathsWorld is also a great destination for families, groups and school classes.</p>
      </div>
      <div>
        <a href={"https://maps.app.goo.gl/jbQYo77AV8Rcihdz8"} target={"_blank"} className={'tile-wrap'}>
          <Image src={'/images/map.png'} className={'tile'} width={340} height={220} alt={"Location Map"}/>
        </a>
        <p className={styles.caption}>Arches, 6 Burrell St, London SE1 0UN</p>
      </div>
    </div>
    <p>Whether you’re a lifelong maths enthusiast, a curious sceptic or a reluctant engager with maths, our <strong>interactive, hands-on exhibits</strong> will surprise, delight, and challenge you. Step inside a giant soap bubble or a kaleidoscope. Laser-cut different shapes. Crack secret codes. Play pool on an elliptical table. Solve fascinating puzzles. Discover the hidden maths in everyday life.</p>
    <p>With over forty innovative exhibits and a packed <strong>programme of events</strong>, MathsWorld is a place to spark curiosity, ignite imagination, and see mathematics as you’ve never seen it before: fun, colourful, mind-blowing, and deeply connected to the world around us.</p>
    <h2 className={"fill green"}>What People say</h2>
    <div className={'row'}>
      <a href={"https://www.thesun.co.uk/travel/36922051/uk-attraction-rivals-science-natural-history-museums/"} target={"_blank"} className={styles.quote}>
        “Huge new attraction”
        <Image src={"/images/sun.png"} alt={"The Sun"} width={80} height={32} />
      </a>
      <a href={"https://www.timeout.com/london/kids/mathsworld"} target={"_blank"}  className={styles.quote}>
        “Wholesome new attraction for number-loving youngsters”
        <Image src={"/images/timeout.png"} alt={"Timeout London"} width={80} height={32} />
      </a>
      <a href={"https://secretldn.com/mathsworld-immersive-maths-museum-discovery-centre/"} target={"_blank"}  className={styles.quote}>
        “Exciting new discovery centre will challenge, intrigue, and delight”
        <span>Secret London</span>
      </a>
      <div className={styles.quote}>
        “Amazing new centre. Will definitely return”
        <span>Wendy</span>
      </div>
      <div className={styles.quote}>
        “Absolutely wonderful space. [The kids] spent hours immersed in the activities”
        <span>Nelly, teacher</span>
      </div>
    </div>
    <Image src={'/images/banners/puzzles.jpg'} className={'hero'} alt={''} width={820} height={200}/>
    <blockquote>
      <p>Mathematics has beauty and romance. It’s not a boring place to be, the mathematical world. It’s an extraordinary place; it’s worth spending time there.</p>
      <p>– Marcus du Sautoy, British mathematician</p>
    </blockquote>
  </div>);
}
