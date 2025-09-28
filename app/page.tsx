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
        <Container px={{ initial: '4', sm: '5' }} py={{ initial: '7', sm: '8', lg: '9' }}>
          <Flex direction="column" gap="5" align="start">
            <Box style={{ maxWidth: 640 }}>
              <Heading size="9" mb="3">
                Productive tools for your flow
              </Heading>
              <Text size="5" color="gray" mb="5">
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
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '6', sm: '7', lg: '8' }}>
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Container>
      <Container px={{ initial: '4', sm: '5' }} pb={{ initial: '8', sm: '9', lg: '10' }}>
        <EmailCapture />
      </Container>
    </main>
  );
}
