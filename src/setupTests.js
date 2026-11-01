import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

window.scrollTo = vi.fn();
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  document.getElementById('portfolio-analytics')?.remove();
  delete window.gtag;
  delete window.dataLayer;
});
