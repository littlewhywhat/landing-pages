import type { Metadata } from 'next';
import { Box, Container, Flex, Grid, Heading, Select, Text } from '@radix-ui/themes';
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
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '6', sm: '8' }}>
        <Heading size="8" mb="4">
          All products
        </Heading>
        <Text color="gray" mb="5">
          Explore every tool in the Toolz studio. Filters are coming soon.
        </Text>
        <Flex gap="4" direction={{ initial: 'column', sm: 'row' }} mb="6">
          <Box>
            <Text size="2" color="gray" mb="2" as="div">
              Category
            </Text>
            <Select.Root defaultValue="all" disabled>
              <Select.Trigger placeholder="All categories" />
              <Select.Content>
                <Select.Item value="all">All categories</Select.Item>
                <Select.Item value="Extension">Extension</Select.Item>
                <Select.Item value="Mobile">Mobile</Select.Item>
                <Select.Item value="Web">Web</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text size="2" color="gray" mb="2" as="div">
              Status
            </Text>
            <Select.Root defaultValue="all" disabled>
              <Select.Trigger placeholder="All statuses" />
              <Select.Content>
                <Select.Item value="all">All statuses</Select.Item>
                <Select.Item value="available">Available</Select.Item>
                <Select.Item value="coming-soon">Coming soon</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
        </Flex>
        <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Container>
    </main>
  );
}
