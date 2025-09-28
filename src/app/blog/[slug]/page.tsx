import { posts } from '@/data/posts';
import { Badge, Box, Flex, Heading, Link, Separator, Text } from '@radix-ui/themes';
import type { Metadata } from 'next';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((entry) => entry.slug === params.slug);
  if (!post) {
    return {
      title: 'Article not found — Toolz',
    };
  }

  return {
    title: `${post.title} — Toolz Blog`,
    description: post.excerpt,
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return (
      <Box style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#09090b' }}>
        <Flex direction="column" gap="3" align="center" style={{ padding: '24px' }}>
          <Heading size="7" weight="bold">
            Article not found
          </Heading>
          <Text color="gray" align="center">
            The post you were looking for has moved. Head back to the blog to explore the latest notes.
          </Text>
          <Link asChild color="indigo">
            <NextLink href="/blog">Return to blog</NextLink>
          </Link>
        </Flex>
      </Box>
    );
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.18), transparent 60%), #09090b',
      }}
    >
      <Flex direction="column" gap="5" style={{ maxWidth: '780px', margin: '0 auto', padding: '120px 24px' }}>
        <Flex direction="column" gap="3">
          <Flex gap="3" align="center" wrap="wrap">
            <Badge color="indigo" variant="soft">
              Toolz Dispatch
            </Badge>
            <Badge variant="soft" color="gray">
              {post.readingTime}
            </Badge>
            <Text size="2" color="gray">
              {post.publishedAt}
            </Text>
          </Flex>
          <Heading size="8" weight="bold">
            {post.title}
          </Heading>
        </Flex>

        <Flex direction="column" gap="4">
          {post.content.map((paragraph: ReactNode, index: number) => (
            <Text key={index} size="4" color="gray" style={{ lineHeight: 1.7 }}>
              {paragraph}
            </Text>
          ))}
        </Flex>

        <Separator my="4" size="4" />
        <Flex direction="column" gap="2">
          <Heading as="h2" size="4">
            Continue exploring
          </Heading>
          <Link asChild color="indigo">
            <NextLink href="/">Return home</NextLink>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
