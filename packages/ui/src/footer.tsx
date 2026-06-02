import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

const SPONSORS = [
  {id: 'aitt', name: 'Association of Information Technology Trust', link: ''},
  {id: 'ben-delo', name: 'Ben Delo Foundation', link: ''},
  {id: 'civa', name: 'CIVA', link: ''},
  {id: 'g-research2', name: 'G Research', link: 'https://www.gresearch.com'},
  // {id: 'mathigon', name: 'Mathigon', link: 'https://mathigon.org'},
  {id: 'open', name: 'The Open University', link: 'https://www.open.ac.uk'},
  {id: 'qrt', name: 'Qube Research & Technologies', link: 'https://www.qube-rt.com'},
  {id: 'xtx', name: 'XTX Markets', link: 'https://www.xtxmarkets.com'},
];

type FooterProps = {
  showSponsorLogos?: boolean;
};

export function Footer({showSponsorLogos = true}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>
        MathsWorldUK is registered in England and Wales as charity #1155010 and company #8370409.
        <br />
        <Link href="/terms">Website Terms and Conditions</Link>
      </p>
      {showSponsorLogos && (
        <div className={styles.sponsors}>
          {SPONSORS.map((s) => (
            <a href={s.link} key={s.id}>
              <Image src={`/images/sponsors/${s.id}.png`} alt={s.name} width={72} height={72} />
            </a>
          ))}
        </div>
      )}
      <p>
        Follow us on{' '}
        <a href={'https://www.instagram.com/mathsworlduk/'} target={'_blank'}>
          Instagram
        </a>{' '}
        •{' '}
        <a href={'https://www.facebook.com/mathsworlduk'} target={'_blank'}>
          Facebook
        </a>{' '}
        •{' '}
        <a href={'https://bsky.app/profile/mathsworld.com'} target={'_blank'}>
          Bluesky
        </a>{' '}
        •{' '}
        <a href={'https://www.tiktok.com/@mathsworlduk'} target={'_blank'}>
          TikTok
        </a>
      </p>
    </footer>
  );
}
