import type { Metadata } from 'next';
import { Box, Container, Heading, Text } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'The guidelines for using Toolz products and experiments.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '6', sm: '8' }}>
        <Heading size="8" mb="4">
          Terms of Use
        </Heading>
        <Box maxWidth="720px">
          <Text as="p" mb="4" color="gray" size="3">
            Toolz builds experiments for creative, productive teams. By using our apps you agree to use them responsibly and
            to respect other users.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>Beta software:</strong> Many Toolz products launch in beta. Expect rapid changes and occasional rough edges.
            We appreciate your feedback.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>Acceptable use:</strong> You may not use Toolz products for unlawful activity, spam, or abuse of other
            services. Violations can lead to revoked access.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>Liability:</strong> Toolz products are provided “as is”. We are not liable for damages that arise from using
            the software.
          </Text>
          <Text as="p" mb="3" size="3">
            <strong>Updates:</strong> We may update these terms at any time. Continued use of Toolz products means you accept the
            latest version.
          </Text>
        </Box>
      </Container>
    </main>
  );
}
