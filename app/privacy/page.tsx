import type { Metadata } from 'next';
import { Box, Container, Heading, Text } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Learn how Toolz handles your data and privacy preferences.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '6', sm: '8' }}>
        <Heading size="8" mb="4">
          Privacy Policy
        </Heading>
        <Box maxWidth="720px">
          <Text as="p" mb="4" color="gray" size="3">
            We build focused tools and collect only the telemetry we need to keep them running well. SideThreadGPT operates
            entirely in your browser — we never see your chats.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>What we collect:</strong> Anonymous analytics events that help us understand feature usage. If you join the
            waitlist, we store your email address for launch announcements.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>How we use data:</strong> To send product updates you opt into, improve stability, and prioritize new tools.
            We never sell data to third parties.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>Your choices:</strong> You can opt out of emails at any time via the unsubscribe link. To delete your data,
            just reply to any Toolz email and we will handle it.
          </Text>
          <Text as="p" color="gray" size="2">
            This policy will evolve as Toolz grows. Last updated {new Date().getFullYear()}.
          </Text>
        </Box>
      </Container>
    </main>
  );
}
