import Link from 'next/link';
import {Hero} from '@repo/ui/hero';
import {Awards, HomePage, LocationMap, MathsQuote} from '@repo/ui/home';
import {SITES} from '@repo/ui/sites';

export default function Home() {
  return (
    <HomePage>
      <title>MathsCity – the National Mathematics Discovery Centre in Leeds</title>
      <h1 className={'fill'}>
        Explore! Discover! Solve!
        <br />
        <span>at the home of hands-on maths in Leeds</span>
      </h1>
      <Hero />
      <h2 className={'fill purple'}>Welcome to the home of hands-on mathematics!</h2>
      <div className={'row'}>
        <div className={'grow'}>
          <p>
            MathsCity is the home of hands-on maths, located in the heart of Leeds. We are now open
            at our new site in Zurich House on the beautiful Canal Wharf, just across the canal from
            Leeds train station.
          </p>
          <p>
            We invite <strong>visitors of all ages</strong> to explore and discover the wonderful
            and surprising world of mathematics. MathsCity is also a great destination for families,
            groups and school classes.
          </p>
        </div>
        <LocationMap
          href={
            'https://www.google.com/maps/search/?api=1&query=Zurich+House+4+Canal+Wharf+Leeds+LS11+5PS'
          }
          address={'Zurich House, 4 Canal Wharf, Leeds LS11 5PS'}
        />
      </div>
      <p>
        With over forty <strong>interactive, hands-on exhibits</strong>, there is something to
        surprise and challenge everyone. Climb inside a giant bubble or a kaleidoscope. Try our
        laser Ring of Fire. Meet the challenge of our fascinating puzzles.
      </p>
      <p>
        Set on Canal Wharf, you can complement your visit with great food, shopping or a trip on the
        water taxi. We recommend <a href={SITES.leeds.ticketsUrl}>booking your tickets</a> in
        advance, and you can find opening times and directions on our{' '}
        <Link href={'/visit'}>Plan Your Visit</Link> page.
      </p>
      <p>
        MathsCity is run by the charity MathsWorldUK, which aims to create the UK’s first National
        Mathematics Discovery Centre.
      </p>
      <h2 className={'fill green'}>Awards</h2>
      {/* TODO: add badge images (logo prop) and links once available. */}
      <Awards
        items={[
          {
            title: 'Inclusivity Award',
            description:
              'Recognised for making MathsCity a welcoming and accessible place for every visitor.',
          },
          {
            title: 'Tots & Teens Award',
            description:
              'Recognised as a great day out for families, from toddlers all the way to teenagers.',
          },
          {
            title: 'Day Out With The Kids',
            description: 'Recommended by Day Out With The Kids, the UK’s family days out guide.',
          },
        ]}
      />
      <MathsQuote
        quote={
          'Mathematics… is the best game that has ever been invented. It beats Monopoly, it beats chess and it happens that it can enable you to land rockets on the moon.'
        }
        author={'Sir John Kingman, British mathematician'}
      />
    </HomePage>
  );
}
