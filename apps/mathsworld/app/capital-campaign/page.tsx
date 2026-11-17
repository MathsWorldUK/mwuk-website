import type {Metadata} from 'next';
import Image from 'next/image';
import Sections from '@repo/ui/sections';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Capital Campaign | MathsWorld London',
  description:
    'Help MathsWorld create a world-class, long-term home for hands-on mathematics in central London.',
};

const sections = [
  {id: 'journey', title: 'Our Journey'},
  {id: 'vision', title: 'Our Vision'},
  {id: 'why-maths', title: 'Why Maths'},
  {id: 'why-museums', title: 'Why Museums'},
  {id: 'experience', title: 'The Experience'},
  {id: 'business-plan', title: 'Business Plan'},
  {id: 'support', title: 'Support Us'},
  {id: 'contact', title: 'Get in Touch'},
];

const museums = [
  {
    name: 'Mathematikum',
    place: 'Germany, 2002',
    image: '/capital-campaign/mathematikum.jpg',
  },
  {name: 'MoMath', place: 'New York, 2012', image: '/capital-campaign/momath.jpg'},
  {name: 'MMACA', place: 'Barcelona, 2014', image: '/capital-campaign/mmaca.jpg'},
  {
    name: 'Maison Poincaré',
    place: 'Paris, 2023',
    image: '/capital-campaign/poincare.jpg',
  },
];

export default function CapitalCampaign() {
  return (
    <div className={styles.page}>
      <Image
        src={'/capital-campaign/banner.jpg'}
        className={'hero ' + styles.hero}
        alt={''}
        width={820}
        height={430}
      />

      <h1 className={'fill purple'}>
        <span className={styles.eyebrow}>£5M+ Capital Campaign</span>
        Creating a world-class home for mathematics
      </h1>

      <Sections sections={sections}>
        <section id="journey" className={styles.section}>
          <h2 style={{marginTop: 0}}>Our Journey So Far</h2>
          <p>
            MathsWorld is a registered charity that aims to change the perception of mathematics in
            the UK. We currently run three different projects:
          </p>

          <div className={'row'}>
            <Image
              src="/capital-campaign/mathscity.jpg"
              alt="Visitors exploring the hands-on exhibits at MathsCity Leeds"
              width={150}
              height={120}
              style={{marginTop: '6px'}}
            />
            <div className={'grow'}>
              <p>
                <strong>MathsCity Leeds</strong>
                <br />
                Opened in October 2021 in the Trinity Shopping Centre. We welcomed over 50,000
                visitors before moving to a new location in 2025.
              </p>
              <p className={styles.rating}>
                <span>★★★★☆</span> 4.5 on Google (175 reviews)
              </p>
            </div>
          </div>

          <div className={'row'}>
            <Image
              src="/capital-campaign/mathsworld.jpg"
              alt="The entrance to MathsWorld London"
              width={150}
              height={120}
              style={{marginTop: '6px'}}
            />
            <div className={'grow'}>
              <p>
                <strong>MathsWorld London</strong>
                <br />
                Opened in October 2025 under a railway arch on the South Bank. The 700 m² space is
                home to over 40 interactive exhibits. In the first year we’ve welcomed 50,000
                visitors.
              </p>
              <p className={styles.rating}>
                <span>★★★★★</span> 4.8 on Google (158 reviews)
              </p>
            </div>
          </div>

          <div className={'row'}>
            <Image
              src="/capital-campaign/leeds.jpg"
              alt="Trinity Leeds shopping centre"
              width={150}
              height={120}
              style={{marginTop: '6px'}}
            />
            <div className={'grow'}>
              <p>
                <strong>City of Maths</strong>
                <br />A two-year celebration of patterns, puzzles and play, with dozens of events
                hosted by Leeds in 2026–27. Inspired by the UK City of Culture programme, half a
                million people will take part through various partnerships.
              </p>
            </div>
          </div>

          <p>
            Our discovery centres present maths as{' '}
            <strong className={'red'}>playful, exciting, accessible</strong> and necessary. They{' '}
            <strong className={'red'}>explode negative perceptions</strong> of maths, build young
            people’s skills and confidence in maths, and inspire them to learn more.
          </p>
          <blockquote>
            <p>“Loved how interactive it is. Lots to explore.”</p>
            <cite>Female visitor, aged 36–45</cite>
          </blockquote>
          <p>
            An <strong>independent evaluation</strong> of school visits by{' '}
            <em>Hope-Stone Research</em> found that 66% of respondents saw mathematics in previously
            unexpected areas. Among students planning to study A-level maths, interest in studying
            maths at university rose from 37% to 61%.
          </p>
        </section>

        <section id="vision" className={styles.section}>
          <h2>Our Vision</h2>
          <p>
            We are now planning the next chapter of MathsWorld, when our current London lease ends
            in 2028: a significantly larger, long-term home in a high-footfall, central-London
            location.
          </p>
          <div className="row">
            <div className={styles.metric}>
              <strong>2,000 m²</strong>
              Total area
            </div>
            <div className={styles.metric}>
              <strong>100,000</strong>
              Annual visitors
            </div>
            <div className={styles.metric}>
              <strong>£5M+</strong>
              Fundraising target
            </div>
          </div>
          <p>
            The next location should be our home for at least{' '}
            <strong className={'red'}>10 years</strong>, allowing greater investment in permanent
            exhibits and audience development.
          </p>
          <p>
            London offers great transport connections and a large, diverse audience of residents,
            school groups, domestic visitors and international tourists. MathsWorld will be an
            attraction people choose to visit for enjoyment, not just to learn something, increasing
            both its reach and impact.
          </p>
          <div className="row">
            <div className={styles.benefit}>
              <Image src="/capital-campaign/lightbulb.svg" alt={''} width={80} height={80} />
              Educational and social impact
            </div>
            <div className={styles.benefit}>
              <Image src="/capital-campaign/museum.svg" alt={''} width={80} height={80} />
              Iconic London visitor attraction
            </div>
            <div className={styles.benefit}>
              <Image src="/capital-campaign/bag.svg" alt={''} width={80} height={80} />
              School visit destination
            </div>
            <div className={styles.benefit}>
              <Image src="/capital-campaign/puzzle.svg" alt={''} width={80} height={80} />
              Community and event space
            </div>
          </div>
          <p>
            Like our current centres, MathsWorld will host school visits and regular events, offer
            teacher support and take-home learning resources, and partner with other organisations
            and educators.
          </p>
          <blockquote>
            <p>“Genuinely engaging hands-on exhibits”</p>
            <cite>Sums of Anarchy, Facebook</cite>
          </blockquote>
          <p>
            Our exhibits will engage visitors of all ages, abilities and levels of mathematical
            confidence – from young children to PhD students, teachers, families, professionals, and
            visiting tourists.
          </p>
        </section>

        <section id="why-maths" className={styles.section}>
          <h2>Why Mathematics Matters</h2>
          <p>
            Mathematics is fundamental to almost everything we do: technology, AI, engineering,
            science, medicine, finance, even music and art. It helps open doors to education,
            careers and <strong>economic opportunity</strong>. And maths is not merely useful: it is
            also creative, surprising, playful and beautiful.
          </p>
          <p>
            Yet many adults do not realise the importance (or the beauty) of maths and associate it
            with anxiety, failure, memorising formulas or difficult exams. Negative attitudes can
            develop early and persist into adulthood.
          </p>
          <blockquote>
            <p>
              “Good numeracy is the best protection against unemployment, low wages and poor
              health.”
            </p>
            <cite>Andreas Schleicher, OECD (2013)</cite>
          </blockquote>
          <p>
            This comes at a <strong>significant cost</strong> to individuals and society. Research
            commissioned by National Numeracy in 2018 estimates that low adult numeracy costs the UK
            over £20 billion annually, while a 2014 DfE report found that achieving at least five
            good GCSEs (including English and Maths) increases lifetime productivity by around
            £100,000 per person.
          </p>
          <p>
            Our centres in Leeds and London were the{' '}
            <strong className={'red'}>first visitor attractions in the UK</strong> dedicated to the
            exploration of mathematics, but follow in the footsteps of many successful projects in
            other countries:
          </p>

          <div className="row">
            {museums.map((museum) => (
              <div key={museum.name} className={styles.museum}>
                <Image src={museum.image} alt={''} width={120} height={120} />
                <strong>{museum.name}</strong>
                <span>{museum.place}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="why-museums" className={styles.section}>
          <h2>Why Hands-on Museums Matter</h2>
          <p>
            There are many ways to engage people in mathematical thinking – from the school
            curriculum itself, to videos and podcasts, books, lectures and events, competitions,
            after-school clubs, or masterclasses.
          </p>
          <p>
            An in-person, hands-on discovery centre offers{' '}
            <strong className={'red'}>unique opportunities</strong> that are not possible in other
            outreach formats:
          </p>
          <ol>
            <li>
              It is targeted at a much <strong>wider range of ages</strong> (e.g. not just children
              of a specific age), and it appeals to people looking for “fun activities” rather than
              “educational experiences”.
            </li>
            <li>
              Physical touch and <strong>multi-sensory experiences</strong> can make abstract
              mathematical ideas more tangible and intuitive, and are{' '}
              <strong>more memorable</strong> than screen or paper-based alternatives.
            </li>
            <li>
              The in-person environment encourages <strong>collaboration and discussion</strong>,
              between classmates, families or even strangers.
            </li>
            <li>
              Many exhibits can build confidence through <strong>open-ended exploration</strong>,
              without the pressure of formal assessment or time limits.
            </li>
          </ol>
          <p>
            Research highlights the importance of learning beyond the classroom. Falk and Dierking
            (2010) found that participation in “out-of-school, free-choice learning experiences such
            as visits to science museums” was “a{' '}
            <strong className={'red'}>major predictor of high achievement</strong>” in international
            assessments. Similarly, the Harvard Family Research Project (2009) concluded that
            opportunities to learn outside school are “major predictors of children’s development,
            learning, and educational achievement.”
          </p>
          <p>
            Our goal is not to teach specific mathematical knowledge, but to create{' '}
            <strong className={'red'}>positive memories</strong> and{' '}
            <strong className={'red'}>emotional experiences</strong> associated with maths. These
            encourage visitors to engage with the subject through other channels, and allow a visit
            lasting just a few hours to have an outsized impact.
          </p>
        </section>

        <section id="experience" className={styles.section}>
          <h2>The MathsWorld Experience</h2>
          <p>
            Our exhibits will be organised into <strong>themed zones</strong> to show many different
            faces of mathematics. There will also be space for{' '}
            <strong>temporary exhibitions</strong>, flexible <strong>classroom space</strong> for
            school visits and workshops, a <strong>shop</strong> with unique mathematical gifts, and
            potentially a small café. Some exhibits can be moved to create a large open space for{' '}
            <strong>lectures and events</strong>.
          </p>

          <figure>
            <Image src="/capital-campaign/map.svg" width={640} height={380} alt={''} />
            <figcaption>Floor plan for illustrative purposes only.</figcaption>
          </figure>

          <p>
            The exhibits are <strong className={'red'}>interactive, visually spectacular</strong>,
            engaging, memorable, and often surprising. While younger children might simply play and
            touch, older visitors are invited to understand why the exhibits work the way they do.
            Information screens will provide additional explanations at different levels of depth.
          </p>
          <p>
            MathsWorld will offer subsidised visits for some schools, monthly admission-free days,
            and target marketing and community outreach to{' '}
            <strong className={'red'}>reach underserved audiences</strong>. The centre will have
            step-free access throughout, alongside audio-described guides and tactile markers.
          </p>

          <div className={styles.gallery}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Image
                key={i}
                src={`/capital-campaign/experience${i}.jpg`}
                alt={''}
                width={400}
                height={300}
              />
            ))}
          </div>

          <p>Different audiences will interact with MathsWorld in different ways:</p>
          <ul>
            <li>
              For <strong>schools</strong>, we offer guided visits and curriculum-aligned workshops.
            </li>
            <li>
              For <strong>children and families</strong> there are collaborative puzzles, fun and
              playful activities, and hands-on discovery.
            </li>
            <li>
              For <strong>adults</strong> we offer deeper mathematical explanations as well as
              evening events, lectures and social programmes.
            </li>
            <li>
              For <strong>tourists</strong> we are an unusual, highly “Instagrammable” attraction.
            </li>
          </ul>
        </section>

        <section id="business-plan" className={styles.section}>
          <h2>Business Plan Outline</h2>
          <p>
            We are currently searching for suitable properties in London, with rates of around
            £50/sqft. With total rent in the range of £0.8M–£1.2M, we expect our annual operating
            cost to be £1.6M–£2M.
          </p>
          <p>
            A projected footfall of 100,000 gives £1.2M+ of earned revenue from admissions, retail
            and other visitor spending. The £0.4M–£0.8M gap will be met through corporate
            sponsorships and philanthropic support.
          </p>

          <p>Our £5M+ capital campaign covers:</p>
          <Image
            src="/capital-campaign/budget.svg"
            width={160}
            height={160}
            style={{float: 'right'}}
            alt={'Pie Chart'}
          />
          <ul>
            <li>
              <strong style={{color: 'var(--p1)'}}>Building renovation and fit-out: £1.8M</strong>
            </li>
            <li>
              <strong style={{color: 'var(--p2)'}}>
                Exhibit design/construction (12 zones): £1.5M
              </strong>
            </li>
            <li>
              <strong style={{color: 'var(--p3)'}}>Architect and professional fees: £0.2M</strong>
            </li>
            <li>
              <strong style={{color: 'var(--p4)'}}>
                Marketing and community engagement: £0.1M
              </strong>
            </li>
            <li>
              <strong style={{color: '#666'}}>Contingencies: £0.4M</strong>
            </li>
            <li>
              <strong style={{color: 'var(--p5)'}}>
                Operating reserves for the first 2 years: £1.0M
              </strong>
            </li>
          </ul>

          <p>
            We will work with a high-calibre museum architect to ensure a strong visual impression.
            Our experience establishing and fitting out our centres in Leeds and London will help us
            control development costs.
          </p>
          <p>
            Contingent on progress with the site search and fundraising, we will aim for an opening
            in summer 2028.
          </p>

          <figure>
            <Image
              src="/capital-campaign/timeline.svg"
              width={292}
              height={84}
              style={{maxWidth: '500px', borderRadius: 0}}
              alt={'Development Timeline'}
            />
          </figure>
          <p>
            <em>A detailed business plan is available upon request.</em>
          </p>
        </section>

        <section id="support" className={styles.section}>
          <h2>How to Support Us</h2>
          <p>
            MathsWorld is a unique opportunity to play a{' '}
            <strong className={'red'}>foundational role</strong> in creating a{' '}
            <strong className={'red'}>major new educational and cultural institution</strong> in
            London that could inspire generations. Your support will have a meaningful and
            measurable impact on maths education and public attitudes, as well as supporting future
            workforce development.
          </p>
          <p>
            Depending on your level of support, we offer a range of benefits, both for{' '}
            <strong>individual philanthropists</strong> and <strong>corporate sponsors</strong>:
          </p>
          <ul>
            <li>
              Your name or branding on our website, publications and donor wall in the museum –
              increasing brand visibility and association with creativity, innovation, scientific
              discovery and problem-solving.
            </li>
            <li>Annual memberships for guests or employees.</li>
            <li>Exclusive events, previews and lectures just for our supporters.</li>
            <li>Hosting of private events and receptions inside the museum.</li>
            <li>
              Naming rights for exhibits, events or specific galleries, as well as bespoke,
              co-branded public events and outreach activities.
            </li>
            <li>Opportunities for employee involvement and volunteering.</li>
          </ul>

          <p>
            Sponsorship levels are based on <strong className={'red'}>annual contributions</strong>,
            with a five-year commitment:
          </p>
          <div className="row">
            <div className={styles.sponsorship}>
              <strong>£50,000</strong>
              Archimedean
            </div>
            <div className={styles.sponsorship}>
              <strong>£100,000</strong>
              Platonic
            </div>
            <div className={styles.sponsorship}>
              <strong>£250,000</strong>
              Gaussian
            </div>
            <div className={styles.sponsorship}>
              <strong>£500,000</strong>
              Newtonian
            </div>
          </div>

          <p>
            Donations are <strong className={'red'}>Gift-Aid eligible or tax-deductible</strong>,
            where applicable. Please contact us about larger philanthropic donations, or to leave a
            legacy in your will. We also look forward to hearing more about your specific goals, and
            working together on a bespoke plan.
          </p>
        </section>

        <section id="contact" className={`${styles.section}`}>
          <h2>Get in Touch</h2>
          <p>
            CEO, Prof. Katie Chicot: <a href="mailto:ceo@mathsworld.com">ceo@mathsworld.com</a>
            <br />
            Chair of Trustees, Lynne McClure OBE:{' '}
            <a href="mailto:chair@mathsworld.com">chair@mathsworld.com</a>
          </p>
        </section>
      </Sections>
    </div>
  );
}
