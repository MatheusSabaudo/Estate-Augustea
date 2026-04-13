import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#0A0A0F" />
          <meta name="color-scheme" content="dark" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Estate Augustea" />
          <meta property="og:title" content="Estate Augustea - Teatro e Cultura nelle Aree Archeologiche Italiane" />
          <meta property="og:description" content="Spettacoli teatrali, concerti, cinema e incontri culturali nelle piu belle aree archeologiche d'Italia. Estate 2026: Giugno - Settembre." />
          <meta property="og:image" content="/og-image.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Estate Augustea - Teatro e Cultura nelle Aree Archeologiche Italiane" />
          <meta name="twitter:description" content="Spettacoli teatrali, concerti, cinema e incontri culturali nelle piu belle aree archeologiche d'Italia." />
          <meta name="twitter:image" content="/og-image.svg" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Estate Augustea" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
