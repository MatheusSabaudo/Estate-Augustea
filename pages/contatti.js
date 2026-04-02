import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/contatti.module.css';

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: '',
    messaggio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula invio del form (qui andrebbe la chiamata API reale)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ nome: '', email: '', oggetto: '', messaggio: '' });
      
      // Reset del messaggio di conferma dopo 5 secondi
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Contatti – Estate Augustea 2026</title>
        <meta name="description" content="Contattaci per informazioni sugli eventi, collaborazioni artistiche, proposte di location o semplicemente per maggiori dettagli su Estate Augustea 2026." />
      </Head>

      <Navbar />

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>Contattaci</p>
          <h1 className={styles.pageTitle}>Scrivici</h1>
          <p className={styles.pageSubtitle}>Siamo qui per rispondere a ogni tua domanda</p>
        </div>
      </div>

      {/* CONTATTI SECTION */}
      <section className={styles.contactsSection}>
        <div className="container">
          <div className={styles.contactsGrid}>
            
            {/* INFO CONTATTI */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Informazioni</h2>
              <p className={styles.infoText}>
                Per qualsiasi informazione sugli eventi, collaborazioni artistiche, 
                proposte di location o semplicemente per maggiori dettagli, 
                non esitare a contattarci.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Telefono</h4>
                    <a href="tel:+39061234567">+39 06 1234 567</a>
                    <p>Lun-Ven, 10:00 – 18:00</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Email</h4>
                    <a href="mailto:info@estateaugustea.it">info@estateaugustea.it</a>
                    <p>Per informazioni generali</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Sede</h4>
                    <p>Via del Corso 123<br />00187 Roma, Italia</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <div className={styles.infoContent}>
                    <h4>Social</h4>
                    <div className={styles.socialLinks}>
                      <a href="https://instagram.com/estateaugustea" target="_blank" rel="noreferrer">Instagram</a>
                      <a href="https://facebook.com/estateaugustea" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className={styles.contactForm}>
              <h2 className={styles.formTitle}>Scrivici un messaggio</h2>
              
              {isSubmitted && (
                <div className={styles.successMessage}>
                  ✓ Messaggio inviato con successo! Ti risponderemo al più presto.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="nome">Nome e Cognome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="oggetto">Oggetto *</label>
                  <input
                    type="text"
                    id="oggetto"
                    name="oggetto"
                    required
                    value={formData.oggetto}
                    onChange={handleChange}
                    placeholder="Informazioni su..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="messaggio">Messaggio *</label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    required
                    rows={6}
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>

                <button type="submit" className={styles.btnSubmit} disabled={isLoading}>
                  {isLoading ? 'Invio in corso...' : 'Invia Messaggio →'}
                </button>

                <p className={styles.formNote}>
                  I campi contrassegnati con * sono obbligatori. La tua privacy è importante per noi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAPPA (opzionale) */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapOverlay}>
              <p className={styles.mapText}>
                📍 Sede principale: Roma, Italia<br />
                Gli eventi si svolgono in diverse location archeologiche italiane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>FAQ</p>
            <h2 className={styles.sectionTitle}>Domande frequenti</h2>
            <div className="divider" />
          </div>

          <div className={styles.faqGrid}>
            {[
              {
                q: 'Come posso acquistare i biglietti?',
                a: 'Puoi acquistare i biglietti online direttamente dal nostro sito nella sezione "Acquista Biglietti". Il pagamento è sicuro e riceverai il biglietto digitale via email.'
              },
              {
                q: 'I biglietti sono rimborsabili?',
                a: 'In caso di annullamento dell\'evento per cause di forza maggiore, il biglietto verrà interamente rimborsato. Per rinunce personali, non è previsto rimborso ma è possibile cedere il biglietto a un\'altra persona.'
              },
              {
                q: 'Gli eventi si svolgono anche in caso di pioggia?',
                a: 'La maggior parte degli eventi si svolge all\'aperto. In caso di maltempo, valutiamo spostamenti al coperto o rinvii. Ti contatteremo via email in caso di variazioni.'
              },
              {
                q: 'Come posso collaborare con Estate Augustea?',
                a: 'Se sei un artista, una compagnia teatrale o vuoi proporre una collaborazione, scrivici all\'indirizzo collaborazioni@estateaugustea.it o compila il form qui sopra.'
              }
            ].map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.q}</h3>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <h2 className={styles.newsletterTitle}>Newsletter</h2>
            <p className={styles.newsletterText}>
              Iscriviti per ricevere aggiornamenti sugli eventi, anteprime e offerte esclusive.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="La tua email" required />
              <button type="submit">Iscriviti</button>
            </form>
            <p className={styles.newsletterNote}>Non inviamo spam. Puoi cancellarti quando vuoi.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}