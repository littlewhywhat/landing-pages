import Navigation from '@/components/Navigation';
import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes';
import NextLink from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'building-sidethreadgpt',
    title: 'Building SideThreadGPT: Bringing AI to Your Browser',
    excerpt: 'Learn about the journey of creating our first Chrome extension and the challenges we overcame to bring AI assistance directly to your browsing experience.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Product Development',
  },
  {
    id: 'productivity-workflows',
    title: 'The Science of Productive Workflows',
    excerpt: 'Discover the research-backed principles we use to design tools that genuinely enhance productivity without adding complexity to your daily routine.',
    date: 'March 8, 2024',
    readTime: '7 min read',
    category: 'Productivity',
  },
  {
    id: 'browser-extensions-future',
    title: 'The Future of Browser Extensions in the AI Era',
    excerpt: 'Exploring how AI is transforming browser extensions and what this means for the future of web-based productivity tools.',
    date: 'February 28, 2024',
    readTime: '6 min read',
    category: 'Technology',
  },
  {
    id: 'design-principles',
    title: 'Our Design Principles: Simplicity Meets Power',
    excerpt: 'A deep dive into the design philosophy that guides every product we create at Toolz Studio, focusing on intuitive interfaces and powerful functionality.',
    date: 'February 20, 2024',
    readTime: '4 min read',
    category: 'Design',
  },
];

export default function Blog() {
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
        <Flex
          direction="column"
          align="center"
          gap="8"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}
        >
          <Flex direction="column" gap="4" align="center">
            <Badge color="indigo" variant="surface">
              Insights & Updates
            </Badge>
            <Heading size="8" weight="bold">
              Blog
            </Heading>
            <Text size="4" color="gray" style={{ maxWidth: '600px' }}>
              Thoughts on productivity, technology, and the tools that shape our digital workflows.
            </Text>
          </Flex>

          <Flex direction="column" gap="6" style={{ width: '100%' }}>
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                size="3"
                variant="surface"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.05), transparent 60%), rgba(15, 23, 42, 0.85)',
                }}
              >
                <Link asChild style={{ textDecoration: 'none', color: 'inherit' }}>
                  <NextLink href={`/blog/${post.id}`}>
                    <Flex direction="column" gap="4" align="start">
                      <Flex justify="between" align="start" width="100%">
                        <Badge variant="soft" size="1">
                          {post.category}
                        </Badge>
                        <Flex gap="3" align="center">
                          <Text size="1" color="gray">{post.date}</Text>
                          <Text size="1" color="gray">•</Text>
                          <Text size="1" color="gray">{post.readTime}</Text>
                        </Flex>
                      </Flex>

                      <Flex direction="column" gap="2" align="start">
                        <Heading as="h2" size="5" weight="bold">
                          {post.title}
                        </Heading>
                        <Text size="3" color="gray" style={{ lineHeight: '1.5' }}>
                          {post.excerpt}
                        </Text>
                      </Flex>

                      <Text size="2" color="indigo" weight="medium">
                        Read more →
                      </Text>
                    </Flex>
                  </NextLink>
                </Link>
              </Card>
            ))}
          </Flex>

          <Text size="3" color="gray" mt="6">
            More articles coming soon. Follow our journey as we build the future of productivity tools.
          </Text>
        </Flex>
      </main>
    </Box>
  );
}