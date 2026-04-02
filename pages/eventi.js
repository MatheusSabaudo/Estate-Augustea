import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { events, categories, formatDate, formatDateShort } from '../data';
import styles from '../styles/events.module.css';

export default function EventiPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  
  // Filtra eventi per categoria
  const filteredEvents = selectedCategory === 'Tutti'
    ? events
    : events.filter(event => event.category === selectedCategory);
  
  // Ordina eventi per data (dal più recente al più lontano)
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <Head>
        <title>Eventi – Estate Augustea 2026</title>
        <meta name="description" content="Scopri tutti gli eventi di Estate Augustea 2026: spettacoli teatrali, concerti, opera, cinema e incontri culturali nelle aree archeologiche italiane." />
      </Head>

      <Navbar />

      {/* HERO */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <p className={styles.eyebrow}>Calendario</p>
          <h1 className={styles.pageTitle}>Eventi 2026</h1>
          <p className={styles.pageSubtitle}>Giugno – Settembre · Spettacoli sotto le stelle</p>
        </div>
      </div>

      {/* EVENTI SECTION */}
      <section className={styles.eventsSection}>
        <div className="container">
          
          {/* FILTRI */}
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Categoria</span>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* RISULTATI COUNT */}
          <div className={styles.resultsCount}>
            {sortedEvents.length} evento{sortedEvents.length !== 1 ? 'i' : ''} trovati
          </div>

          {/* GRIGLIA EVENTI */}
          {sortedEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {sortedEvents.map(event => {
                const { day, month } = formatDateShort(event.date);
                return (
                  <Link href={`/eventi/${event.slug}`} key={event.id} className={styles.eventCard}>
                    <div className={styles.eventImg} style={{ backgroundImage: `url(${event.image})` }}>
                      <div className={styles.eventDate}>
                        <span className={styles.day}>{day}</span>
                        <span className={styles.month}>{month}</span>
                      </div>
                      <span className={styles.eventCategory}>{event.category}</span>
                    </div>
                    <div className={styles.eventBody}>
                      <h3 className={styles.eventTitle}>{event.title}</h3>
                      <p className={styles.eventSub}>{event.subtitle}</p>
                      <div className={styles.eventMeta}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {formatDate(event.date)}
                      </div>
                      <div className={styles.eventMeta}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {event.location}, {event.locationCity}
                      </div>
                      <div className={styles.eventFooter}>
                        <span className={styles.eventPrice}>da € {event.price}</span>
                        <span className={styles.btnBuy}>Acquista</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>Nessun evento trovato per la categoria "{selectedCategory}".</p>
              <button 
                className={styles.resetBtn}
                onClick={() => setSelectedCategory('Tutti')}
              >
                Mostra tutti gli eventi
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA BIGLIETTI */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <p className={styles.ctaLabel}>Prenota ora</p>
            <h2 className={styles.ctaTitle}>Assicurati il Tuo Posto</h2>
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