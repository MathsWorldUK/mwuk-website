import styles from './footer.module.css';
import Image from 'next/image'

const SPONSORS = [
  {id: 'g-research', name: 'G Research', link: ''},
  {id: 'qrt', name: 'QRT', link: ''},
  {id: 'open', name: 'The Open University', link: ''},
  {id: 'ben-delo', name: 'Ben Delo Foundation', link: ''},
  // TODO AITT
  {id: 'civa', name: 'CIVA', link: ''},
  {id: 'mathigon', name: 'Mathigon', link: ''},
  {id: 'xtx', name: 'XTX Markets', link: ''}
];

export function Footer() {
  return (<footer className={styles.footer}>
    <div className={styles.centered}>Generously supported by</div>
    <div className={styles.sponsors}>
      {SPONSORS.map(s => <a href={s.link} key={s.id}><Image src={`/images/sponsors/${s.id}.png`} alt={s.name} width={100} height={100}/></a>)}
    </div>
    <p>© MathsWorldUK, registered in England and Wales as a charity (number 1155010) and a company (number 8370409)</p>
    <p>Instagram • Facebook • ...</p>
  </footer>);
}
