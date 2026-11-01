import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// External integrations have their own contracts; route tests never require network access.
vi.mock('react-github-calendar', () => ({ GitHubCalendar: () => <div>Contribution calendar</div> }));
vi.mock('react-pdf', () => ({
  pdfjs: { GlobalWorkerOptions: {} },
  Document: ({ children }) => <div>{children}</div>,
  Page: () => <div>Resume page</div>,
}));

beforeEach(() => window.history.replaceState({}, '', '/'));

describe('portfolio navigation', () => {
  it('shows the homepage without a timed preloader or analytics request', async () => {
    render(<App />);
    expect(await screen.findByRole('heading', { name: /ELGHAZI Soufiane/ })).toBeVisible();
    expect(document.querySelector('#preloader')).toBeNull();
    expect(document.querySelector('#portfolio-analytics')).toBeNull();
  });

  it('navigates to the book and preserves the direct PDF download', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('link', { name: /My Endeavors/ }));
    expect(await screen.findByRole('heading', { name: 'My Book' })).toBeVisible();
    const link = screen.getByRole('link', { name: 'Download the book' });
    expect(link).toHaveAttribute('href', '/The_Seeker.pdf');
    expect(link).toHaveAttribute('download', 'The_Seeker.pdf');
    expect(screen.getByAltText(/The Seeker book cover/)).toHaveAttribute('width', '1024');
  });

  it('supports direct links to About and Resume', async () => {
    window.history.replaceState({}, '', '/about');
    const user = userEvent.setup();
    render(<App />);
    expect(await screen.findByRole('heading', { name: /About\s*Me/ })).toBeVisible();
    await user.click(screen.getByRole('link', { name: /Resume/ }));
    expect(await screen.findByRole('heading', { name: /My Recent\s*Resume/ })).toBeVisible();
    expect(screen.getByRole('link', { name: /Download CV/ })).toHaveAttribute('download', 'Soufiane_Elghazi_CV.pdf');
  });

  it('redirects an unknown route to the homepage', async () => {
    window.history.replaceState({}, '', '/missing-page');
    render(<App />);
    expect(await screen.findByRole('heading', { name: /ELGHAZI Soufiane/ })).toBeVisible();
    expect(window.location.pathname).toBe('/');
  });

  it('closes the mobile menu after navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.click(screen.getByRole('link', { name: /My Endeavors/ }));
    expect(await screen.findByRole('heading', { name: 'My Book' })).toBeVisible();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});

it('keeps external links isolated from the portfolio window', async () => {
  window.history.replaceState({}, '', '/project');
  render(<App />);
  await screen.findByRole('heading', { name: 'My Book' });
  const links = document.querySelectorAll('a[target="_blank"]');
  expect(links.length).toBeGreaterThan(10);
  for (const link of links) expect(link.getAttribute('rel')).toMatch(/noopener|noreferrer/);
});
