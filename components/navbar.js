import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';  // ← percorso corretto

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione per determinare se il link è attivo
  const isActive = (href) => {
    if (href === '/') return router.pathname === href;
    return router.pathname.startsWith(href);
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/eventi', label: 'Eventi' },
    { href: '/locations', label: 'Locations' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/contatti', label: 'Contatti' },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Estate</span>
          <span className={styles.logoAccent}>Augustea</span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${isActive(l.href) ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/biglietti" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Acquista Biglietti
          </Link>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}