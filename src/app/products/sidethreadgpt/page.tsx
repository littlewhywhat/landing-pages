import Navigation from '@/components/Navigation';
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from '@radix-ui/themes';

const features = [
  {
    title: 'Instant AI Assistance',
    description: 'Get AI-powered help without leaving your current tab. Simply select text or use our quick access panel.',
  },
  {
    title: 'Context-Aware Responses',
    description: 'SideThreadGPT understands the content you&apos;re viewing and provides relevant, contextual assistance.',
  },
  {
    title: 'Privacy-First Design',
    description: 'Your browsing data stays private. We only process what you explicitly share with the AI.',
  },
  {
    title: 'Seamless Integration',
    description: 'Works on any website without disrupting your browsing experience. Lightweight and fast.',
  },
];

const useCases = [
  'Summarize long articles and research papers',
  'Get explanations for complex technical concepts',
  'Generate quick responses to emails and messages',
  'Translate text in real-time while browsing',
  'Get coding help and explanations for code snippets',
  'Create outlines and notes from web content',
];

export default function SideThreadGPT() {
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
          style={{ maxWidth: '800px', margin: '0 auto', padding: '96px 24px 64px', textAlign: 'center' }}
        >
          <Badge color="green" variant="surface">
            Chrome Extension • Available Now
          </Badge>
          <Heading size="9" weight="bold">
            SideThreadGPT
          </Heading>
          <Text size="5" color="gray" style={{ maxWidth: '600px' }}>
            Bring the power of AI directly to your browser. Get instant assistance, summaries, and insights without interrupting your workflow.
          </Text>

          <Flex gap="4" wrap="wrap" justify="center" mt="4">
            <Button size="4" asChild>
              <Link href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer">
                Install Extension
              </Link>
            </Button>
            <Button size="4" variant="soft" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </Flex>
        </Flex>

        {/* Screenshot Placeholder */}
        <Flex justify="center" mb="8" style={{ padding: '0 24px' }}>
          <Card
            size="4"
            variant="surface"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.1), transparent 60%), rgba(15, 23, 42, 0.85)',
            }}
          >
            <Flex direction="column" align="center" justify="center" height="100%" gap="4">
              <Text size="6" weight="bold" color="indigo">
                SideThreadGPT
              </Text>
              <Text size="3" color="gray">
                Extension Screenshot Placeholder
              </Text>
              <Text size="2" color="gray">
                Shows the extension in action on a real website
              </Text>
            </Flex>
          </Card>
        </Flex>

        <Separator orientation="horizontal" size="4" />

        {/* Features Section */}
        <Flex
          id="features"
          direction="column"
          align="center"
          gap="8"
          style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}
        >
          <Flex direction="column" gap="3" align="center">
            <Heading size="7" weight="bold">
              Powerful Features
            </Heading>
            <Text size="4" color="gray" align="center" style={{ maxWidth: '600px' }}>
              Everything you need to enhance your browsing experience with AI assistance.
            </Text>
          </Flex>

          <Flex gap="4" wrap="wrap" justify="center" style={{ width: '100%' }}>
            {features.map((feature) => (
              <Card
                key={feature.title}
                size="3"
                variant="surface"
                style={{
                  width: '300px',
                  background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.05), transparent 60%), rgba(15, 23, 42, 0.85)',
                }}
              >
                <Flex direction="column" gap="3" align="start">
                  <Heading as="h3" size="4" weight="bold">
                    {feature.title}
                  </Heading>
                  <Text size="2" color="gray" style={{ lineHeight: '1.5' }}>
                    {feature.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Separator orientation="horizontal" size="4" />

        {/* Use Cases Section */}
        <Flex
          direction="column"
          align="center"
          gap="6"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}
        >
          <Flex direction="column" gap="3" align="center">
            <Heading size="6" weight="bold">
              What You Can Do
            </Heading>
            <Text size="4" color="gray" align="center">
              Real-world use cases that make your browsing more productive.
            </Text>
          </Flex>

          <Card
            size="4"
            variant="surface"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.05), transparent 60%), rgba(15, 23, 42, 0.85)',
            }}
          >
            <Flex direction="column" gap="4">
              {useCases.map((useCase, index) => (
                <Flex key={index} align="start" gap="3">
                  <Badge color="indigo" variant="soft" style={{ marginTop: '2px' }}>
                    {index + 1}
                  </Badge>
                  <Text size="3" style={{ lineHeight: '1.5' }}>
                    {useCase}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Card>
        </Flex>

        <Separator orientation="horizontal" size="4" />

        {/* CTA Section */}
        <Flex
          direction="column"
          align="center"
          gap="6"
          style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}
        >
          <Heading size="6" weight="bold">
            Ready to Enhance Your Browsing?
          </Heading>
          <Text size="4" color="gray">
            Join thousands of users who have already transformed their web experience with SideThreadGPT.
          </Text>

          <Flex gap="4" wrap="wrap" justify="center">
            <Button size="4" asChild>
              <Link href="https://chrome.google.com/webstore" target="_blank" rel="noreferrer">
                Install from Chrome Web Store
              </Link>
            </Button>
            <Button size="4" variant="soft" asChild>
              <Link href="/blog/building-sidethreadgpt">Read Our Story</Link>
            </Button>
          </Flex>

          <Text size="2" color="gray">
            Free to install • No account required • Privacy-focused
          </Text>
        </Flex>
      </main>
    </Box>
  );
}