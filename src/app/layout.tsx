import GlobalStyles from '@mui/material/GlobalStyles';
import { Metadata } from 'next';
import * as React from 'react';

// import '@/styles/globals.css';
// import '@/styles/react-slick.css';
// import 'slick-carousel/slick/slick.css';
import { Footer, Header } from '@/components/organisms';

import { SITE_CONFIG } from '@/constants';
import { MUIProvider } from '@/providers';
import { GLOBAL_STYLES } from '@/styles';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    /*
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
    */
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
  },
  authors: [
    {
      name: 'Maicon Pazin',
      url: 'https://www.linkedin.com/in/maicon-pazin-45517145/',
    },
  ],
};

//# How to use multiple root layouts (Route Groups):
//# https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <GlobalStyles styles={GLOBAL_STYLES} />
      <body>
        <MUIProvider>
          <Header />
          {children}
          <Footer />
        </MUIProvider>
      </body>
    </html>
  );
}
