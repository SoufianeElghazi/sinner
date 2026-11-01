import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

it('offers recovery instead of a blank page if a route fails to render', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
  function BrokenRoute() { throw new Error('Route failed to load'); }
  render(<ErrorBoundary><BrokenRoute /></ErrorBoundary>);
  expect(screen.getByRole('alert')).toHaveTextContent('This page could not load');
  expect(screen.getByRole('button', { name: 'Reload page' })).toBeVisible();
});
