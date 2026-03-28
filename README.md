# Globuss Solutions & Co. GmbH Website

This is a multilingual, modern web application for Globuss Solutions & Co. GmbH, built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS. It provides professional staffing and workforce solutions information for clients in Germany and Europe.

## Project Overview

- **Internationalization (i18n):** Supports multiple languages (German, English) with locale-based routing and translation dictionaries.
- **Modern UI:** Built with Tailwind CSS and custom theming for a professional look.
- **API Routes:** Contact form and other endpoints using Next.js API routes.
- **Testing:** Uses Vitest for unit testing.
- **Accessibility:** Follows a11y best practices.

## Project Structure

```
app/           # Main application pages and layouts (App Router)
	[locale]/    # Locale-specific routes (about, contact, imprint, etc.)
	api/         # API routes (e.g., contact form)
	globals.css  # Global styles
components/    # Reusable UI components (Header, Footer, Button, Toast)
contexts/      # React context providers
lib/           # Utility libraries (i18n config, dictionary)
locales/       # Translation files (de.json, en.json)
types/         # TypeScript types (e.g., dictionary types)
public/        # Static assets
```

## Environment Variables

Create a `.env.local` file in the project root. Example:

```
NEXT_PUBLIC_SITE_URL=https://globusssolutions.de
```

Document any additional environment variables required for deployment or API integrations.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) (unit testing)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) (linting & formatting)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

Run unit tests with:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

Vitest is configured in `vite.config.ts` and `vitest.setup.ts`. Add tests in the `app/__tests__/` directory.

## Internationalization (i18n)

- Add new languages by creating a new JSON file in `locales/` (e.g., `fr.json`).
- Update `lib/i18n.config.ts` to include the new locale.
- Use the `getDictionary` utility to access translations in components/pages.

## Contributing

1. Fork the repository and create a new branch for your feature or fix.
2. Follow the existing code style (TypeScript, Prettier, ESLint).
3. Add or update tests as needed.
4. Open a pull request with a clear description of your changes.

## License

This project is for internal use by Globuss Solutions & Co. GmbH. Contact the maintainers for more information.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
