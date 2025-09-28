import Navigation from '@/components/Navigation';
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
import NextLink from 'next/link';

export default function BuildingSideThreadGPT() {
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
        <article>
          <Flex
            direction="column"
            align="center"
            gap="6"
            style={{ maxWidth: '700px', margin: '0 auto', padding: '96px 24px 64px' }}
          >
            {/* Article Header */}
            <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
              <Button size="1" variant="soft" asChild>
                <NextLink href="/blog">← Back to Blog</NextLink>
              </Button>
              
              <Badge variant="soft">
                Product Development
              </Badge>
              
              <Heading size="8" weight="bold">
                Building SideThreadGPT: Bringing AI to Your Browser
              </Heading>
              
              <Flex gap="3" align="center">
                <Text size="2" color="gray">March 15, 2024</Text>
                <Text size="2" color="gray">•</Text>
                <Text size="2" color="gray">5 min read</Text>
              </Flex>
            </Flex>

            <Separator orientation="horizontal" size="4" />

            {/* Article Content */}
            <Flex direction="column" gap="6" style={{ width: '100%' }}>
              <Text size="4" style={{ lineHeight: '1.6' }}>
                When we started Toolz Studio, our mission was clear: create tools that genuinely enhance productivity without adding complexity to daily workflows. SideThreadGPT, our first Chrome extension, embodies this philosophy perfectly.
              </Text>

              <Heading size="5" weight="bold">
                The Problem We Saw
              </Heading>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                We noticed that while AI tools like ChatGPT were incredibly powerful, using them required constant context switching. You'd be reading an article, encounter something complex, then have to open a new tab, navigate to ChatGPT, copy and paste content, and lose your flow entirely.
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                This friction was killing productivity rather than enhancing it. We knew there had to be a better way.
              </Text>

              <Heading size="5" weight="bold">
                Our Approach
              </Heading>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                The solution seemed obvious in hindsight: bring the AI directly to where you're already working. Instead of forcing users to leave their current context, we built SideThreadGPT to work seamlessly within any web page.
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                But building a Chrome extension that works reliably across millions of websites presented unique challenges:
              </Text>

              <Box pl="4">
                <Text size="3" style={{ lineHeight: '1.6' }}>
                  • <strong>Performance:</strong> The extension needed to be lightweight and fast, never slowing down the browsing experience.
                </Text>
                <Text size="3" style={{ lineHeight: '1.6' }}>
                  • <strong>Compatibility:</strong> It had to work seamlessly across different websites with varying layouts and technologies.
                </Text>
                <Text size="3" style={{ lineHeight: '1.6' }}>
                  • <strong>Privacy:</strong> Users needed to trust that their browsing data remained private and secure.
                </Text>
                <Text size="3" style={{ lineHeight: '1.6' }}>
                  • <strong>User Experience:</strong> The interface had to be intuitive enough that users could access AI help without learning new workflows.
                </Text>
              </Box>

              <Heading size="5" weight="bold">
                Key Features We Built
              </Heading>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                After months of development and testing, we launched SideThreadGPT with several core features that address real user needs:
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                <strong>Text Selection AI:</strong> Simply select any text on a webpage to get instant AI assistance - whether you need a summary, explanation, or translation.
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                <strong>Context-Aware Responses:</strong> The AI understands the webpage you're viewing and provides relevant, contextual assistance.
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                <strong>Quick Access Panel:</strong> A floating panel that stays out of your way until you need it, then provides instant access to AI capabilities.
              </Text>

              <Heading size="5" weight="bold">
                What's Next
              </Heading>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                SideThreadGPT is just the beginning. We're already working on additional productivity tools that follow the same philosophy: powerful functionality that integrates seamlessly into existing workflows.
              </Text>

              <Text size="3" style={{ lineHeight: '1.6' }}>
                Our upcoming tools will include a web-based productivity app, a mobile task manager, and additional browser extensions - all designed with the same attention to user experience and workflow integration.
              </Text>

              <Separator orientation="horizontal" size="4" />

              <Flex direction="column" gap="4" align="center" style={{ textAlign: 'center' }}>
                <Text size="3" color="gray">
                  Ready to try SideThreadGPT for yourself?
                </Text>
                <Button size="3" asChild>
                  <Link href="/products/sidethreadgpt">
                    Learn More & Install
                  </Link>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </article>
      </main>
    </Box>
  );
}