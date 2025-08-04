"use client";
import Image from 'next/image'

export default function Events() {
  return (<div>
    <title>MathsWorld London – Events</title>
    <style global jsx>{`body{--bg-gradient: var(--p4);}`}</style>
    <Image src={'/images/banner-3.jpg'} className={'hero'} alt={''} width={820} height={200}/>
    <h1>Upcoming Events</h1>
    <p>Coming soon…</p>
  </div>);
}
