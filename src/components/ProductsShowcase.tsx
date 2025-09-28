import {
  Badge,
  Button,
  Card,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes';
import NextLink from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  type: 'Chrome Extension' | 'Web App' | 'Mobile App';
  status: 'available' | 'coming-soon';
  href?: string;
  externalLink?: string;
}

const products: Product[] = [
  {
    id: 'sidethreadgpt',
    name: 'SideThreadGPT',
    description: 'AI-powered Chrome extension that brings GPT directly to your browsing experience. Get instant answers and assistance without leaving your current tab.',
    type: 'Chrome Extension',
    status: 'available',
    href: '/products/sidethreadgpt',
    externalLink: 'https://chrome.google.com/webstore',
  },
  {
    id: 'focusflow',
    name: 'FocusFlow',
    description: 'Productivity web app that helps you maintain deep work sessions with smart break reminders and distraction blocking.',
    type: 'Web App',
    status: 'coming-soon',
  },
  {
    id: 'taskmaster',
    name: 'TaskMaster',
    description: 'Mobile task management app with AI-powered scheduling and priority optimization for maximum productivity.',
    type: 'Mobile App',
    status: 'coming-soon',
  },
  {
    id: 'codeassist',
    name: 'CodeAssist',
    description: 'Developer productivity extension that provides intelligent code suggestions and automated refactoring tools.',
    type: 'Chrome Extension',
    status: 'coming-soon',
  },
];

export default function ProductsShowcase() {
  return (
    <Flex direction="column" gap="6" align="center" style={{ width: '100%' }}>
      <Flex direction="column" gap="3" align="center">
        <Heading size="7" weight="bold">
          Our Products
        </Heading>
        <Text size="4" color="gray" align="center" style={{ maxWidth: '600px' }}>
          Discover our suite of productivity tools designed to enhance your workflow and boost your efficiency.
        </Text>
      </Flex>

      <Flex
        gap="4"
        wrap="wrap"
        justify="center"
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            size="3"
            variant="surface"
            style={{
              width: '320px',
              minHeight: '240px',
              cursor: product.status === 'available' ? 'pointer' : 'default',
              opacity: product.status === 'coming-soon' ? 0.7 : 1,
              background: product.status === 'available' 
                ? 'linear-gradient(135deg, rgba(129, 140, 248, 0.1), transparent 60%), rgba(15, 23, 42, 0.85)'
                : 'rgba(15, 23, 42, 0.5)',
            }}
          >
            <Flex direction="column" gap="3" height="100%">
              <Flex justify="between" align="start">
                <Badge
                  color={product.status === 'available' ? 'green' : 'gray'}
                  variant="soft"
                >
                  {product.status === 'available' ? 'Available' : 'Coming Soon'}
                </Badge>
                <Badge variant="outline" size="1">
                  {product.type}
                </Badge>
              </Flex>

              <Flex direction="column" gap="2" style={{ flex: 1 }}>
                <Heading as="h3" size="5" weight="bold">
                  {product.name}
                </Heading>
                <Text size="2" color="gray" style={{ lineHeight: '1.5' }}>
                  {product.description}
                </Text>
              </Flex>

              <Flex gap="2" mt="auto">
                {product.status === 'available' && product.href && (
                  <Button size="2" asChild style={{ flex: 1 }}>
                    <NextLink href={product.href}>Learn More</NextLink>
                  </Button>
                )}
                {product.status === 'available' && product.externalLink && (
                  <Button size="2" variant="soft" asChild>
                    <Link href={product.externalLink} target="_blank" rel="noreferrer">
                      Install
                    </Link>
                  </Button>
                )}
                {product.status === 'coming-soon' && (
                  <Button size="2" variant="soft" disabled style={{ flex: 1 }}>
                    Coming Soon
                  </Button>
                )}
              </Flex>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}