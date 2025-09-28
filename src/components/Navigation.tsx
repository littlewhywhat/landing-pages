import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

export default function Navigation() {
  return (
    <Box
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(9, 9, 11, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Flex
        justify="between"
        align="center"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
        }}
      >
        <NextLink href="/" style={{ textDecoration: 'none' }}>
          <Heading size="5" weight="bold">
            <Text as="span" color="indigo">
              Toolz
            </Text>
          </Heading>
        </NextLink>

        <Flex gap="6" align="center">
          <Link asChild>
            <NextLink href="/">Home</NextLink>
          </Link>
          <Link asChild>
            <NextLink href="/blog">Blog</NextLink>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}