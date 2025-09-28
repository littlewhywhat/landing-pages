import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Badge, Box, Container, Flex, Grid, Heading, Separator, Text } from '@radix-ui/themes';
import { products } from '@/data/products';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { ProductCTAButtons } from '@/components/ProductCTAButtons';
import { absoluteUrl } from '@/lib/utils';

export type ProductPageProps = {
  params: Promise<{ slug: string }>;
};



export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return { title: 'Product not found' };
  }

  const title = product.seo?.title ?? `${product.name} – ${product.tagline}`;
  const description = product.seo?.description ?? product.blurb;
  const canonical = `/products/${product.slug}`;
  const ogImage = product.seo?.ogImage ? absoluteUrl(product.seo.ogImage) : undefined;

  return {
    title,
    description,
    keywords: product.seo?.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonical),
      type: 'website',
      images: ogImage ? [{ url: ogImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const productUrl = absoluteUrl(`/products/${product.slug}`);
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SoftwareApplication', 'WebApplication'],
    name: product.name,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    url: productUrl,
    installUrl: product.cta?.[0]?.href ?? productUrl,
    description: product.seo?.description ?? product.blurb,
    image: product.screenshots?.map((shot) => absoluteUrl(shot.src)) ?? []
  };

  return (
    <main>
      <Container px={{ initial: '4', sm: '5' }} py={{ initial: '7', sm: '9' }}>
        <Flex gap="2" align="center" mb="5" wrap="wrap">
          <Link href="/">Home</Link>
          <Text color="gray">/</Text>
          <Link href="/products">Products</Link>
          <Text color="gray">/</Text>
          <Text>{product.name}</Text>
        </Flex>
        <Flex direction="column" gap="6" mb="7">
          <Box style={{ maxWidth: 780 }}>
            <Heading size="8" mb="3">
              {product.seo?.title ?? `${product.name} – ${product.tagline}`}
            </Heading>
            <Text color="gray" size="4">
              {product.tagline}
            </Text>
          </Box>
          <Flex gap="3" align="center" wrap="wrap">
            <Badge color="violet" variant="surface">
              {product.category}
            </Badge>
            {product.status === 'available' ? (
              <Badge color="green" variant="solid" highContrast>
                Available
              </Badge>
            ) : (
              <Badge color="gray" variant="soft">
                Coming soon
              </Badge>
            )}
          </Flex>
          <ProductCTAButtons product={product} />
        </Flex>
        {product.screenshots && product.screenshots.length > 0 && (
          <Box mb="8">
            <ScreenshotCarousel screenshots={product.screenshots} productSlug={product.slug} />
          </Box>
        )}
        <Separator size="4" mb="7" />
        <Grid columns={{ initial: '1', md: '2' }} gap="7">
          <Box style={{ maxWidth: 680 }}>
            {product.overview?.map((paragraph, index) => (
              <Text as="p" size="4" mb="4" key={index}>
                {paragraph}
              </Text>
            ))}
          </Box>
          <Box>
            <Heading size="5" mb="3">
              Key features
            </Heading>
            <Flex direction="column" gap="4">
              {product.features?.map((feature) => (
                <Box
                  key={feature.title}
                  p="4"
                  style={{
                    borderRadius: 18,
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.12), rgba(56, 189, 248, 0.08))'
                  }}
                >
                  <Heading size="4" mb="1">
                    {feature.title}
                  </Heading>
                  <Text color="gray" size="3">
                    {feature.description}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Grid>
        {product.faqs && product.faqs.length > 0 && (
          <Box mt="9">
            <Heading size="5" mb="4">
              FAQ
            </Heading>
            <Flex direction="column" gap="4">
              {product.faqs.map((faq) => (
                <Box key={faq.q}>
                  <Heading size="4" mb="1">
                    {faq.q}
                  </Heading>
                  <Text color="gray" size="3">
                    {faq.a}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        )}
      </Container>
      <Script id="product-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(productJsonLd)}
      </Script>
    </main>
  );
}
