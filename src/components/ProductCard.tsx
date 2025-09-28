'use client';

import Link from 'next/link';
import { Badge, Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { event } from '@/lib/gtag';

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const statusProps =
    product.status === 'available'
      ? { color: 'green' as const, variant: 'solid' as const, label: 'Available' }
      : { color: 'gray' as const, variant: 'soft' as const, label: 'Coming soon' };

  const handleClick = () => {
    if (product.slug === 'sidethreadgpt') {
      event('cta_install_click', { product: product.slug, location: 'product_card' });
    }
  };

  return (
    <Card size="3" className="shadow-elegant" style={{ height: '100%' }}>
      <Flex direction="column" gap="4" height="100%">
        <Flex align="center" justify="between">
          <Badge color="violet" variant="surface">
            {product.category}
          </Badge>
          <Badge color={statusProps.color} variant={statusProps.variant} highContrast>
            {statusProps.label}
          </Badge>
        </Flex>
        <Heading size="4">{product.name}</Heading>
        <Text color="gray" size="3">
          {product.blurb}
        </Text>
        <Box mt="auto">
          {product.status === 'available' ? (
            <Button asChild variant="surface" onClick={handleClick}>
              <Link href={`/products/${product.slug}`}>
                Learn more
                <ArrowRight size={18} aria-hidden="true" style={{ marginLeft: 6 }} />
              </Link>
            </Button>
          ) : (
            <Button variant="soft" color="gray" disabled>
              Coming soon
            </Button>
          )}
        </Box>
      </Flex>
    </Card>
  );
}
