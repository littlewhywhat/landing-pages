import Link from 'next/link';
import { Box, Button, Container, Heading, Text } from '@radix-ui/themes';

export default function NotFound() {
  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '10', sm: '12' }}>
        <Box style={{ textAlign: 'center' }}>
          <Heading size="9" mb="3">
            Page not found
          </Heading>
          <Text color="gray" size="4" mb="5">
            The page you were looking for has moved or never existed.
          </Text>
          <Button asChild size="3">
            <Link href="/">Return home</Link>
          </Button>
        </Box>
      </Container>
    </main>
  );
}
