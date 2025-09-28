'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Button, Container, Flex, Text } from '@radix-ui/themes';
import { ArrowUpRight } from 'lucide-react';
import { event } from '@/lib/gtag';

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' }
];

export function Navbar() {
  const pathname = usePathname();
  const normalizedPath = useMemo(() => pathname?.split('?')[0] ?? '/', [pathname]);

  const handleInstallClick = () => {
    event('cta_install_click', { product: 'sidethreadgpt', location: 'nav' });
  };

  return (
    <header className="site-header">
      <Container px={{ initial: '4', sm: '5' }} py="3">
        <Flex align="center" justify="between" gap="5" wrap="wrap">
          <Link href="/" aria-label="Toolz home">
            <Text size="7" weight="bold" className="brand-gradient">
              Toolz
            </Text>
          </Link>
          <Flex align="center" gap="4" wrap="wrap" justify="end">
            <Flex align="center" gap="3" wrap="wrap" className="nav-shell">
              <nav aria-label="Primary">
                <Flex align="center" gap="2" wrap="wrap">
                  {links.map((link) => {
                    const isActive = normalizedPath === link.href;
                    return (
                      <Button
                        key={link.href}
                        asChild
                        size="2"
                        radius="full"
                        variant={isActive ? 'solid' : 'soft'}
                        color={isActive ? 'violet' : 'gray'}
                        highContrast
                      >
                        <Link href={link.href} aria-current={isActive ? 'page' : undefined}>
                          {link.label}
                        </Link>
                      </Button>
                    );
                  })}
                </Flex>
              </nav>
            </Flex>
            <Button
              variant="solid"
              size="2"
              asChild
              onClick={handleInstallClick}
              color="violet"
              highContrast
              radius="full"
            >
              <Link href="/products/sidethreadgpt">
                Get SideThreadGPT
                <ArrowUpRight size={16} aria-hidden="true" style={{ marginLeft: 4 }} />
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
