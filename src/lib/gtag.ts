export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export const isAnalyticsEnabled = Boolean(GA_ID);

type GTag = (command: 'config' | 'event', target: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GTag;
  }
}

export function pageview(path: string) {
  if (!isAnalyticsEnabled) return;
  window.gtag?.('config', GA_ID, {
    page_path: path
  });
}

export function event(action: string, params?: Record<string, unknown>) {
  if (!isAnalyticsEnabled) return;
  window.gtag?.('event', action, params);
}
