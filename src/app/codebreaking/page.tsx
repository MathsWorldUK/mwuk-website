"use client";
import Image from 'next/image'

export default function Events() {
  return (<div>
    <title>MathsWorld London – Codebreaking Solution</title>
    <style global jsx>{`.row img { mix-blend-mode: multiply; }`}</style>
    <h1>Codebreaking Solutions</h1>
    <h2 style={{textAlign: 'center'}}>Did you find all these animals?</h2>
    <div className={'row'}>
      <Image src={'/images/codebreaking/bear.png'} alt={'Bear'} width={250} height={250}/>
      <Image src={'/images/codebreaking/camel.png'} alt={'Camel'} width={250} height={250}/>
      <Image src={'/images/codebreaking/badger.png'} alt={'Badger'} width={250} height={250}/>
      <Image src={'/images/codebreaking/bald-eagle.png'} alt={'Eagle'} width={250} height={250}/>
      <Image src={'/images/codebreaking/butterfly.png'} alt={'Butterfly'} width={250} height={250}/>
    </div>
  </div>);
}
