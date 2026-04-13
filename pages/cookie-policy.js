import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const pageStyle = {
  minHeight: '100vh',
  padding: '8rem 0 4rem',
  background: 'linear-gradient(180deg, rgba(139, 58, 42, 0.12), transparent 18%), var(--night)',
};

const cardStyle = {
  maxWidth: '860px',
  margin: '0 auto',
  padding: '2.5rem',
  background: 'rgba(20, 20, 32, 0.88)',
  border: '1px solid rgba(201, 168, 76, 0.18)',
  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.28)',
};

const sectionTitleStyle = {
  margin: '2rem 0 0.6rem',
  fontSize: '1.15rem',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy - Estate Augustea</title>
        <meta name="description" content="Cookie policy dimostrativa del progetto Estate Augustea." />
      </Head>

      <Navbar />

      <main style={pageStyle}>
        <div className="container">
          <article style={cardStyle}>
            <p style={{ color: 'var(--gold-light)', marginBottom: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
              Documento dimostrativo
            </p>
            <h1 style={{ marginBottom: '1rem', color: 'var(--gold)' }}>Cookie Policy</h1>
            <p>
              Questa pagina e stata aggiunta per completare il progetto demo. Non descrive un'infrastruttura
              di tracciamento reale o una configurazione analytics in uso su un sito commerciale attivo.
            </p>

            <h2 style={sectionTitleStyle}>Uso dei cookie nella demo</h2>
            <p>
              Nel prototipo attuale non sono configurati sistemi di profilazione, banner cookie o strumenti di analytics
              lato client. La navigazione serve esclusivamente a mostrare l'esperienza utente del concept.
            </p>

            <h2 style={sectionTitleStyle}>Risorse esterne</h2>
            <p>
              Il sito carica font Google e immagini remote per simulare un progetto realistico. In una versione
              production-ready sarebbe opportuno documentare meglio queste risorse e valutarne l'hosting locale quando necessario.
            </p>

            <h2 style={sectionTitleStyle}>Aggiornamenti</h2>
            <p>
              Se il progetto venisse evoluto in un sito reale, questa pagina dovrebbe essere sostituita con un testo
              legale conforme alla normativa applicabile.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
