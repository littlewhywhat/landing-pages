'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, isAnalyticsEnabled } from '@/lib/gtag';

export function PathnameTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isAnalyticsEnabled) return;
    const path = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    pageview(path);
  }, [pathname, searchParams]);

  return null;
}
