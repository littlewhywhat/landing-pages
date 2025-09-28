import { Heading, Text } from '@radix-ui/themes';

export default function Hello() {
  return (
    <Heading size="9" weight="bold" align="center">
      Build boldly with{' '}
      <Text as="span" color="indigo">
        Toolz
      </Text>
    </Heading>
  );
}
