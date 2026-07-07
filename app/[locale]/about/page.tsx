import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';
import flatlayImage from '@/assets/spices-flatlay.jpg';
import storyImage from '@/assets/farm-origins.jpg';

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

  const principles = ['part1', 'part2', 'part3', 'part4', 'part5'] as const;
  const facts = ['company', 'office', 'hr', 'vat', 'activity', 'also'] as const;

  return (
    <>
      <section className="gradient-hero pb-20 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — {dict.about.eyebrow}
            </span>
            <h1 className="mb-8 mt-4 font-serif text-4xl font-semibold leading-[1.05] text-primary-foreground md:text-6xl">
              {dict.about.title}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              {dict.about.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                — {dict.about.story.eyebrow}
              </span>
              <h2 className="mb-8 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                {dict.about.story.title}
              </h2>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={storyImage}
                  alt="Direct sourcing at origin"
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{dict.about.story.part1}</p>
              <p>{dict.about.story.part2}</p>
              <p>{dict.about.story.part3}</p>
              <blockquote className="border-l-2 border-accent pl-6 font-serif text-xl italic text-foreground">
                {dict.about.story.note}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — {dict.about.principles.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {dict.about.principles.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((part, i) => (
              <article
                key={part}
                className="card-hover animate-fade-in rounded-xl border border-border bg-background p-8"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                  {dict.about.principles[part].title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {dict.about.principles[part].desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                — {dict.about.based.eyebrow}
              </span>
              <h2 className="mb-8 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {dict.about.based.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {dict.about.based.body}
              </p>
              <p className="border-l-2 border-border pl-5 text-sm italic leading-relaxed text-muted-foreground/80">
                {dict.about.sourcing.note}
              </p>
            </div>
            <dl className="divide-y divide-border rounded-2xl border border-border bg-card p-8">
              {facts.map((k) => (
                <div
                  key={k}
                  className="grid grid-cols-3 gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <dt className="text-sm uppercase tracking-wider text-muted-foreground">
                    {dict.about[k].label}
                  </dt>
                  <dd className="col-span-2 font-medium text-foreground">
                    {dict.about[k].value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative h-64 overflow-hidden md:h-80">
        <Image
          src={flatlayImage}
          alt="Assorted spices"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            {locale === 'de'
              ? 'Möchten Sie mehr über unsere Arbeitsweise erfahren?'
              : 'Want to know more about how we work?'}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {locale === 'de'
              ? 'Wir zeigen Ihnen unser Beschaffungsmodell, unsere Dokumentation und unsere Zeitpläne gerne im Detail.'
              : "We're happy to walk you through our sourcing model, documentation, and timelines directly."}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href={`/${locale}/contact`} className="group">
              {dict.navigation.contact}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
