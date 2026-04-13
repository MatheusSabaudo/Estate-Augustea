import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const pageStyle = {
  minHeight: '100vh',
  padding: '8rem 0 4rem',
  background: 'linear-gradient(180deg, rgba(201, 168, 76, 0.06), transparent 18%), var(--night)',
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Estate Augustea</title>
        <meta name="description" content="Informativa privacy dimostrativa del progetto Estate Augustea." />
      </Head>

      <Navbar />

      <main style={pageStyle}>
        <div className="container">
          <article style={cardStyle}>
            <p style={{ color: 'var(--gold-light)', marginBottom: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-ui)', fontSize: '0.8rem' }}>
              Documento dimostrativo
            </p>
            <h1 style={{ marginBottom: '1rem', color: 'var(--gold)' }}>Privacy Policy</h1>
            <p>
              Questa pagina e inclusa a scopo dimostrativo all'interno del progetto Estate Augustea.
              I contenuti non rappresentano una policy legale definitiva e non descrivono un servizio commerciale attivo.
            </p>

            <h2 style={sectionTitleStyle}>Dati trattati nel prototipo</h2>
            <p>
              I moduli presenti nel sito simulano un flusso di prenotazione e di contatto. Nella versione demo
              i dati inseriti non vengono inviati a server esterni e non sono conservati in modo persistente.
            </p>

            <h2 style={sectionTitleStyle}>Finalita della demo</h2>
            <p>
              Il progetto e stato sviluppato per presentare un concept di sito culturale dedicato a eventi in
              location archeologiche italiane. Il suo obiettivo e mostrare struttura, branding, navigazione e interazioni.
            </p>

            <h2 style={sectionTitleStyle}>Contatti</h2>
            <p>
              Per richieste relative al progetto dimostrativo puoi usare l'indirizzo{' '}
              <a href="mailto:info@estateaugustea.it" style={{ color: 'var(--gold)' }}>
                info@estateaugustea.it
              </a>.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
