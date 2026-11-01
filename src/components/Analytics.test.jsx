import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, it, vi } from 'vitest';
import Analytics from './Analytics';

it('does not load analytics in development or tests', () => {
  vi.stubEnv('PROD', false);
  render(<MemoryRouter><Analytics /></MemoryRouter>);
  expect(document.getElementById('portfolio-analytics')).toBeNull();
});

it('initializes GA4 once and includes the requested path and query string', () => {
  vi.stubEnv('PROD', true);
  window.gtag = vi.fn();
  const view = render(<MemoryRouter initialEntries={['/project?source=book']}><Analytics /></MemoryRouter>);
  expect(document.querySelectorAll('#portfolio-analytics')).toHaveLength(1);
  expect(window.gtag).toHaveBeenCalledWith('config', 'G-JH5CLYWNPF', { send_page_view: false });
  expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', expect.objectContaining({ page_path: '/project?source=book' }));
  view.unmount();
  render(<MemoryRouter><Analytics /></MemoryRouter>);
  expect(document.querySelectorAll('#portfolio-analytics')).toHaveLength(1);
  expect(window.gtag.mock.calls.filter(([command]) => command === 'config')).toHaveLength(1);
});
