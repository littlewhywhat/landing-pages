import { Badge, Box, Button, Card, Flex, Grid, Heading, Link, Separator, Text } from '@radix-ui/themes';
import NextLink from 'next/link';

const highlights = [
  {
    title: 'Context stays in view',
    description:
      'Drop SideThreadGPT into any conversation and capture notes, code snippets, or follow-up tasks without leaving the thread.',
  },
  {
    title: 'Prompt library on tap',
    description:
      'Save your best prompts, reuse them in a click, and share with collaborators who join your workspace.',
  },
  {
    title: 'Private by default',
    description:
      'Local storage keeps drafts on-device until you decide to sync them with your connected workspace.',
  },
];

export default function SideThreadGPTPage() {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(45, 212, 191, 0.18), transparent 60%), #09090b',
      }}
    >
      <Flex direction="column" gap="8" style={{ maxWidth: '960px', margin: '0 auto', padding: '120px 24px' }}>
        <Flex direction="column" gap="4">
          <Badge color="jade" variant="surface" size="2">
            Chrome Extension
          </Badge>
          <Heading size="8" weight="bold">
            SideThreadGPT
          </Heading>
          <Text size="4" color="gray">
            Spin up an AI-powered side thread alongside any discussion. Summaries, follow-ups, and research—all without losing your place.
          </Text>
          <Flex gap="4" wrap="wrap">
            <Button size="3" asChild>
              <Link
                href="https://chromewebstore.google.com/detail"
                target="_blank"
                rel="noreferrer"
              >
                Add to Chrome
              </Link>
            </Button>
            <Button size="3" variant="soft" asChild>
              <NextLink href="/blog/weaving-ai-into-everyday-workflows">See the build notes</NextLink>
            </Button>
          </Flex>
        </Flex>

        <Card
          size="4"
          variant="surface"
          style={{
            background:
              'linear-gradient(135deg, rgba(14, 165, 233, 0.25), transparent 60%), rgba(15, 23, 42, 0.85)',
          }}
        >
          <Grid columns={{ initial: '1', md: '2' }} gap="5" align="center">
            <Flex direction="column" gap="3">
              <Heading as="h2" size="5">
                Conversation companion
              </Heading>
              <Text size="3" color="gray">
                SideThreadGPT nests next to your live discussions, so you can compose AI prompts, capture insights, and post summaries back into the conversation without tab-hopping.
              </Text>
            </Flex>
            <Box
              style={{
                width: '100%',
                minHeight: '240px',
                borderRadius: '16px',
                background:
                  'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.6), transparent 55%), radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.5), transparent 50%), rgba(17, 24, 39, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
              }}
            >
              <Text size="3" color="gray" align="center">
                Screenshot preview arriving soon
              </Text>
            </Box>
          </Grid>
        </Card>

        <Grid columns={{ initial: '1', md: '3' }} gap="4">
          {highlights.map((highlight) => (
            <Card key={highlight.title} size="3" variant="classic">
              <Flex direction="column" gap="2">
                <Heading as="h3" size="4">
                  {highlight.title}
                </Heading>
                <Text size="2" color="gray">
                  {highlight.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>

        <Separator size="4" my="4" />
        <Flex direction="column" gap="3">
          <Heading as="h2" size="5">
            What we&apos;re building next
          </Heading>
          <Text size="3" color="gray">
            SideThreadGPT is the first release from Toolz. Mobile companions, calendar automations, and a canvas for shared prompts are already in exploration. Join the list to hear when they arrive.
          </Text>
          <Button size="3" variant="soft" asChild>
            <Link href="mailto:hello@toolz.studio">Join the early list</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
