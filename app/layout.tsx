import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import GoogleAdsTracking from "./components/GoogleAdsTracking";
import { Cormorant_Garamond, Raleway } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pérez & Asociados – Abogados Penalistas | CABA y Provincia de Buenos Aires",
  description: "Estudio jurídico con más de 20 años de experiencia en defensa penal urgente, excarcelaciones y causas complejas.",
  keywords: "abogados penalistas, defensa penal, excarcelaciones, abogado penal CABA, derecho penal, perez y asociados",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${raleway.variable} scroll-smooth`}>
      <head>
        {/* Google Ads Tracking */}
        <GoogleAdsTracking />
      </head>
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased font-sans text-gray-900 bg-white`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}