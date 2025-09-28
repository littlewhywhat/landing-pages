'use client';

import { FormEvent, useState } from 'react';
import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import * as Toast from '@radix-ui/react-toast';
import { event } from '@/lib/gtag';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (eventSubmit: FormEvent<HTMLFormElement>) => {
    eventSubmit.preventDefault();
    if (!email) {
      return;
    }

    setSubmitting(true);
    event('lead_submit_attempt', { email_domain: email.split('@')[1] ?? 'unknown' });

    window.setTimeout(() => {
      setSubmitting(false);
      setToastMessage('Thanks! We will let you know when new tools launch.');
      setToastOpen(true);
      setEmail('');
      event('lead_submit_success', { email_domain: 'redacted' });
    }, 500);
  };

  return (
    <Card size="4" className="shadow-glow" style={{ overflow: 'hidden' }}>
      <Flex direction="column" gap="4">
        <Box>
          <Heading size="4">Get notified when new tools drop.</Heading>
          <Text color="gray" size="3">
            Join the list for early beta invites and productivity tactics.
          </Text>
        </Box>
        <Box asChild>
          <form onSubmit={handleSubmit}>
            <Flex direction={{ initial: 'column', sm: 'row' }} gap="3">
              <TextField.Root
                size="3"
                placeholder="you@example.com"
                value={email}
                onChange={(eventChange) => setEmail(eventChange.currentTarget.value)}
                required
                type="email"
                radius="large"
                disabled={submitting}
              />
              <Button size="3" type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Notify me'}
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
      <Toast.Root open={toastOpen} onOpenChange={setToastOpen} duration={4000}>
        <Toast.Title>{toastMessage}</Toast.Title>
      </Toast.Root>
    </Card>
  );
}
