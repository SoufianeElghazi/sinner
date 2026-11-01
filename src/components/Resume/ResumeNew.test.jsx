import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';
import ResumeNew from './ResumeNew';

const { pdfjs } = vi.hoisted(() => ({ pdfjs: { GlobalWorkerOptions: {} } }));
vi.mock('react-pdf', () => ({
  pdfjs,
  Document: ({ onLoadSuccess, options, error, children }) => <div>
    <button onClick={() => onLoadSuccess({ numPages: 2 })}>Load test PDF</button>
    <span data-testid="pdf-options">{String(options.isEvalSupported)}</span>
    {error}{children}
  </div>,
  Page: ({ width, pageNumber }) => <div data-testid="page" data-width={width}>Page {pageNumber}</div>,
}));

it('uses a local worker, fits the container, and keeps the download available if preview fails', async () => {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: 340 });
  const user = userEvent.setup();
  render(<ResumeNew />);
  expect(pdfjs.GlobalWorkerOptions.workerSrc).not.toContain('cdnjs');
  expect(pdfjs.GlobalWorkerOptions.workerSrc).toContain('pdf.worker.min.mjs');
  expect(screen.getByTestId('pdf-options')).toHaveTextContent('false');
  await user.click(screen.getByRole('button', { name: 'Load test PDF' }));
  expect(screen.getAllByTestId('page')).toHaveLength(2);
  expect(screen.getAllByTestId('page')[0]).toHaveAttribute('data-width', '340');
  expect(screen.getByRole('alert')).toHaveTextContent('preview could not load');
  expect(screen.getByRole('link', { name: /Download CV/ })).toHaveAttribute('download', 'Soufiane_Elghazi_CV.pdf');
});
