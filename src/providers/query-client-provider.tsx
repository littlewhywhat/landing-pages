'use client';

import { PropsWithChildren, useState } from 'react';
import { HydrationBoundary, QueryClient, QueryClientProvider, type DehydratedState } from '@tanstack/react-query';

export type QueryClientProviderProps = PropsWithChildren<{ initialState?: DehydratedState }>;

export function QueryClientProviders({ children, initialState }: QueryClientProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: false,
            retry: 1
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={initialState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
