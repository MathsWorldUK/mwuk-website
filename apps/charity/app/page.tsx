import Image from 'next/image';
import styles from './page.module.css';

const HEX =
  'M254.6,68.6c4.6,3,7.5,8,7.8,13.5v133.5c-.3,5.5-3.2,10.5-7.8,13.5l-115.6,66.7c-4.9,2.5-10.7,2.5-15.6,0L7.8,229.1c-4.6-3-7.5-8-7.8-13.5V82.1c.3-5.5,3.2-10.5,7.8-13.5L123.4,1.9c4.9-2.5,10.7-2.5,15.6,0l115.6,66.7Z';
const DIAMOND =
  'M233.6,63.9c4.3,2.5,4.3,6.5,0,9l-107.4,62c-4.9,2.5-10.7,2.5-15.6,0L3.2,72.9c-4.3-2.5-4.3-6.5,0-9L110.6,1.9c4.9-2.5,10.7-2.5,15.6,0l107.4,62Z';
const PARALLELOGRAM =
  'M115.2,63.1c4.6,3,7.5,8,7.8,13.5v124c0,5-3.5,7-7.8,4.5L7.8,143.1c-4.6-3-7.5-8-7.8-13.5V5.6C0,.6,3.5-1.4,7.8,1.1l107.4,62Z';
const TRAPEZIUM =
  'M246.4,138.8c4.3,2.5,4.3,6.5,0,9l-107.4,62c-4.9,2.5-10.7,2.5-15.6,0L7.8,143.1C3.2,140.1.3,135.1,0,129.6V5.6C0,.6,3.5-1.4,7.8,1.1l238.6,137.8Z';
const TRIANGLE =
  'M3.2,58.3c-4.3,2.5-4.3,6.5,0,9l99.2,57.3c4.3,2.5,7.8.4,7.8-4.5V5.6c0-4.9-3.5-7-7.8-4.5L3.2,58.3Z';

const IMAGES = [
  {w: 123, h: 206.2, x: 0, y: 8.4, path: PARALLELOGRAM},
  {w: 262.4, h: 297.7, x: 139.4, y: 2.9, path: HEX},
  {w: 236.8, h: 136.7, x: 431, y: 2.9, path: DIAMOND},
  {w: 110.2, h: 125.7, x: 709.8, y: 8.4, path: TRIANGLE},
  {w: 123, h: 206.2, x: 418.2, y: 88.9, path: PARALLELOGRAM},
  {w: 249.6, h: 211.7, x: 0, y: 169.4, path: TRAPEZIUM},
  {w: 236.8, h: 136.7, x: 291.6, y: 244.4, path: DIAMOND},
  {w: 262.4, h: 297.7, x: 557.6, y: 83.4, path: HEX},
];

export default function Home() {
  return (
    <div className={styles.page}>
      <title>MathsWorld UK Charity</title>

      <div className={styles.hero}>
        {IMAGES.map((img, i) => (
          <Image
            key={i}
            src={`/images/hero/${i + 1}.png`}
            width={img.w}
            height={img.h}
            alt={''}
            style={{
              width: `${img.w / 8.2}%`,
              height: `${img.h / 3.84}%`,
              left: `${img.x / 8.2}%`,
              top: `${img.y / 3.84}%`,
              clipPath: `path("${img.path}")`,
            }}
          />
        ))}
      </div>

      <h1 className={'fill purple'}>The home of hands-on mathematics</h1>

      <div className={'row'}>
        <div className={'grow'}>
          <h2 className={'fill'}>Our Mission </h2>
          <p>
            <strong>
              We want to change the perception of mathematics across the UK using interactive,
              hands-on exhibitions, programs and events.
            </strong>
          </p>
          <p>
            We want to presents maths as playful, thought-provoking, exciting, relevant and
            accessible, and inspire our audience to discover, explore and enjoy mathematical
            thinking and ideas.
          </p>
          <p>
            We want to build confidence and explode negative perceptions of mathematics among
            children, families, school groups, students and adults from diverse economic, social and
            cultural backgrounds.
          </p>
        </div>
        <div>
          <Image
            src={'/images/mission.jpg'}
            className={'tile'}
            width={340}
            height={390}
            alt={'Visitors exploring geometry puzzles'}
          />
        </div>
      </div>

      <h2 className={'fill purple'}>Our Projects </h2>
      <div className={'row'}>
        <a href={'https://mathsworld.com'} className={styles.project}>
          <Image src={'/images/london.jpg'} className={'tile'} width={250} height={120} alt={''} />
          <h3>
            MathsWorld London <span>Opened October 2025</span>
          </h3>
          <p>
            The 8000 sq ft space under a railway arch in central London is home to over 40
            interactive, hands-on exhibits.
          </p>
        </a>
        <a href={'https://mathscity.co.uk'} className={styles.project}>
          <Image src={'/images/leeds.jpg'} className={'tile'} width={250} height={120} alt={''} />
          <h3>
            MathsCity Leeds <span>Opened October 2021</span>
          </h3>
          <p>
            Opened during Covid, we’ve welcomed over 50,000 visitors in Trinity Shopping Centre
            before moving to a new location in 2025.
          </p>
        </a>
        <a href={'https://www.cityofmaths.co.uk'} className={styles.project}>
          <Image src={'/images/city.jpg'} className={'tile'} width={250} height={120} alt={''} />
          <h3>
            City of Maths <span>Leeds 2026</span>
          </h3>
          <p>
            A two-year celebration of patterns, puzzles and play, hosted for the first time by the
            city of Leeds.
          </p>
        </a>
      </div>

      <h2 className={'fill green'}>What People say</h2>
      <div className={'row'}>
        <a
          href={
            'https://www.thesun.co.uk/travel/36922051/uk-attraction-rivals-science-natural-history-museums/'
          }
          target={'_blank'}
          className={styles.quote}>
          “Huge new attraction”
          <Image src={'/images/sun.png'} alt={'The Sun'} width={80} height={32} />
        </a>
        <a
          href={'https://www.timeout.com/london/kids/mathsworld'}
          target={'_blank'}
          className={styles.quote}>
          “Wholesome new attraction for number-loving youngsters”
          <Image src={'/images/timeout.png'} alt={'Timeout London'} width={80} height={32} />
        </a>
        <a
          href={'https://secretldn.com/mathsworld-immersive-maths-museum-discovery-centre/'}
          target={'_blank'}
          className={styles.quote}>
          “Exciting new discovery centre will challenge, intrigue, and delight”
          <span>Secret London</span>
        </a>
        <div className={styles.quote}>
          “Amazing new centre. Will definitely return”
          <span>Wendy</span>
        </div>
        <div className={styles.quote}>
          “Absolutely wonderful space. [The kids] spent hours immersed in the activities”
          <span>Nelly</span>
        </div>
      </div>
      <Image
        src={'/images/banners/puzzles.jpg'}
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <blockquote>
        <p>
          Mathematics, rightly viewed, possesses not only truth, but supreme beauty — a beauty cold
          and austere, like that of sculpture, […] yet sublimely pure, and capable of a stern
          perfection such as only the greatest art can show.
        </p>
        <p>– Bertrand Russell</p>
      </blockquote>
    </div>
  );
}
