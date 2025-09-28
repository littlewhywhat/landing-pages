import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Toolz — Product Studio Hub',
  description: 'Productive tools for your flow. Explore Toolz studio experiments, blog insights, and product launches.',
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="indigo" grayColor="slate" radius="large" scaling="105%" appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
