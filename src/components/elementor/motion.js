// Elementor disables carousel/slideshow motion for users who prefer reduced motion.
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
