import Hero from '@/components/Hello';
import Navigation from '@/components/Navigation';
import ProductsShowcase from '@/components/ProductsShowcase';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from '@radix-ui/themes';

export default function Home() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.18), transparent 60%), #09090b',
      }}
    >
      <Navigation />
      <main>
        {/* Hero Section */}
        <Flex
          direction="column"
          align="center"
          gap="6"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 24px 64px', textAlign: 'center' }}
        >
          <Badge color="indigo" variant="surface">
            Product Studio
          </Badge>
          <Hero />
          <Text size="5" color="gray" style={{ maxWidth: '600px' }}>
            We build productive tools that seamlessly integrate into your workflow, helping you achieve more with less effort.
          </Text>

          <Flex gap="4" wrap="wrap" justify="center" mt="4">
            <Button size="3" asChild>
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button size="3" variant="soft" asChild>
              <Link href="/blog">Read Our Blog</Link>
            </Button>
          </Flex>
        </Flex>

        <Separator orientation="horizontal" size="4" />

        {/* Products Section */}
        <Flex
          id="products"
          direction="column"
          align="center"
          gap="8"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}
        >
          <ProductsShowcase />
        </Flex>

        <Separator orientation="horizontal" size="4" />

        {/* About Section */}
        <Flex
          direction="column"
          align="center"
          gap="6"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}
        >
          <Heading size="6" weight="bold">
            About Toolz Studio
          </Heading>
          <Text size="4" color="gray" style={{ lineHeight: '1.6' }}>
            We&apos;re passionate about creating tools that enhance productivity and streamline workflows. 
            Our team focuses on building intuitive, powerful solutions that integrate seamlessly into your daily routine, 
            whether you&apos;re browsing the web, managing tasks, or developing code.
          </Text>
          <Text size="3" color="gray">
            More tools coming soon. Stay tuned for updates on our latest projects.
          </Text>
        </Flex>
      </main>
    </Box>
  );
}
