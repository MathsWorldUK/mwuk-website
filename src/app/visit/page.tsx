import {markdown} from '@/app/shared/utilities';
import {getVisit} from '@/lib/datocms';
import Image from 'next/image'
import Sections from '../shared/sections';

export const revalidate = 300;  // 5 minutes

export default async function Visit() {
  const visit = await getVisit();

  return (<div>
    <title>MathsWorld London – Visit Us</title>
    <Image src={'/images/banners/london1.jpg'} className={'hero'} alt={''} width={820} height={200}/>
    <h1>Plan Your Visit </h1>

    <Sections>
      <section id="opening-hours">
        <h2 style={{marginTop: '0'}}>Opening Hours</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.openingHours)}}/>
      </section>
      <section id="directions">
        <h2>Directions</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.directions)}}/>
      </section>
      <section id="ticket-prices">
        <h2>Ticket Prices</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.ticketPrices)}}/>
      </section>
      <section id="accessibility">
        <h2>Accessibility</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.accessibility)}}/>
      </section>
      <section id="school-visits">
        <h2>School Visits</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.schoolVisits)}}/>
      </section>
      <section id="group-visits">
        <h2>Group Visits</h2>
        <div dangerouslySetInnerHTML={{__html: markdown(visit?.groupVisits)}}/>
      </section>
    </Sections>
  </div>);
}
