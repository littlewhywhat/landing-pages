import Link from 'next/link';
import { Container, Flex, Separator, Text } from '@radix-ui/themes';

const footerLinks = [
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' }
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Separator size="4" my="5" />
      <Container px={{ initial: '4', sm: '5' }} pb="6">
        <Flex align="center" justify="between" wrap="wrap" gap="4">
          <Text color="gray">© {year} Toolz</Text>
          <Flex align="center" gap="4" wrap="wrap" asChild>
            <nav aria-label="Secondary">
              <Flex align="center" gap="4" wrap="wrap">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Text color="gray">{link.label}</Text>
                  </Link>
                ))}
              </Flex>
            </nav>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}
