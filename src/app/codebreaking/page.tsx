"use client";
import Image from 'next/image'
import {useState} from 'react'
import styles from './page.module.css';

const ANIMALS = [
  'badger',
  'bald-eagle',
  'bear',
  'butterfly',
  'camel',
  'cat',
  'cockerel',
  'cow',
  'crab',
  'dog',
  'duck',
  'elephant',
  'kingfisher',
  'koala',
  'lion',
  'meerkat',
  'monkey',
  'octopus',
  'owl',
  'panda',
  'penguin',
  'pig',
  'pocupine',
  'rabbit',
  'red-fox',
  'rhinoceros',
  'shark',
  'sloth',
  'snake',
  'spider',
  'squirrel',
  'turtle',
  'whale',
  'zebra',
];

export default function Events() {
  const [checkedAnimals, setCheckedAnimals] = useState<Set<string>>(new Set());

  const toggleAnimal = (animal: string) => {
    setCheckedAnimals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(animal)) {
        newSet.delete(animal);
      } else {
        newSet.add(animal);
      }
      return newSet;
    });
  };

  return (<div>
    <title>MathsWorld London – Codebreaking Solution</title>
    <h1>Codebreaking</h1>
    <h2 style={{textAlign: 'center'}}>Did you find all these animals?</h2>
    <div className="row" style={{gap: '1rem'}}>
      {ANIMALS.map(animal => (
        <div
          key={animal}
          className={`${styles.animal} ${checkedAnimals.has(animal) ? styles.checked : ''}`}
          onClick={() => toggleAnimal(animal)}
        >
          <Image
            src={`/images/codebreaking/${animal}.png`}
            alt={animal}
            width={150}
            height={150}
          />
          <div className={styles.checkbox}></div>
        </div>
      ))}
    </div>
  </div>);
}
