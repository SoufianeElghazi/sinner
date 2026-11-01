import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import Deferred from './Deferred';

it('does not mount expensive content before it approaches the viewport and cleans up the observer', () => {
  let notify;
  const disconnect = vi.fn();
  const observe = vi.fn();
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback) { notify = callback; }
    observe = observe;
    disconnect = disconnect;
  });
  const view = render(<Deferred><p>Expensive content</p></Deferred>);
  expect(screen.queryByText('Expensive content')).toBeNull();
  expect(observe).toHaveBeenCalledOnce();
  act(() => notify([{ isIntersecting: false }]));
  expect(screen.queryByText('Expensive content')).toBeNull();
  act(() => notify([{ isIntersecting: true }]));
  expect(screen.getByText('Expensive content')).toBeVisible();
  expect(disconnect).toHaveBeenCalledOnce();
  view.unmount();
  expect(disconnect).toHaveBeenCalledTimes(2);
});

it('keeps content accessible in browsers without IntersectionObserver', () => {
  vi.stubGlobal('IntersectionObserver', undefined);
  render(<Deferred><p>Fallback content</p></Deferred>);
  expect(screen.getByText('Fallback content')).toBeVisible();
});
