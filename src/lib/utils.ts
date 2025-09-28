export function absoluteUrl(path: string, base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://toolz.app') {
  const formattedPath = path.startsWith('http') ? path : `${path.startsWith('/') ? '' : '/'}${path}`;
  return new URL(formattedPath, base).toString();
}

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
