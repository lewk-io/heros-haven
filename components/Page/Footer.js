import Link from 'next/link';
import styles from './Footer.module.scss';
import { nav } from './Header';

const Footer = () => <>
    <footer className={styles.footer}>
        <div className="container">
            <div className="columns">
                <div className="column">
                    Website by <Link href="https://twitter.com/Lewk_io">@Lewk_io</Link>
                </div>
                <div className="column is-4">
                    <ul className={styles.nav}>
                        {nav.map((n, i) => <li key={i} className={styles['nav__item']}><Link href={n.path}>{n.title}</Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</>;

export default Footer;