import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { locations } from '../data';
import styles from '../styles/locations.module.css';

export default function LocationsPage() {
  return (
    <>
      <Head>
        <title>Le Nostre Locations - Estate Augustea 2026</title>
        <meta
          name="description"
          content="Ostia Antica, Paestum e Fiesole: i luoghi che accolgono il calendario di Estate Augustea 2026."
        />
      </Head>

      <Navbar />

      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>I nostri palcoscenici</p>
          <h1 className={styles.pageTitle}>Le Locations</h1>
          <p className={styles.pageSubtitle}>Tre scenari archeologici, un solo racconto culturale</p>
        </div>
      </div>

      <section className={styles.mapBanner}>
        <div className="container">
          <p className={styles.mapText}>
            Ostia Antica, Paestum e Fiesole diventano spazi vivi per musica, cinema,
            teatro e incontri pensati per un pubblico giovane e adulto.
          </p>
        </div>
      </section>

      <section className={styles.locationsSection}>
        <div className="container">
          <div className={styles.locationsGrid}>
            {locations.map((loc, index) => (
              <article key={loc.id} className={`${styles.locationCard} ${index === 0 ? styles.featured : ''}`}>
                <div className={styles.locationVisual}>
                  <div
                    className={styles.locationPhoto}
                    style={{ backgroundImage: `url(${loc.image})` }}
                    aria-hidden="true"
                  />
                  <div className={styles.locationPhotoOverlay} />
                  <div className={styles.locationHalo} />
                  <div className={styles.locationRegion}>{loc.region}</div>
                  <div className={styles.locationSignature}>
                    <span className={styles.locationKicker}>Scenario archeologico</span>
                    <div className={styles.locationInitials} aria-hidden="true">
                      {loc.name
                        .split(' ')
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                    </div>
                  </div>
                  <div className={styles.locationPeriod}>{loc.period}</div>
                  <div className={styles.locationLines} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={styles.locationBody}>
                  <h2 className={styles.locationName}>{loc.name}</h2>
                  <p className={styles.locationCity}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {loc.city}
                  </p>
                  <p className={styles.locationDesc}>{loc.description}</p>

                  <div className={styles.locationMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaLabel}>Capienza</span>
                      <span className={styles.metaValue}>{loc.capacity.toLocaleString('it-IT')} posti</span>
                    </span>
                    <span className={styles.metaItem}>
                      <span className={styles.metaLabel}>Format</span>
                      <span className={styles.metaValue}>Domeniche Estate 2026</span>
                    </span>
                  </div>

                  <Link href="/eventi" className={styles.locationCta}>
                    {'Vedi eventi in questa location ->'}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerOverlay} />
        <div className={`container ${styles.ctaBannerContent}`}>
          <h2 className={styles.ctaBannerTitle}>Patrimonio, paesaggio, spettacolo</h2>
          <p className={styles.ctaBannerText}>
            Ogni location del progetto e pensata come esperienza: accessibile,
            evocativa e coerente con l&apos;identita di Estate Augustea.
          </p>
          <Link href="/contatti" className={styles.btnOutline}>Contattaci</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
