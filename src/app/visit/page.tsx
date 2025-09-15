"use client";
import Image from 'next/image'
import Sections from '../shared/sections';

export default function Visit() {
  return (<div>
    <title>MathsWorld London – Visit Us</title>
    <style global jsx>{`body {--bg-gradient: var(--p3);}`}</style>
    <Image src={'/images/banner-1.jpg'} className={'hero'} alt={''} width={820} height={200}/>
    <h1>Plan Your Visit </h1>

    <Sections>
      <section id="opening-hours">
        <h2 style={{marginTop: '0'}}>Opening Hours</h2>
        <ul>
          <li><strong>Tuesday - Friday:</strong> 10am – 4pm</li>
          <li><strong>Saturday - Sunday:</strong> 10am – 5pm</li>
        </ul>
        <p>We recommend that you book your tickets in advance to avoid disappointment. On some school days during term time, MathsWorld may be closed for exclusive school bookings.</p>
        <p>Please arrive no later than 20 minutes after the time on your ticket. There is no limit to the duration of your visit, but visitors typically stay for 1-2 hours. Last admission is 1 hour before closing time.</p>
        <p>When arriving, bring the booking number or e-ticket you will receive via email.</p>
      </section>

      <section id="directions">
        <h2>Directions</h2>
        <p>Visit us at <a href={'https://maps.app.goo.gl/jbQYo77AV8Rcihdz8'} target={'_blank'}>Arches, 6 Burrell St, London SE1 0UN</a></p>
        <p>MathsWorld is located in the centre of London, with excellent transport links. No parking is available on-site, and we recommend arriving by public transport.</p>
        <ul>
          <li>Southwark (Jubilee Line): 5 min walk</li>
          <li>Blackfriars Station (Thameslink): 5 min walk</li>
          <li>Blackfriars Station (Circle and District Line): 9 min walk</li>
          <li>London Bridge Station (Jubilee, Northern, National Rail): 17 min walk</li>
          <li>Waterloo East Station (National Rail): 8 min walk</li>
          <li>Bus: Blackfriars Road stops SL or SM</li>
        </ul>
      </section>

      <section id="ticket-prices">
        <h2>Ticket Prices</h2>
        <p>All our public tickets are annual passes, allowing you to return to MathsWorld as many times as you want.</p>
        <ul>
          <li>Adults: £14.50</li>
          <li>Children and concessions: £13</li>
          <li>Under 3s: Free</li>
        </ul>
        <p>Concessions include registered disabled persons, registered carers, students and OAPs.</p>
        <p>All children under the age of 14 need to be accompanied by an adult.</p>
      </section>

      <section id="accessibility">
        <h2>Accessibility</h2>
        <p>MathsWorld is committed to being accessible and welcoming to all visitors, and we are continually developing in this aspect. Our exhibition and exhibits are accessible to wheelchair users. We also have an accessible toilet.</p>
        <p>MathsWorld is a popular venue for visitors with ASD. We recommend ear defenders to avoid over stimulation.</p>
        <p>MathsWorld is not suitable for those with severe visual impairments. The exhibits are designed to give a visual experience of mathematics for those who are not happy with the symbols and numbers in mathematics.</p>
        <p>For specific accessibility requirements, please contact us at <a href={'mailto:accessibility@mathsworld.com'}>accessibility@mathsworld.com</a></p>
      </section>

      <section id="school-visits">
        <h2>School Visits</h2>
        <p>To book a school visit, please email <a href={'mailto:schools@mathsworld.com'}>schools@mathsworld.com</a>. We can accommodate up to 40 students (excluding accompanying staff).</p>
        <p>School tickets are priced at £11 per student, with 1 free adult per 10 students. Additional workshops can be arranged free of charge to complement your visit. Visits with a workshop will typically last 2 hours.</p>
        <p>MathsWorld has something to offer visitors of all ages, but we have designed most exhibits to be especially interesting for years 4–9.</p>
        <p>All the exhibits have an associated set of activities and follow on resources for you to use in the classroom after your visit. <a href={'https://www.mathsworlduk.com/exhibits/'} target={'_blank'}>Learn more…</a></p>
      </section>

      <section id="group-visits">
        <h2>Group Visits</h2>
        <p>MathsWorld is a perfect venue for a day of fun and team building. Our interactive space is created to explore the wonders of mathematics, but its also a great space to work together. </p>
        <p>The maximum group size we can accommodate is 40. Please book at least two weeks in advance by emailing <a href={'mailto:groups@mathsworld.com'}>groups@mathsworld.com</a>.</p>
      </section>
    </Sections>
  </div>);
}
