import styles from './footer.module.css';

export function Footer() {
  return (<footer className={styles.footer}>
    <div className={styles.centered}>Generously supported by</div>
    <div className={styles.sponsors}>
      <a>G Research</a>
      <a>Qube</a>
      <a>Open University</a>
      <a>AITT</a>
      <a>CIVA</a>
      <a>Ben Delo</a>
    </div>
    <p>© MathsWorldUK, registered in England and Wales as a charity (number 1155010) and a company (number 8370409)</p>
    <p>Instagram • Facebook • ...</p>
  </footer>);
}
