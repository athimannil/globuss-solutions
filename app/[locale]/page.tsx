import Image from 'next/image';
import {
  ArrowRight,
  FileCheck2,
  PackageCheck,
  FlaskConical,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';
import heroImage from '@/assets/hero-spices.jpg';
import farmImage from '@/assets/farm-origins.jpg';
import flatlayImage from '@/assets/spices-flatlay.jpg';
import labImage from '@/assets/lab-berlin.jpg';
import comingSoonImage from '@/assets/coming-soon.jpg';
import Button from '@/components/ui/Button';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://globusssolutions.de';

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const isDe = locale === 'de';

  const title = isDe
    ? 'Globuss Solutions & Co. GmbH | Personallösungen Berlin'
    : 'Globuss Solutions & Co. GmbH | Workforce Solutions Berlin';

  const description = isDe
    ? 'Zuverlässige Personal- und Fachkräftelösungen für Unternehmen in Deutschland und Europa. Personalvermittlung, Rekrutierung und flexible Personallösungen.'
    : 'Reliable manpower and skilled workforce solutions for companies across Germany and Europe. Recruitment, staffing, and personnel placement services.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/service`,
      siteName: 'Globuss Solutions',
      images: [`${SITE_URL}/og-default.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/service`,
      languages: { de: '/de/service', en: '/en/service' },
    },
    robots: { index: true, follow: true },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  // const isDe = locale === 'de';

  const pillars = [
    'sourcing',
    'berlin',
    'logistics',
    'markets',
    'scale',
    'trust',
  ] as const;

  const steps = ['step1', 'step2', 'step3', 'step4'] as const;
  const qualityCards = [
    { key: 'inspection', Icon: PackageCheck },
    { key: 'lab', Icon: FlaskConical },
    { key: 'packing', Icon: ShieldCheck },
    { key: 'trace', Icon: FileCheck2 },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center pb-20 pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            width={600}
            height={400}
            alt="Professional workforce team collaborating"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                {dict.hero.eyebrow}
              </span>
            </div>

            <h1 className="animate-fade-in animation-delay-100 mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>

            <p className="animate-fade-in animation-delay-200 mb-8 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {dict.hero.subtitle}
            </p>

            <div className="animate-fade-in animation-delay-400 mb-8 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link href={`/${locale}/contact`} className="group">
                  {dict.hero.cta.primary}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link href={`/${locale}/services`}>
                  {dict.hero.cta.secondary}
                </Link>
              </Button>
            </div>

            <div className="animate-fade-in animation-delay-300 mb-10 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {dict.hero.badge.regions}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {dict.hero.badge.quality}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-2">
            <div className="h-3 w-1.5 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                — {dict.intro.eyebrow}
              </span>
              <h2 className="mb-8 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {dict.intro.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {dict.intro.body}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={farmImage}
                  alt="Farmer hands holding freshly harvested spices"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars grid */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border shadow-md md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p}
                className="animate-fade-in card-hover bg-background p-8 md:p-10"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                  {dict.pillar[p].tag}
                </span>
                <h3 className="mb-4 mt-3 font-serif text-2xl font-semibold text-foreground">
                  {dict.pillar[p].title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {dict.pillar[p].desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image band */}
      <section className="relative h-80 overflow-hidden md:h-96">
        <Image
          src={flatlayImage}
          alt="Overhead flat lay of assorted whole spices"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        <div className="container relative mx-auto flex h-full items-center px-4">
          <p className="max-w-2xl font-serif text-2xl italic leading-tight text-primary-foreground md:text-4xl">
            {dict.intro.title}
          </p>
        </div>
      </section>

      {/* Quality section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:order-1">
              <Image
                src={labImage}
                alt="Berlin quality control laboratory"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                — {dict.quality.eyebrow}
              </span>
              <h2 className="mb-6 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {dict.quality.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {dict.quality.body}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-accent pl-5">
                  <p className="font-serif text-4xl font-semibold text-foreground">
                    {dict.quality['stat1.value']}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dict.quality['stat1.label']}
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-5">
                  <p className="font-serif text-4xl font-semibold text-foreground">
                    {dict.quality['stat2.value']}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dict.quality['stat2.label']}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {qualityCards.map(({ key, Icon }, i) => (
              <article
                key={key}
                className="card-hover animate-fade-in rounded-xl border border-border bg-card p-6"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {dict.quality[key].title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {dict.quality[key].desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — {dict.process.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary-foreground md:text-5xl">
              {dict.process.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step} className="relative">
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-serif text-5xl font-semibold text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
                    · {dict.process[step].tag}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-primary-foreground">
                  {dict.process[step].title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {dict.process[step].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                • {dict.coming.eyebrow}
              </span>
              <h2 className="mb-6 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {dict.coming.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {dict.coming.body}
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="font-serif text-5xl font-semibold text-accent">
                    {dict.coming.stat1.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dict.coming.stat1.label}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-5xl font-semibold text-accent">
                    {dict.coming.stat2.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dict.coming.stat2.label}
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={comingSoonImage}
                alt={dict.coming.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {dict.cta.title}
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            {dict.cta.subtitle}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href={`/${locale}/contact`} className="group">
              {dict.cta.button}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
