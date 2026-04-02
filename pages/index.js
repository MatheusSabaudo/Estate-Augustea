import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { events, formatDateShort } from '../data';
import styles from '../styles/home.module.css';

export default function Home() {
  const featured = events.filter(e => e.featured);
  const upcoming = events.slice(0, 4);

  return (
    <>
      <Head>
        <title>Estate Augustea – Teatro e Cultura nelle Aree Archeologiche Italiane</title>
        <meta name="description" content="Spettacoli teatrali, concerti, cinema e incontri culturali nelle più belle aree archeologiche d'Italia. Estate 2026: Giugno – Settembre." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Estate 2026 · Giugno – Settembre</p>
          <h1 className={styles.heroTitle}>
            L'Arte Incontra<br />
            <span className={styles.heroAccent}>L'Antichità</span>
          </h1>
          <p className={styles.heroSub}>
            Spettacoli teatrali, concerti e cinema nelle più suggestive<br />
            aree archeologiche d'Italia
          </p>
          <div className={styles.heroCtas}>
            <Link href="/eventi" className={styles.btnPrimary}>Scopri gli Eventi</Link>
            <Link href="/biglietti" className={styles.btnOutline}>Acquista Biglietti</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Chi siamo</p>
              <h2 className={styles.introTitle}>Un'associazione culturale<br />nata dal cuore d'Italia</h2>
            </div>
            <div>
              <p className={styles.introText}>
                Estate Augustea organizza eventi culturali serali — spettacoli teatrali, incontri con artisti, 
                proiezioni cinematografiche e concerti — nei siti archeologici più suggestivi d'Italia, 
                da giugno a settembre.
              </p>
              <p className={styles.introText}>
                Nata nel 2018 in alcune località del centro Italia, l'associazione ha saputo creare 
                un'offerta unica che unisce il patrimonio dell'antichità classica con la vitalità 
                della cultura contemporanea.
              </p>
              <Link href="/chi-siamo" className={styles.introLink}>
                Scopri la nostra storia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '7+', label: 'Siti Archeologici' },
              { num: '8', label: 'Eventi in Programma' },
              { num: '4', label: 'Regioni d\'Italia' },
              { num: '2018', label: 'Anno di Fondazione' },
            ].map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>In primo piano</p>
            <h2 className={styles.sectionTitle}>Gli Appuntamenti<br />da Non Perdere</h2>
            <div className="divider" />
          </div>

          <div className={styles.featuredGrid}>
            {featured.slice(0, 3).map((event, i) => {
              const { day, month } = formatDateShort(event.date);
              return (
                <Link href={`/eventi/${event.slug}`} key={event.id} className={`${styles.eventCard} ${i === 0 ? styles.eventCardLarge : ''}`}>
                  <div className={styles.eventImg} style={{ backgroundImage: `url(${event.image})` }}>
                    <div className={styles.eventDate}>
                      <span className={styles.day}>{day}</span>
                      <span className={styles.month}>{month}</span>
                    </div>
                    <span className={styles.eventCategory}>{event.category}</span>
                  </div>
                  <div className={styles.eventInfo}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventSub}>{event.subtitle}</p>
                    <p className={styles.eventLocation}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location}, {event.locationCity}
                    </p>
                    <div className={styles.eventFooter}>
                      <span className={styles.eventPrice}>da € {event.price}</span>
                      <span className={styles.eventCta}>Scopri →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.allEvents}>
            <Link href="/eventi" className={styles.btnOutline}>Tutti gli eventi</Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS BANNER */}
      <section className={styles.locationsBanner}>
        <div className={styles.locationsBannerOverlay} />
        <div className={`container ${styles.locationsBannerContent}`}>
          <div>
            <p className={styles.sectionLabel}>I nostri spazi</p>
            <h2 className={styles.locationsBannerTitle}>Patrimoni UNESCO,<br />Palcoscenici Immortali</h2>
            <p className={styles.locationsBannerText}>
              Dalle Terme di Caracalla ai teatri greci di Sicilia, ogni location è 
              un viaggio nel tempo che trasforma lo spettacolo in un'esperienza unica.
            </p>
            <Link href="/locations" className={styles.btnPrimary}>Esplora le Locations</Link>
          </div>
        </div>
      </section>

      {/* UPCOMING - CORRETTO SENZA LINK ANNIDATI */}
      <section className={styles.upcoming}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Calendario</p>
            <h2 className={styles.sectionTitle}>Prossimi Appuntamenti</h2>
            <div className="divider" />
          </div>

          <div className={styles.upcomingList}>
            {upcoming.map(event => {
              const { day, month } = formatDateShort(event.date);
              return (
                <div key={event.id} className={styles.upcomingItem}>
                  <Link href={`/eventi/${event.slug}`} className={styles.upcomingLink}>
                    <div className={styles.upcomingDate}>
                      <span>{day}</span>
                      <span>{month}</span>
                    </div>
                    <div className={styles.upcomingInfo}>
                      <h4 className={styles.upcomingTitle}>{event.title}</h4>
                      <p className={styles.upcomingMeta}>{event.subtitle} · {event.location}</p>
                    </div>
                    <span className={styles.upcomingCategory}>{event.category}</span>
                  </Link>
                  <div className={styles.upcomingPrice}>
                    <span>da € {event.price}</span>
                    <Link href="/biglietti" className={styles.btnSmall} onClick={(e) => e.stopPropagation()}>Biglietti</Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.allEvents}>
            <Link href="/eventi" className={styles.btnOutline}>Calendario completo</Link>
          </div>
        </div>
      </section>

      {/* CTA BIGLIETTI */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaDecor} />
            <p className={styles.ctaLabel}>Prenota ora</p>
            <h2 className={styles.ctaTitle}>Assicurati il Tuo Posto<br />sotto le Stelle</h2>
            <p className={styles.ctaText}>
              Acquista i biglietti online in pochi click. Sicuro, semplice, immediato.
            </p>
            <Link href="/biglietti" className={styles.btnPrimary}>Acquista Online →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}