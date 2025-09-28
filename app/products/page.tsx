import type { Metadata } from 'next';
import { Container, Grid, Heading, Text } from '@radix-ui/themes';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'All products',
  description: 'Browse every product in the Toolz studio, including coming-soon experiments.',
  alternates: { canonical: '/products' }
};

export default function ProductsPage() {
  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '7', sm: '8', lg: '9' }}>
        <Heading size="8" mb="4">
          All products
        </Heading>
        <Text color="gray" mb="6" size="4" style={{ maxWidth: 540 }}>
          Explore every tool in the Toolz studio at a glance. More drops are on the way.
        </Text>
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
