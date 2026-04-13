import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => setMenuOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

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
        <Link href="/" className={styles.wordmark} aria-label="Estate Augustea">
          <span className={styles.wordmarkTop}>Estate</span>
          <span className={styles.wordmarkBottom}>Augustea</span>
        </Link>

        <div id="site-navigation" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/biglietti" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Acquista Biglietti
          </Link>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          type="button"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
