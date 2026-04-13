import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { events, formatDateShort } from '../data';
import styles from '../styles/home.module.css';

export default function Home() {
  const featured = events.filter((event) => event.featured);
  const upcoming = events.slice(0, 4);
  const heroLocations = [...new Map(events.map((event) => [event.location, event])).values()].slice(0, 3);

  return (
    <>
      <Head>
        <title>Estate Augustea - Teatro e Cultura nelle Aree Archeologiche Italiane</title>
        <meta
          name="description"
          content="Spettacoli teatrali, concerti, cinema e incontri culturali nelle piu belle aree archeologiche d'Italia. Estate 2026: Giugno - Settembre."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <aside className={styles.heroSide}>
          <div className={styles.heroSideRail}>
            <span className={styles.heroSideLabel}>Edizione Curata</span>
          </div>
          <div className={styles.heroSideCard}>
            <p className={styles.heroSideEyebrow}>Estate Augustea 2026</p>
            <h2 className={styles.heroSideTitle}>Notti di scena tra rovine, musica e pietra antica.</h2>
            <p className={styles.heroSideText}>
              Un cartellone pensato come un viaggio serale attraverso luoghi archeologici, performance dal vivo e atmosfere senza tempo.
            </p>
            <div className={styles.heroSideMeta}>
              <span>Giugno - Settembre</span>
              <span>15 appuntamenti</span>
            </div>
            <div className={styles.heroSideLocations}>
              {heroLocations.map((event, index) => (
                <div key={event.location} className={styles.heroSideLocation}>
                  <span className={styles.heroSideIndex}>0{index + 1}</span>
                  <div>
                    <p className={styles.heroSidePlace}>{event.location}</p>
                    <p className={styles.heroSideCity}>{event.locationCity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Estate 2026 - Giugno - Settembre</p>
          <h1 className={styles.heroTitle}>
            L&apos;Arte Incontra
            <br />
            <span className={styles.heroAccent}>L&apos;Antichita</span>
          </h1>
          <p className={styles.heroSub}>
            Spettacoli teatrali, concerti e cinema nelle piu suggestive
            <br />
            aree archeologiche d&apos;Italia
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

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <p className={styles.introLabel}>Chi siamo</p>
              <h2 className={styles.introTitle}>Un&apos;associazione culturale<br />nata dal cuore d&apos;Italia</h2>
            </div>
            <div>
              <p className={styles.introText}>
                Estate Augustea organizza eventi culturali serali: spettacoli teatrali, incontri con artisti,
                proiezioni cinematografiche e concerti nei siti archeologici piu suggestivi d&apos;Italia,
                da giugno a settembre.
              </p>
              <p className={styles.introText}>
                Nata nel 2018 in alcune localita del centro Italia, l&apos;associazione ha saputo creare
                un&apos;offerta unica che unisce il patrimonio dell&apos;antichita classica con la vitalita
                della cultura contemporanea.
              </p>
              <Link href="/chi-siamo" className={styles.introLink}>
                Scopri la nostra storia -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { num: '3', label: 'Location Archeologiche' },
              { num: '15', label: 'Eventi in Programma' },
              { num: '16', label: 'Settimane di Festival' },
              { num: 'DOM', label: 'Appuntamento Fisso' },
            ].map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>In primo piano</p>
            <h2 className={styles.sectionTitle}>Gli Appuntamenti<br />da Non Perdere</h2>
            <div className="divider" />
          </div>

          <div className={styles.featuredGrid}>
            {featured.slice(0, 3).map((event, index) => {
              const { day, month } = formatDateShort(event.date);
              return (
                <Link href={`/eventi/${event.slug}`} key={event.id} className={`${styles.eventCard} ${index === 0 ? styles.eventCardLarge : ''}`}>
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
                      <span className={styles.eventPrice}>da EUR {event.price}</span>
                      <span className={styles.eventCta}>Scopri -&gt;</span>
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

      <section className={styles.locationsBanner}>
        <div className={styles.locationsBannerOverlay} />
        <div className={`container ${styles.locationsBannerContent}`}>
          <div>
            <p className={styles.sectionLabel}>I nostri spazi</p>
            <h2 className={styles.locationsBannerTitle}>Patrimoni UNESCO,<br />Palcoscenici Immortali</h2>
            <p className={styles.locationsBannerText}>
              Da Ostia Antica a Paestum fino a Fiesole, ogni appuntamento trasforma
              il patrimonio archeologico in uno spazio vivo, aperto e contemporaneo.
            </p>
            <Link href="/locations" className={styles.btnPrimary}>Esplora le Locations</Link>
          </div>
        </div>
      </section>

      <section className={styles.upcoming}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Calendario</p>
            <h2 className={styles.sectionTitle}>Prossimi Appuntamenti</h2>
            <div className="divider" />
          </div>

          <div className={styles.upcomingList}>
            {upcoming.map((event) => {
              const { day, month } = formatDateShort(event.date);
              return (
                <article key={event.id} className={styles.upcomingItem}>
                  <Link href={`/eventi/${event.slug}`} className={styles.upcomingLink}>
                    <div className={styles.upcomingDate}>
                      <span>{day}</span>
                      <span>{month}</span>
                    </div>
                    <div className={styles.upcomingInfo}>
                      <h4 className={styles.upcomingTitle}>{event.title}</h4>
                      <p className={styles.upcomingMeta}>{event.subtitle} - {event.location}</p>
                    </div>
                    <span className={styles.upcomingCategory}>{event.category}</span>
                  </Link>
                  <div className={styles.upcomingPrice}>
                    <span>da EUR {event.price}</span>
                    <Link href="/biglietti" className={styles.btnSmall}>Biglietti</Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.allEvents}>
            <Link href="/eventi" className={styles.btnOutline}>Calendario completo</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaDecor} />
            <p className={styles.ctaLabel}>Prenota ora</p>
            <h2 className={styles.ctaTitle}>Assicurati il Tuo Posto<br />sotto le Stelle</h2>
            <p className={styles.ctaText}>
              Acquista i biglietti online in pochi click. Sicuro, semplice, immediato.
            </p>
            <Link href="/biglietti" className={styles.btnPrimary}>Acquista Online -&gt;</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
