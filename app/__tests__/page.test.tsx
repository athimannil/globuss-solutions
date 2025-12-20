import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Page from '@/app/[locale]/page';

test('Home page renders', async () => {
  const params = Promise.resolve({ locale: 'en' as const });
  render(await Page({ params }));
  expect(screen.getByRole('heading')).toBeDefined();
});
