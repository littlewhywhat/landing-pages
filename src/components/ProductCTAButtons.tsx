'use client';

import { Button, Flex } from '@radix-ui/themes';
import { ArrowUpRight } from 'lucide-react';
import { event } from '@/lib/gtag';
import type { Product } from '@/data/products';

export type ProductCTAButtonsProps = {
  product: Product;
};

export function ProductCTAButtons({ product }: ProductCTAButtonsProps) {
  if (!product.cta?.length) {
    return null;
  }

  return (
    <Flex gap="3" wrap="wrap">
      {product.cta.map((cta) => {
        const variant = cta.kind === 'primary' ? 'solid' : 'soft';
        const color = cta.kind === 'primary' ? 'violet' : 'gray';
        return (
          <Button
            key={cta.href}
            asChild
            size="3"
            variant={variant}
            color={color}
            highContrast={cta.kind === 'primary'}
            onClick={() => {
              if (product.slug === 'sidethreadgpt') {
                event('cta_install_click', {
                  product: product.slug,
                  location: 'detail_header',
                  href: cta.href
                });
              }
            }}
          >
            <a href={cta.href} target="_blank" rel="noopener noreferrer">
              {cta.label}
              <ArrowUpRight size={18} aria-hidden="true" style={{ marginLeft: 8 }} />
            </a>
          </Button>
        );
      })}
    </Flex>
  );
}
