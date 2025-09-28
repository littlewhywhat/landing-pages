import { Heading, Text } from '@radix-ui/themes';

export default function Hero() {
  return (
    <Heading size="9" weight="bold" align="center">
      Productive tools for{' '}
      <Text as="span" color="indigo">
        your flow
      </Text>
    </Heading>
  );
}
