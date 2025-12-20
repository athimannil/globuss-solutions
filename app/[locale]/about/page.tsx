import {
  CheckCircle,
  Target,
  Handshake,
  ArrowRight,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://globusssolutions.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isDe = locale === 'de';

  const title = isDe
    ? 'Über uns | Globuss Solutions & Co. GmbH'
    : 'About Us | Globuss Solutions & Co. GmbH';

  const description = isDe
    ? 'Erfahren Sie mehr über Globuss Solutions – Ihr Partner für Personalvermittlung und Workforce-Dienstleistungen in Berlin und ganz Deutschland.'
    : 'Learn about Globuss Solutions – your partner for recruitment and workforce services in Berlin and across Germany.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/about`,
      siteName: 'Globuss Solutions',
      images: [`${SITE_URL}/og-default.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: { de: '/de/about', en: '/en/about' },
    },
    robots: { index: true, follow: true },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const values = [
    { icon: CheckCircle, key: 'reliability' },
    { icon: Target, key: 'compliance' },
    { icon: Handshake, key: 'quality' },
    { icon: Zap, key: 'flexibility' },
    { icon: Clock, key: 'support' },
    { icon: Shield, key: 'cost' },
  ];

  const industries = [
    'healthcare',
    'industrial',
    'logistics',
    'facility',
    'it',
    'hospitality',
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.about.title}
            </span>
            <h1 className="mb-6 mt-2 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {dict.about.subtitle}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {dict.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                {dict.about['history.title']}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                {dict.about['history.description']}
              </p>
              <blockquote className="border-l-4 border-accent py-2 pl-6 text-lg font-medium italic text-foreground">
                {dict.about.mission}
              </blockquote>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                {dict.about['team.title']}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {dict.about['team.description']}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.why.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.why.subtitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.key}
                className="card-hover animate-fade-in group rounded-xl border border-border bg-card p-6 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all group-hover:scale-110 group-hover:bg-accent/20"
                  aria-hidden="true"
                >
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {dict.why[value.key]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {dict.why[`${value.key}.desc`]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.industries.title}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.industries.subtitle}
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-border bg-background p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-foreground">
                  {dict.industries[industry]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            {dict.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
            {dict.cta.subtitle}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:bg-accent-hover hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {dict.hero.cta.primary}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
