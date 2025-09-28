import type { Metadata } from 'next';
import { Container, Flex, Heading, Text } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stories and updates from the Toolz studio.',
  alternates: { canonical: '/blog' }
};

export default function BlogPage() {
  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '7', sm: '9' }}>
        <Flex direction="column" gap="4" style={{ maxWidth: 720 }}>
          <Heading size="8">Inside Toolz</Heading>
          <Text size="4" color="gray">
            We are lining up our first long-form essays and product deep dives. Check back soon for
            updates from the Toolz studio.
          </Text>
        </Flex>
      </Container>
    </main>
  );
}
