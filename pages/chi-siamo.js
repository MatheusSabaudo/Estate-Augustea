import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/chisiamo.module.css';

export default function ChiSiamo() {
  return (
    <>
      <Head>
        <title>Chi Siamo – Estate Augustea 2026</title>
        <meta name="description" content="L'associazione culturale Estate Augustea organizza spettacoli teatrali, concerti e cinema nelle aree archeologiche italiane. Scopri la nostra storia e missione." />
      </Head>

      <Navbar />

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>La nostra storia</p>
          <h1 className={styles.pageTitle}>Chi Siamo</h1>
          <p className={styles.pageSubtitle}>Un'associazione culturale nata per unire arte, storia e territorio</p>
        </div>
      </div>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2 className={styles.sectionTitle}>L'Arte Incontra l'Antichità</h2>
              <p className={styles.paragraph}>
                Estate Augustea è un'associazione culturale fondata nel 2018 con l'obiettivo di 
                valorizzare il patrimonio archeologico italiano attraverso eventi culturali di alto 
                profilo. Dalle Terme di Caracalla al Teatro Greco di Segesta, trasformiamo i siti 
                storici in palcoscenici viventi.
              </p>
              <p className={styles.paragraph}>
                La nostra missione è rendere accessibile la cultura classica a un pubblico ampio 
                e diversificato, creando ponti tra passato e presente. Ogni spettacolo, ogni 
                concerto, ogni incontro è pensato per offrire un'esperienza immersiva e indimenticabile.
              </p>
            </div>
            <div className={styles.introImage}>
              <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>I nostri principi</p>
            <h2 className={styles.sectionTitle}>Ciò in cui crediamo</h2>
            <div className="divider" />
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎭</div>
              <h3 className={styles.valueTitle}>Arte Accessibile</h3>
              <p className={styles.valueDesc}>Crediamo che la cultura debba essere alla portata di tutti. Per questo offriamo prezzi accessibili e agevolazioni per giovani e studenti.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🏛️</div>
              <h3 className={styles.valueTitle}>Valorizzazione del Patrimonio</h3>
              <p className={styles.valueDesc}>Ogni evento è un'occasione per riscoprire e preservare i nostri siti archeologici, raccontandone la storia in modo nuovo.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌿</div>
              <h3 className={styles.valueTitle}>Sostenibilità</h3>
              <p className={styles.valueDesc}>Organizziamo eventi a basso impatto ambientale, rispettando i luoghi che ci ospitano e promuovendo pratiche eco-sostenibili.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Collaborazione Territoriale</h3>
              <p className={styles.valueDesc}>Lavoriamo a stretto contatto con enti locali, soprintendenze e comunità per creare un circuito culturale diffuso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>2018</span>
              <span className={styles.statLabel}>Anno di Fondazione</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>7+</span>
              <span className={styles.statLabel}>Siti Archeologici</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Spettacoli Realizzati</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>25k+</span>
              <span className={styles.statLabel}>Spettatori</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Il team</p>
            <h2 className={styles.sectionTitle}>Le persone dietro<br />Estate Augustea</h2>
            <div className="divider" />
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80)' }} />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Alessandra Rossi</h3>
                <p className={styles.teamRole}>Direttrice Artistica</p>
                <p className={styles.teamBio}>Storica dell'arte e curatrice, ha lavorato per anni nella valorizzazione dei siti UNESCO italiani.</p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80)' }} />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Marco Ferri</h3>
                <p className={styles.teamRole}>Direttore Organizzativo</p>
                <p className={styles.teamBio}>Esperto di produzione culturale e gestione eventi, coordina la logistica di ogni spettacolo.</p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80)' }} />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Giulia Conti</h3>
                <p className={styles.teamRole}>Responsabile Comunicazione</p>
                <p className={styles.teamBio}>Giornalista e social media manager, racconta l'associazione e i suoi eventi con passione.</p>
              </div>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImg} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80)' }} />
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Luca Bianchi</h3>
                <p className={styles.teamRole}>Coordinatore Tecnico</p>
                <p className={styles.teamBio}>Tecnico del suono e delle luci, garantisce la perfetta riuscita tecnica di ogni spettacolo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Vuoi collaborare con noi?</h2>
            <p className={styles.ctaText}>
              Sei un artista, una compagnia teatrale o un professionista della cultura?<br />
              Contattaci per proporre la tua idea o collaborare con Estate Augustea.
            </p>
            <Link href="/contatti" className={styles.btnPrimary}>Contattaci →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}