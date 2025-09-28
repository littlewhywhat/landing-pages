import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import { Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AppProviders } from '@/components/AppProviders';
import { PathnameTracker } from '@/components/PathnameTracker';
import { GA_ID, isAnalyticsEnabled } from '@/lib/gtag';
import { absoluteUrl } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://toolz.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Toolz — Productive tools for your flow',
    template: '%s | Toolz'
  },
  description: 'simple focused apps only',
  alternates: {
    canonical: '/' 
  },
  openGraph: {
    title: 'Toolz — Productive tools for your flow',
    description: 'simple focused apps only',
    url: siteUrl,
    siteName: 'Toolz',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toolz — Productive tools for your flow',
    description: 'simple focused apps only'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('#organization'),
      name: 'Toolz',
      url: siteUrl,
      logo: absoluteUrl('/favicon.svg'),
      sameAs: []
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('#website'),
      url: siteUrl,
      name: 'Toolz',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/products?query={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@id': absoluteUrl('#organization')
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="inherit" accentColor="violet" grayColor="slate" radius="large" scaling="100%">
          <AppProviders>
            <Navbar />
            <Suspense fallback={null}>
              <PathnameTracker />
            </Suspense>
            {children}
            <Footer />
          </AppProviders>
        </Theme>
        {isAnalyticsEnabled && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script id="toolz-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  );
}
