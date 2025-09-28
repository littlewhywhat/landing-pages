import { posts } from '@/data/posts';
import { Badge, Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

export default function BlogPage() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.18), transparent 60%), #09090b',
      }}
    >
      <Flex direction="column" gap="6" style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 24px' }}>
        <Flex direction="column" gap="3">
          <Badge color="indigo" variant="soft" size="2">
            Toolz Dispatch
          </Badge>
          <Heading size="8" weight="bold">
            Notes from the studio
          </Heading>
          <Text size="4" color="gray">
            Process walkthroughs, release recaps, and the lessons we learn while building productive tools.
          </Text>
        </Flex>

        <Flex direction="column" gap="4">
          {posts.map((post) => (
            <Card key={post.slug} size="4" variant="classic">
              <Flex direction="column" gap="3">
                <Flex gap="3" align="center" wrap="wrap">
                  <Text size="2" color="gray">
                    {post.publishedAt}
                  </Text>
                  <Badge variant="soft" color="gray">
                    {post.readingTime}
                  </Badge>
                </Flex>
                <Heading as="h2" size="6">
                  {post.title}
                </Heading>
                <Text size="3" color="gray">
                  {post.excerpt}
                </Text>
                <Flex>
                  <Link asChild color="indigo">
                    <NextLink href={`/blog/${post.slug}`}>Read article</NextLink>
                  </Link>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
