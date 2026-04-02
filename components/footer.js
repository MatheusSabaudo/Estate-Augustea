import Link from 'next/link';
import styles from '../styles/footer.module.css';  // ← percorso corretto

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ornament}>
        <span className={styles.line} />
        <span className={styles.diamond}>◆</span>
        <span className={styles.line} />
      </div>

      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>Estate Augustea</h3>
          <p className={styles.tagline}>
            Teatro, arte e cultura<br />nelle aree archeologiche italiane
          </p>
          <div className={styles.social}>
            <a href="https://instagram.com/estateaugustea" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://facebook.com/estateaugustea" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Navigazione</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/eventi">Calendario eventi</Link></li>
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/chi-siamo">Chi siamo</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Servizi</h4>
          <ul>
            <li><Link href="/biglietti">Acquista biglietti</Link></li>
            <li><Link href="/contatti">Contatti</Link></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contatti</h4>
          <ul>
            <li><a href="mailto:info@estateaugustea.it">info@estateaugustea.it</a></li>
            <li>Estate 2026: Giugno – Settembre</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Estate Augustea. Tutti i diritti riservati.</p>
        <p><a href="#">Privacy Policy</a> · <a href="#">Cookie Policy</a></p>
      </div>
    </footer>
  );
}