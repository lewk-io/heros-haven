import Link from 'next/link';
import styles from './Header.module.scss';
import logo from '../../images/logo.png';

export const nav = [
    { title: 'Homepage', path: '/', nav: true },
    { title: 'Donate', path: 'https://donate.hhdayz.uk', nav: true },
    { title: 'Server Rules / Monetization', path: '/server-rules-and-monetization/', nav: true }
];

const Header = () => <>
    <header className={styles.header}>
        <div className="container">
            <div className="columns is-vcentered is-mobile">
                <div className="column is-6">
                    <div className={styles['header-logo']}>
                        <Link href="/"><img src={logo.src} alt="Hero's Haven DayZ" width="60" className={styles['header-logo-image']} /></Link>Hero's Haven DayZ
                    </div>
                </div>
                <div className="column">
                    <nav className={styles.nav}>
                        <ul className={styles['nav-container']}>
                            {nav.map((n, i) => n.nav && <li key={i} className={styles['nav__item']}><Link href={n.path}>{n.title}</Link></li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</>;

export default Header;