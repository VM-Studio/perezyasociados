import type { Metadata } from 'next';
import Footer from './components/next-web/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './globals.css';
import Navbar from './components/next-web/Nav';
import Hero from './components/next-web/Her';
import Especialidades from './components/next-web/Especialidades';
import Sobre from './components/next-web/Sobre';
import Caracteriza from './components/next-web/Caracteriza';
import Prensa from './components/next-web/Prensa';
import CNNVideo from './components/next-web/CNNVideo';
import Instagram from './components/next-web/Instagram';
import FAQs from './components/next-web/Faqs';
import Contacto from './components/next-web/Contacto';
import Ubicacion from './components/next-web/Ubicacion';

export const metadata: Metadata = {
  title: 'Pérez & Asociados – Abogados Penalistas | CABA y Provincia de Buenos Aires',
  description: 'Estudio jurídico Pérez & Asociados. Más de 20 años de experiencia en defensa penal urgente, excarcelaciones y causas complejas en CABA y Provincia de Buenos Aires.',
  keywords: 'abogados penalistas, defensa penal, excarcelaciones, abogado penal CABA, abogado penal buenos aires, derecho penal, perez y asociados',
  authors: [{ name: 'Pérez & Asociados' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://perezyasociados.com.ar/',
    title: 'Pérez & Asociados – Abogados Penalistas',
    description: 'Especialistas en defensa penal urgente en CABA y Provincia de Buenos Aires. Más de 20 años de experiencia.',
    images: [{ url: '/og.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pérez & Asociados – Abogados Penalistas',
    description: 'Defensa penal urgente en CABA y Provincia de Buenos Aires.',
    images: ['/og.png'],
  },
};

export default function FiliyAsociadosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Pérez & Asociados – Abogados Penalistas',
    image: 'https://perezyasociados.com.ar/favicon.png',
    '@id': '',
    url: 'https://perezyasociados.com.ar/',
    telephone: '+5491158129324',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gral. Juan Domingo Perón 315',
      addressLocality: 'CABA',
      addressRegion: 'Buenos Aires',
      postalCode: 'C1038',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.6037,
      longitude: -58.3838,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
  <Hero />
  <CNNVideo />
  <Especialidades />
        <Sobre />
        <Caracteriza />
        <Prensa />
        <Instagram />
        <FAQs />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}