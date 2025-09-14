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
        <p>Please arrive no later than 20 minutes after the time on your ticket. There is no limit to the duration of your visit though visitors typically stay for 1 hour 20 minutes. Last admission is 1 hour before closing time.</p>
      </section>

      <section id="directions">
        <h2>Directions</h2>
        <p>Visit us at Arches, 6 Burrell St, London SE1 0UN</p>
        <p>MathsWorld is located in the centre of London, with excellent transport links. No parking is available on-site, and we recommend arriving by public transport.</p>
        <ul>
          <li>Southwark (Jubilee Line): 5 min walk</li>
          <li>Blackfriars Station (Thameslink): 5 min walk</li>
          <li>Blackfriars Station (Circle and District Line): 9 min walk</li>
          <li>London Bridge Station (Jubilee and Northern, National Rail): 17 min walk</li>
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
        <p>Concessions include registered disabled person, registered carer for disabled person, students.</p>
      </section>

      <section id="accessibility">
        <h2>Accessibility</h2>
        <p>MathsWorld is committed to being accessible to all visitors, and we are
          continually developing in this aspect:</p>
        <ul>
          <li>Wheelchair accessible entrances and exhibits</li>
          <li>Accessible restrooms throughout the facility</li>
          <li>Headphones for visitors with sensory sensitivities</li>
        </ul>
        <p>For specific accessibility requirements, please contact us at <a href={'mailto:accessibility@mathsworld.com'}>accessibility@mathsworld.com</a></p>
      </section>

      <section id="school-visits">
        <h2>School Visits</h2>
        <p>Specially designed educational programs for school groups:</p>
        <ul>
          <li>Guided tours</li>
          <li>Interactive workshops for different age groups</li>
          <li>Educational resources and activity sheets</li>
          <li>Teacher preview visits available</li>
        </ul>
        <p>
          <strong>Pricing:</strong> £11 per student, 1 free adult per 10 students
        </p>
        <p>To book a school visit, email <a href={'mailto:schools@mathsworld.com'}>schools@mathsworld.com</a> or call 01234 567890</p>
      </section>

      <section id="group-visits">
        <h2>Group Visits</h2>
        <p>
          Special arrangements for groups of 15 or more: </p>
        <ul>
          <li>Discounted group rates (10% off standard admission)</li>
          <li>Reserved seating areas for presentations</li>
          <li>Professional tour guides available</li>
          <li>Customizable visit itineraries</li>
        </ul>
        <p><strong>Advance booking required:</strong> Please book at least two weeks in advance.</p>
        <p>For group bookings, contact <a href={'mailto:groups@mathsworld.com'}>groups@mathsworld.com</a> or call 01234 567891.</p>
      </section>
    </Sections>
  </div>);
}
