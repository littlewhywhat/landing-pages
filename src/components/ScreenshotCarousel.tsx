'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { Box, Flex, IconButton } from '@radix-ui/themes';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { event } from '@/lib/gtag';

export type Screenshot = {
  src: string;
  alt: string;
};

export type ScreenshotCarouselProps = {
  screenshots: Screenshot[];
  productSlug: string;
};

export function ScreenshotCarousel({ screenshots, productSlug }: ScreenshotCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const slides = useMemo(() => screenshots ?? [], [screenshots]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!slides.length) return;
      const nextIndex = (index + slides.length) % slides.length;
      setActiveIndex(nextIndex);
      const viewport = viewportRef.current;
      const target = viewport?.children[nextIndex] as HTMLElement | undefined;
      target?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    },
    [slides.length]
  );

  const handlePrevious = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const handleNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (!slides.length) return;
    event('carousel_slide_view', { product: productSlug, slide_index: activeIndex });
  }, [activeIndex, productSlug, slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (eventMatch: MediaQueryListEvent | MediaQueryList) => {
      setIsReducedMotion(eventMatch.matches);
    };

    updatePreference(mediaQuery);

    const listener = (eventChange: MediaQueryListEvent) => updatePreference(eventChange);
    mediaQuery.addEventListener('change', listener);

    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      mediaQuery.removeEventListener('change', listener);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isPaused || isReducedMotion || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % slides.length;
        const viewport = viewportRef.current;
        const target = viewport?.children[nextIndex] as HTMLElement | undefined;
        target?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        return nextIndex;
      });
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, isReducedMotion, slides.length]);

  const handlePointerEnter = () => setIsPaused(true);
  const handlePointerLeave = () => setIsPaused(false);

  const onKeyDown = (eventKey: KeyboardEvent<HTMLDivElement>) => {
    if (eventKey.key === 'ArrowRight') {
      eventKey.preventDefault();
      handleNext();
    }
    if (eventKey.key === 'ArrowLeft') {
      eventKey.preventDefault();
      handlePrevious();
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
    event('carousel_open_fullscreen', { product: productSlug, slide_index: activeIndex });
  };

  if (!slides.length) {
    return null;
  }

  return (
    <Box>
      <Box position="relative">
        <ScrollArea.Root type="always">
          <ScrollArea.Viewport asChild>
            <div
              ref={viewportRef}
              className="carousel-viewport"
              style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', overflowX: 'auto' }}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              onFocusCapture={handlePointerEnter}
              onBlurCapture={handlePointerLeave}
              onKeyDown={onKeyDown}
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Product screenshots"
              aria-live="polite"
            >
              {slides.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  className="carousel-slide"
                  style={{
                    position: 'relative',
                    border: 'none',
                    padding: 0,
                    background: 'transparent',
                    flex: '0 0 80%',
                    maxWidth: '540px',
                    cursor: 'pointer'
                  }}
                  aria-label={`Open screenshot ${index + 1} in a lightbox`}
                  onClick={() => {
                    goToSlide(index);
                    openDialog();
                  }}
                  onFocus={() => goToSlide(index)}
                >
                  <Box
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16 / 10',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      border: '1px solid var(--gray-a5)'
                    }}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 540px"
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                      decoding="async"
                      style={{ objectFit: 'cover' }}
                    />
                    <Box
                      style={{
                        position: 'absolute',
                        right: '12px',
                        bottom: '12px',
                        background: 'rgba(15, 15, 18, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '999px'
                      }}
                      p="1"
                    >
                      <Maximize2 size={18} color="#fff" aria-hidden="true" />
                    </Box>
                  </Box>
                </button>
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
        <Flex
          position="absolute"
          left="0"
          right="0"
          top="50%"
          justify="between"
          px="4"
          style={{ transform: 'translateY(-50%)', pointerEvents: 'none' }}
        >
          <Tooltip.Provider delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <IconButton
                  variant="surface"
                  highContrast
                  onClick={handlePrevious}
                  style={{ pointerEvents: 'auto' }}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content sideOffset={6}>Previous</Tooltip.Content>
            </Tooltip.Root>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <IconButton
                  variant="surface"
                  highContrast
                  onClick={handleNext}
                  style={{ pointerEvents: 'auto' }}
                  aria-label="Next screenshot"
                >
                  <ChevronRight />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content sideOffset={6}>Next</Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </Flex>
      </Box>
      <Flex justify="center" gap="2" mt="3" role="tablist" aria-label="Select screenshot">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={activeIndex === index}
            style={{
              width: activeIndex === index ? 14 : 10,
              height: activeIndex === index ? 14 : 10,
              borderRadius: '999px',
              border: 'none',
              background: activeIndex === index ? 'var(--violet-9)' : 'var(--gray-6)',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
          />
        ))}
      </Flex>
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 11, 16, 0.85)',
              backdropFilter: 'blur(12px)'
            }}
          />
          <Dialog.Content
            onEscapeKeyDown={() => setIsDialogOpen(false)}
            style={{
              position: 'fixed',
              inset: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              style={{
                position: 'relative',
                width: 'min(960px, 90vw)',
                aspectRatio: '16 / 10',
                borderRadius: '20px',
                overflow: 'hidden'
              }}
            >
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                fill
                sizes="90vw"
                priority
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Box>
  );
}
