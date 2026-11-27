import Image from 'next/image';
import {markdown} from '@repo/data/utilities';
import {getVisit} from '@repo/data/datocms';
import Sections from '../sections';
import {SITES, Site} from '../sites';

const sections = [
  {id: 'opening-hours', title: 'Opening Hours'},
  {id: 'directions', title: 'Directions'},
  {id: 'ticket-prices', title: 'Ticket Prices'},
  {id: 'accessibility', title: 'Accessibility'},
  {id: 'school-visits', title: 'School Visits'},
  {id: 'group-visits', title: 'Group Visits'},
];

export async function VisitPage({site}: {site: Site}) {
  const visit = await getVisit(site);

  return (
    <div>
      <title>{`${SITES[site].name} – Visit Us`}</title>
      <Image
        src={SITES[site].visitBanner}
        loading="eager"
        className={'hero'}
        alt={''}
        width={820}
        height={200}
      />
      <h1>Plan Your Visit </h1>

      <Sections sections={sections}>
        <section id="opening-hours">
          <h2 style={{marginTop: '0'}}>Opening Hours</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.openingHours)}} />
        </section>
        <section id="directions">
          <h2>Directions</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.directions)}} />
        </section>
        <section id="ticket-prices">
          <h2>Ticket Prices</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.ticketPrices)}} />
        </section>
        <section id="accessibility">
          <h2>Accessibility</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.accessibility)}} />
        </section>
        <section id="school-visits">
          <h2>School Visits</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.schoolVisits)}} />
        </section>
        <section id="group-visits">
          <h2>Group Visits</h2>
          <div dangerouslySetInnerHTML={{__html: markdown(visit?.groupVisits)}} />
        </section>
      </Sections>
    </div>
  );
}
