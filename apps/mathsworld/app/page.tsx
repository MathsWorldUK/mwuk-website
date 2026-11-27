import {Hero} from '@repo/ui/hero';
import {HomePage, LocationMap, MathsQuote, Testimonials} from '@repo/ui/home';

export default function Home() {
  return (
    <HomePage>
      <title>MathsWorld – London’s new Mathematics Discovery Centre</title>
      <h1 className={'fill'}>
        Explore! Discover! Solve!
        <br />
        <span>in London’s new mathematics discovery centre</span>
      </h1>
      <Hero />
      <h2 className={'fill purple'}>Welcome to the home of hands-on mathematics!</h2>
      <div className={'row'}>
        <div className={'grow'}>
          <p>
            MathsWorld is London’s first maths discovery centre, located beneath a railway arch on
            London’s vibrant South Bank, just a few minutes walk from major tube and train stations.
          </p>
          <p>
            We invite <strong>visitors of all ages</strong>, from 1 to 100, to explore the beauty,
            creativity, and power of mathematics. MathsWorld is also a great destination for
            families, groups and school classes.
          </p>
        </div>
        <LocationMap
          href={'https://maps.app.goo.gl/jbQYo77AV8Rcihdz8'}
          address={'Arches, 6 Burrell St, London SE1 0UN'}
        />
      </div>
      <p>
        Whether you’re a lifelong maths enthusiast, a curious sceptic or a reluctant engager with
        maths, our <strong>interactive, hands-on exhibits</strong> will surprise, delight, and
        challenge you. Step inside a giant soap bubble or a kaleidoscope. Laser-cut different
        shapes. Crack secret codes. Play pool on an elliptical table. Solve fascinating puzzles.
        Discover the hidden maths in everyday life.
      </p>
      <p>
        With over forty innovative exhibits and a packed <strong>programme of events</strong>,
        MathsWorld is a place to spark curiosity, ignite imagination, and see mathematics as you’ve
        never seen it before: fun, colourful, mind-blowing, and deeply connected to the world around
        us.
      </p>
      <h2 className={'fill green'}>What People say</h2>
      <Testimonials
        items={[
          {
            quote: 'Huge new attraction',
            source: 'The Sun',
            logo: '/images/sun.png',
            url: 'https://www.thesun.co.uk/travel/36922051/uk-attraction-rivals-science-natural-history-museums/',
          },
          {
            quote: 'Wholesome new attraction for number-loving youngsters',
            source: 'Timeout London',
            logo: '/images/timeout.png',
            url: 'https://www.timeout.com/london/kids/mathsworld',
          },
          {
            quote: 'Exciting new discovery centre will challenge, intrigue, and delight',
            source: 'Secret London',
            url: 'https://secretldn.com/mathsworld-immersive-maths-museum-discovery-centre/',
          },
          {quote: 'Amazing new centre. Will definitely return', source: 'Wendy'},
          {
            quote: 'Absolutely wonderful space. [The kids] spent hours immersed in the activities',
            source: 'Nelly',
          },
        ]}
      />
      <MathsQuote
        quote={
          'Mathematics has beauty and romance. It’s not a boring place to be, the mathematical world. It’s an extraordinary place; it’s worth spending time there.'
        }
        author={'Marcus du Sautoy, British mathematician'}
      />
    </HomePage>
  );
}
