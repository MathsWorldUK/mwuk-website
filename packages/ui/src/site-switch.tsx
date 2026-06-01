import Image from 'next/image';
import styles from './site-switch.module.css';

export function SiteSwitch() {
  return (
    <header className={styles.switch}>
      <a href={'https://mathsworld.com'}>
        <Image src={'/images/switcher/london.svg'} alt={''} width={32} height={32} />
        <span>MathsWorld </span>London
      </a>
      <a href={'https://mathscity.co.uk'}>
        <Image src={'/images/switcher/leeds.png'} alt={''} width={32} height={32} />
        <span>MathsCity </span>Leeds
      </a>
      <a href={'https://www.cityofmaths.co.uk'}>
        <Image src={'/images/switcher/city.svg'} alt={''} width={32} height={32} />
        City of Maths
      </a>
      <a href={'https://about.mathsworld.com'}>
        <Image src={'/images/switcher/charity.svg'} alt={''} width={32} height={32} />
        Charity
      </a>
    </header>
  );
}
