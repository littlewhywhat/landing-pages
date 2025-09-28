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
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' }
];

export function Navbar() {
  const pathname = usePathname();
  const normalizedPath = useMemo(() => pathname?.split('?')[0] ?? '/', [pathname]);

  const handleInstallClick = () => {
    event('cta_install_click', { product: 'sidethreadgpt', location: 'nav' });
  };

  return (
    <header>
      <Container px={{ initial: '4', sm: '5' }} py="4">
        <Flex align="center" justify="between" gap="6" wrap="wrap">
          <Link href="/" aria-label="Toolz home">
            <Text size="6" weight="bold">
              Toolz
            </Text>
          </Link>
          <Flex align="center" gap="5">
            <Flex align="center" gap="4" wrap="wrap" asChild>
              <nav aria-label="Primary">
                <Flex align="center" gap="4" wrap="wrap">
                  {links.map((link) => {
                    const isActive = normalizedPath === link.href;
                    return (
                      <Link key={link.href} href={link.href} aria-current={isActive ? 'page' : undefined}>
                        <Text color={isActive ? 'violet' : 'gray'} weight={isActive ? 'bold' : 'medium'}>
                          {link.label}
                        </Text>
                      </Link>
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
