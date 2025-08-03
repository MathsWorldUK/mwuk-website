import styles from './hero.module.css';

const IMAGES = [
  {id: 1, w: 1, h: 1},
  {id: 2, w: 2, h: 2, grid: '1/2/3/4'},
  {id: 3, w: 1, h: 1},
  {id: 5, w: 1, h: 1, grid: '1/5/3/7'},
  {id: 6, w: 1, h: 1},
  {id: 7, w: 1, h: 1, grid: '2/1/4/1'},
  {id: 8, w: 1, h: 1},
  {id: 9, w: 1, h: 1},
  {id: 10, w: 1, h: 1, grid: '3/2/5/5'},
  {id: 11, w: 1, h: 1, grid: '3/5/4/7'},
  {id: 12, w: 1, h: 1, grid: '3/7/5/8'},
  {id: 13, w: 1, h: 1},
  {id: 14, w: 1, h: 1},
  {id: 15, w: 1, h: 1}
]

export function Hero() {
  return (<div className={styles.hero}>
    {IMAGES.map(i => <div className={styles.outer + ' tile'} style={{gridArea: i.grid}} key={i.id}><div className={styles.inner} style={{
      backgroundImage: `url(/images/hero/hero-${i.id}.jpg)`

    }}></div></div>)}
  </div>);
}
