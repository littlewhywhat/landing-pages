import Hello from '@/components/Hello';
import { posts } from '@/data/posts';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Separator,
  Text,
} from '@radix-ui/themes';
import NextLink from 'next/link';

export default function Home() {
  const env = process.env.NEXT_PUBLIC_ENV ?? 'preview';

  const studioPillars = [
    {
      title: 'Concept sprints',
      description: 'Rapid exploration cycles to validate workflows before a single feature ships.',
    },
    {
      title: 'Cross-surface craft',
      description: 'Browser extensions, mobile apps, and web canvases designed to feel native everywhere.',
    },
    {
      title: 'Flow-first UX',
      description: 'Calm visuals, accessible interactions, and copy that keeps makers in motion.',
    },
  ];

  const products = [
    {
      name: 'SideThreadGPT',
      tag: 'Chrome extension',
      description: 'Spin up an AI-powered side thread inside any discussion to capture notes and tasks without leaving the page.',
      href: '/products/sidethreadgpt',
      status: 'Available now',
      comingSoon: false,
    },
    {
      name: 'PulseKit',
      tag: 'iOS companion',
      description: 'Sync the highlights from your calendar, recordings, and SideThreadGPT conversations into a daily digest.',
      href: '#',
      status: 'Coming soon',
      comingSoon: true,
    },
    {
      name: 'PromptCanvas',
      tag: 'Web app',
      description: 'Collaborative prompt boards to co-design automations and share repeatable templates with your team.',
      href: '#',
      status: 'Coming soon',
      comingSoon: true,
    },
  ];

  const featuredPosts = posts.slice(0, 2);

  return (
    <Box
      asChild
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.18), transparent 60%), #09090b',
      }}
    >
      <main>
        <Flex direction="column" gap="9" style={{ maxWidth: '1040px', margin: '0 auto', padding: '96px 24px' }}>
          <Flex direction="column" gap="5" align="center" style={{ textAlign: 'center' }}>
            <Badge color="jade" variant="surface">
              Productive tools for your flow
            </Badge>
            <Hello />
            <Text size="4" color="gray" style={{ maxWidth: '720px' }}>
              Toolz is a product studio delivering focused helpers across browser, mobile, and web. We prototype fast, respect
              attention, and launch the tools we want beside us while we work.
            </Text>
            <Flex gap="4" wrap="wrap" justify="center">
              <Button size="3" asChild>
                <NextLink href="/products/sidethreadgpt">Explore SideThreadGPT</NextLink>
              </Button>
              <Button size="3" variant="soft" asChild>
                <NextLink href="/blog">Visit the blog</NextLink>
              </Button>
            </Flex>
          </Flex>

          <Card
            variant="surface"
            size="4"
            style={{
              background:
                'linear-gradient(135deg, rgba(14, 165, 233, 0.18), transparent 60%), rgba(15, 23, 42, 0.85)',
            }}
          >
            <Flex direction="column" gap="3" align="center" style={{ textAlign: 'center' }}>
              <Badge color="blue" variant="soft">
                Studio environment
              </Badge>
              <Heading size="6" weight="bold">
                {env.toUpperCase()}
              </Heading>
              <Text size="2" color="gray" style={{ maxWidth: '420px' }}>
                Every Toolz release ships through preview environments that mirror production. Flip
                <code style={{ margin: '0 4px' }}>NEXT_PUBLIC_ENV</code>
                to tailor the context shown here.
              </Text>
            </Flex>
          </Card>

          <Flex direction="column" gap="5">
            <Flex direction="column" gap="3" align="start">
              <Badge variant="soft" color="indigo">
                Studio approach
              </Badge>
              <Heading size="7" weight="bold">
                How Toolz ships ideas
              </Heading>
              <Text size="4" color="gray" style={{ maxWidth: '720px' }}>
                We iterate with operators, design for deep focus, and deliver automations that quietly accelerate daily work.
              </Text>
            </Flex>
            <Grid columns={{ initial: '1', md: '3' }} gap="4">
              {studioPillars.map((pillar) => (
                <Card key={pillar.title} size="3" variant="classic">
                  <Flex direction="column" gap="2">
                    <Heading as="h3" size="4">
                      {pillar.title}
                    </Heading>
                    <Text size="2" color="gray">
                      {pillar.description}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex direction="column" gap="5">
            <Flex direction="column" gap="3" align="start">
              <Badge variant="soft" color="jade">
                Launches
              </Badge>
              <Heading size="7" weight="bold">
                Products from the Toolz studio
              </Heading>
              <Text size="4" color="gray" style={{ maxWidth: '720px' }}>
                A growing stack of extensions, mobile, and web apps that plug into your existing flow.
              </Text>
            </Flex>
            <Grid columns={{ initial: '1', md: '3' }} gap="4">
              {products.map((product) => (
                <Card key={product.name} size="3" variant="classic" style={{ height: '100%' }}>
                  <Flex direction="column" gap="3" style={{ height: '100%' }}>
                    <Flex align="center" gap="3" wrap="wrap">
                      <Badge color="indigo" variant="soft">
                        {product.tag}
                      </Badge>
                      <Badge color={product.comingSoon ? 'gray' : 'jade'} variant="surface">
                        {product.status}
                      </Badge>
                    </Flex>
                    <Heading as="h3" size="5">
                      {product.name}
                    </Heading>
                    <Text size="2" color="gray">
                      {product.description}
                    </Text>
                    <Flex mt="auto">
                      {product.comingSoon ? (
                        <Button size="2" variant="soft" disabled>
                          Coming soon
                        </Button>
                      ) : (
                        <Button size="2" asChild>
                          <NextLink href={product.href}>View product</NextLink>
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Flex>

          <Flex direction="column" gap="5">
            <Flex direction="column" gap="3" align="start">
              <Badge variant="soft" color="gray">
                Latest from the blog
              </Badge>
              <Heading size="7" weight="bold">
                Dispatches from the Toolz team
              </Heading>
              <Text size="4" color="gray" style={{ maxWidth: '720px' }}>
                Follow along as we share experiments, frameworks, and lessons learned while shipping the Toolz suite.
              </Text>
            </Flex>
            <Grid columns={{ initial: '1', md: '2' }} gap="4">
              {featuredPosts.map((post) => (
                <Card key={post.slug} size="3" variant="classic" style={{ height: '100%' }}>
                  <Flex direction="column" gap="3" style={{ height: '100%' }}>
                    <Text size="2" color="gray">
                      {post.publishedAt} · {post.readingTime}
                    </Text>
                    <Heading as="h3" size="5">
                      {post.title}
                    </Heading>
                    <Text size="2" color="gray">
                      {post.excerpt}
                    </Text>
                    <Flex mt="auto">
                      <Link asChild color="indigo">
                        <NextLink href={`/blog/${post.slug}`}>Read article</NextLink>
                      </Link>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
            <Flex>
              <Link asChild color="indigo">
                <NextLink href="/blog">Browse all articles</NextLink>
              </Link>
            </Flex>
          </Flex>

          <Separator size="4" my="4" />
          <Flex direction="column" gap="3" align="center" style={{ textAlign: 'center' }}>
            <Heading size="6" weight="bold">
              Have an idea we should explore?
            </Heading>
            <Text size="3" color="gray" style={{ maxWidth: '520px' }}>
              We collaborate with teams who crave calm automation. Reach out if you have a workflow that deserves a focused Tool.
            </Text>
            <Button size="3" variant="soft" asChild>
              <Link href="mailto:hello@toolz.studio">Start a thread</Link>
            </Button>
          </Flex>
        </Flex>
      </main>
    </Box>
  );
}
