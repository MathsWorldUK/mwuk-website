"use client";
import Image from 'next/image'

export default function Donate() {
  return (<div>
    <title>MathsWorld London – Support Us</title>
    <style global jsx>{`body{--bg-gradient: var(--p2);}`}</style>
    <Image src={'/images/banner-2.jpg'} className={'hero'} alt={''} width={840} height={200}/>
    <h1>Support MathsWorld</h1>
    <p>Coming soon…</p>
  </div>);
}
