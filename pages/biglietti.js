import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { events, formatDate } from '../data';
import styles from '../styles/biglietti.module.css';  // ← minuscolo

export default function BigliettiPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [qty, setQty] = useState(2);
  const [step, setStep] = useState(1); // 1: selezione, 2: dati, 3: conferma
  const [form, setForm] = useState({ nome: '', cognome: '', email: '', telefono: '' });
  const [isProcessing, setIsProcessing] = useState(false); // ← sostituisce submitted

  const event = events.find(e => e.id === selectedEvent);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simula elaborazione pagamento
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Acquista Biglietti – Estate Augustea 2026</title>
        <meta name="description" content="Acquista online i biglietti per gli spettacoli di Estate Augustea 2026. Pagamento sicuro e biglietto digitale immediato." />
      </Head>

      <Navbar />

      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>Prenota ora</p>
          <h1 className={styles.pageTitle}>Acquista<br />Biglietti</h1>
          <p className={styles.pageSubtitle}>Sicuro · Semplice · Immediato</p>
        </div>
      </div>

      <section className={styles.main}>
        <div className="container">

          {/* STEPS */}
          <div className={styles.steps}>
            {['Scegli Evento', 'I Tuoi Dati', 'Conferma'].map((s, i) => (
              <div key={i} className={`${styles.step} ${step > i + 1 ? styles.done : ''} ${step === i + 1 ? styles.active : ''}`}>
                <span className={styles.stepNum}>{step > i + 1 ? '✓' : i + 1}</span>
                <span className={styles.stepLabel}>{s}</span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Seleziona un Evento</h2>
              <div className={styles.eventsList}>
                {events.map(ev => (
                  <div
                    key={ev.id}
                    className={`${styles.eventRow} ${selectedEvent === ev.id ? styles.selectedRow : ''}`}
                    onClick={() => setSelectedEvent(ev.id)}
                  >
                    <div className={styles.eventRowImg} style={{ backgroundImage: `url(${ev.image})` }} />
                    <div className={styles.eventRowInfo}>
                      <span className={styles.eventRowCat}>{ev.category}</span>
                      <h4 className={styles.eventRowTitle}>{ev.title}</h4>
                      <p className={styles.eventRowMeta}>{formatDate(ev.date)} · {ev.time} · {ev.location}</p>
                    </div>
                    <div className={styles.eventRowPrice}>da € {ev.price}</div>
                    <div className={`${styles.radio} ${selectedEvent === ev.id ? styles.radioSelected : ''}`} />
                  </div>
                ))}
              </div>

              {selectedEvent && event && (
                <div className={styles.qtySelector}>
                  <label className={styles.qtyLabel}>Numero di biglietti</label>
                  <div className={styles.qtyControls}>
                    <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(q => Math.min(10, q + 1))}>+</button>
                  </div>
                  <p className={styles.qtyTotal}>Totale: € {(event.price * qty).toFixed(2)}</p>
                </div>
              )}

              <div className={styles.stepNav}>
                <span />
                <button
                  className={`${styles.btnNext} ${!selectedEvent ? styles.disabled : ''}`}
                  onClick={() => selectedEvent && setStep(2)}
                  disabled={!selectedEvent}
                >
                  Continua →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>I Tuoi Dati</h2>
              {event && (
                <div className={styles.selectedSummary}>
                  <span className={styles.summaryLabel}>Evento selezionato:</span>
                  <span className={styles.summaryEvent}>{event.title} · {event.location} · {qty} bigliett{qty === 1 ? 'o' : 'i'} · € {(event.price * qty).toFixed(2)}</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Nome *</label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={e => setForm({...form, nome: e.target.value})}
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Cognome *</label>
                    <input
                      type="text"
                      required
                      value={form.cognome}
                      onChange={e => setForm({...form, cognome: e.target.value})}
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="tua@email.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Telefono</label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={e => setForm({...form, telefono: e.target.value})}
                      placeholder="+39 000 0000000"
                    />
                  </div>
                </div>

                <div className={styles.formNote}>
                  <p>Il biglietto verrà inviato via email all'indirizzo indicato. Pagamento sicuro gestito da Stripe.</p>
                </div>

                <div className={styles.stepNav}>
                  <button type="button" className={styles.btnBack} onClick={() => setStep(1)}>
                    ← Indietro
                  </button>
                  <button type="submit" className={styles.btnNext} disabled={isProcessing}>
                    {isProcessing ? 'Elaborazione...' : 'Procedi al Pagamento →'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className={`${styles.stepContent} ${styles.confirmStep}`}>
              <div className={styles.confirmIcon}>◆</div>
              <h2 className={styles.confirmTitle}>Prenotazione Ricevuta</h2>
              <p className={styles.confirmText}>
                Grazie, {form.nome}! La tua prenotazione per <strong>{event?.title}</strong> è stata registrata. 
                Riceverai una email di conferma all'indirizzo <strong>{form.email}</strong> con tutti i dettagli e il tuo biglietto digitale.
              </p>
              <div className={styles.confirmDetails}>
                {event && (
                  <>
                    <div className={styles.confirmRow}><span>Evento</span><span>{event.title}</span></div>
                    <div className={styles.confirmRow}><span>Data</span><span>{formatDate(event.date)}</span></div>
                    <div className={styles.confirmRow}><span>Location</span><span>{event.location}</span></div>
                    <div className={styles.confirmRow}><span>Biglietti</span><span>{qty}</span></div>
                    <div className={styles.confirmRow}><span>Totale</span><span className={styles.totalPrice}>€ {(event.price * qty).toFixed(2)}</span></div>
                  </>
                )}
              </div>
              <Link href="/eventi" className={styles.btnBack}>← Torna agli eventi</Link>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}