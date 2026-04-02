import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { events, formatDate } from '../../data';
import styles from '../../styles/eventdetail.module.css';  // ← minuscolo

export default function EventoDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Attendi che router sia pronto
  if (router.isFallback) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--stone)', fontFamily: 'var(--font-body)' }}>Caricamento...</p>
      </div>
    );
  }
  
  const event = events.find(e => e.slug === slug);
  
  // Evento non trovato
  if (!event) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '1rem' }}>Evento non trovato</h1>
          <p style={{ marginBottom: '2rem' }}>L'evento che stai cercando non esiste o non è più disponibile.</p>
          <Link href="/eventi" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>← Torna agli eventi</Link>
        </div>
        <Footer />
      </>
    );
  }

  // Eventi correlati (esclude corrente, prende 3)
  const related = events
    .filter(e => e.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{event.title} – Estate Augustea 2026</title>
        <meta name="description" content={event.description} />
      </Head>

      <Navbar />

      <div className={styles.hero} style={{ backgroundImage: `url(${event.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <Link href="/eventi" className={styles.back}>← Tutti gli eventi</Link>
          <span className={styles.category}>{event.category}</span>
          <h1 className={styles.title}>{event.title}</h1>
          <p className={styles.subtitle}>{event.subtitle}</p>
        </div>
      </div>

      <section className={styles.main}>
        <div className={`container ${styles.mainGrid}`}>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>Lo Spettacolo</h2>
            <p className={styles.description}>{event.description}</p>
            <p className={styles.description}>
              Un'esperienza unica nel suo genere, che unisce la potenza della cultura classica 
              alla magia delle notti estive italiane. Estate Augustea trasforma ogni sito 
              archeologico in un palcoscenico naturale senza eguali.
            </p>
            <div className={styles.divider} />
            <h3 className={styles.infoTitle}>Informazioni</h3>
            <div className={styles.infoGrid}>
              {[
                { label: 'Data', value: formatDate(event.date) },
                { label: 'Orario', value: event.time },
                { label: 'Location', value: `${event.location}, ${event.locationCity}` },
                { label: 'Categoria', value: event.category },
              ].map(item => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.ticketBox}>
              <p className={styles.ticketLabel}>Biglietti</p>
              <p className={styles.ticketPrice}>da € {event.price}</p>
              <p className={styles.ticketNote}>IVA inclusa · Prenotazione online</p>
              <Link href="/biglietti" className={styles.btnBuy}>
                Acquista Ora
              </Link>
              <div className={styles.ticketFeatures}>
                {['Pagamento sicuro', 'Biglietto digitale', 'Prenotazione immediata'].map(f => (
                  <p key={f} className={styles.ticketFeature}>
                    <span className={styles.check}>✓</span> {f}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.locationBox}>
              <p className={styles.locationLabel}>Location</p>
              <h4 className={styles.locationName}>{event.location}</h4>
              <p className={styles.locationCity}>{event.locationCity}</p>
              <Link href="/locations" className={styles.locationLink}>
                Scopri la location →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <h3 className={styles.relatedTitle}>Altri Eventi</h3>
            <div className={styles.relatedGrid}>
              {related.map(e => (
                <Link href={`/eventi/${e.slug}`} key={e.id} className={styles.relatedCard}>
                  <div className={styles.relatedImg} style={{ backgroundImage: `url(${e.image})` }} />
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCat}>{e.category}</span>
                    <h4 className={styles.relatedName}>{e.title}</h4>
                    <p className={styles.relatedLoc}>{e.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}