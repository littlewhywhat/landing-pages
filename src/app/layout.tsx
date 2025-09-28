import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Toolz - Productive tools for your flow',
  description: 'A product studio showcasing productive tools including extensions, mobile & web apps',
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
