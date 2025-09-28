import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Box, Button, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { EmailCapture } from '@/components/EmailCapture';

export default function HomePage() {
  return (
    <main>
      <Box position="relative" style={{ overflow: 'hidden' }}>
        <div className="bg-gradient-subtle" aria-hidden="true" />
        <Container px={{ initial: '4', sm: '5' }} py={{ initial: '8', sm: '9', lg: '10' }}>
          <Flex direction="column" gap="6" align="start">
            <Box>
              <Heading size="9" mb="3">
                Productive tools for your flow
              </Heading>
              <Text size="5" color="gray" mb="4">
                simple focused apps only
              </Text>
              <Button size="3" asChild>
                <Link href="/products">
                  Browse products
                  <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: 8 }} />
                </Link>
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container px={{ initial: '4', sm: '5' }} pb="8">
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Container>
      <Container px={{ initial: '4', sm: '5' }} pb="9">
        <EmailCapture />
      </Container>
    </main>
  );
}
