import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { locations } from '../data';
import styles from '../styles/locations.module.css';  // ← minuscolo

export default function LocationsPage() {
  return (
    <>
      <Head>
        <title>Le Nostre Locations – Estate Augustea 2026</title>
        <meta name="description" content="Aree archeologiche e siti del patrimonio italiano che ospitano gli eventi di Estate Augustea. Villa Adriana, Foro Romano, Terme di Caracalla e molto altro." />
      </Head>

      <Navbar />

      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>I nostri palcoscenici</p>
          <h1 className={styles.pageTitle}>Le Locations</h1>
          <p className={styles.pageSubtitle}>Patrimoni Mondiali dell'Umanità come non li hai mai vissuti</p>
        </div>
      </div>

      <section className={styles.mapBanner}>
        <div className="container">
          <p className={styles.mapText}>
            Da Nord a Sud, i siti più suggestivi della penisola italiana diventano palcoscenici naturali per gli eventi di Estate Augustea.
          </p>
        </div>
      </section>

      <section className={styles.locationsSection}>
        <div className="container">
          <div className={styles.locationsGrid}>
            {locations.map((loc, i) => (
              <article key={loc.id} className={`${styles.locationCard} ${i === 0 ? styles.featured : ''}`}>
                <div className={styles.locationImg} style={{ backgroundImage: `url(${loc.image})` }}>
                  <div className={styles.locationImgOverlay} />
                  <div className={styles.locationRegion}>{loc.region}</div>
                  <div className={styles.locationPeriod}>{loc.period}</div>
                </div>
                <div className={styles.locationBody}>
                  <h2 className={styles.locationName}>{loc.name}</h2>
                  <p className={styles.locationCity}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {loc.city}
                  </p>
                  <p className={styles.locationDesc}>{loc.description}</p>
                  <div className={styles.locationMeta}>
                    <span className={styles.metaItem}>
                      <span className={styles.metaLabel}>Capienza</span>
                      <span className={styles.metaValue}>{loc.capacity.toLocaleString('it-IT')} posti</span>
                    </span>
                  </div>
                  <Link href="/eventi" className={styles.locationCta}>
                    Vedi eventi in questa location →
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
          <h2 className={styles.ctaBannerTitle}>Proponi la Tua Location</h2>
          <p className={styles.ctaBannerText}>
            Gestisci un sito archeologico o un'area di interesse culturale? Contattaci per collaborare con Estate Augustea.
          </p>
          <Link href="/contatti" className={styles.btnOutline}>Contattaci</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}