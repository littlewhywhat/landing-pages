'use client';

import { PropsWithChildren } from 'react';
import * as Toast from '@radix-ui/react-toast';
import * as Tooltip from '@radix-ui/react-tooltip';
import { QueryClientProviders } from '@/providers/query-client-provider';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProviders>
      <Tooltip.Provider delayDuration={200} skipDelayDuration={100}>
        <Toast.Provider swipeDirection="right" duration={4000}>
          {children}
          <Toast.Viewport
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              width: 'min(360px, 90vw)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              zIndex: 50
            }}
          />
        </Toast.Provider>
      </Tooltip.Provider>
    </QueryClientProviders>
  );
}
