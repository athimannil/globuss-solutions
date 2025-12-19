import { expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import Page from '@/app/[locale]/page';

test('Page renders English content', async () => {
  const params = Promise.resolve({ locale: 'en' as const });
  render(await Page({ params }));

  await waitFor(() => {
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('To get started, edit the page.tsx file.');
  });
});

test('Page renders German content', async () => {
  const params = Promise.resolve({ locale: 'de' as const });
  render(await Page({ params }));

  await waitFor(() => {
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Um zu beginnen, bearbeiten Sie die Datei page.tsx.');
  });
});

test('Language switcher is present', async () => {
  const params = Promise.resolve({ locale: 'en' as const });
  render(await Page({ params }));

  await waitFor(() => {
    const enLink = screen.getByLabelText('Switch to EN');
    const deLink = screen.getByLabelText('Switch to DE');

    expect(enLink).toBeInTheDocument();
    expect(deLink).toBeInTheDocument();
  });
});
