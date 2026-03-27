import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe2,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';
// import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-workforce.jpg';
// Partner logos
import seaVenturesLogo from '@/assets/partners/sea-ventures.png';
import astraLogo from '@/assets/partners/astra.png';
import unoroamLogo from '@/assets/partners/unoroam.svg';
import eldebnaLogo from '@/assets/partners/eldebna.png';
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
  const isDe = locale === 'de';

  const highlights = [
    { en: 'Skilled Professionals', de: 'Qualifizierte Fachkräfte' },
    { en: 'Compliant Staffing', de: 'Rechtskonforme Personalvermittlung' },
    { en: 'Flexible Solutions', de: 'Flexible Lösungen' },
  ];

  const stats = [
    { value: '10+', key: 'years', icon: Award },
    { value: '500+', key: 'clients', icon: Building2 },
    { value: '5000+', key: 'professionals', icon: Users },
    { value: '15+', key: 'countries', icon: Globe2 },
  ];

  const industries = [
    { key: 'aerospace', icon: '✈️' },
    { key: 'energy', icon: '⚡' },
    { key: 'automotive', icon: '🚗' },
    { key: 'telecom', icon: '📡' },
    { key: 'education', icon: '🎓' },
    { key: 'electronics', icon: '💻' },
    { key: 'network', icon: '🔒' },
    { key: 'lifescience', icon: '🔬' },
  ];

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
                Berlin, Germany
              </span>
            </div>

            <h1 className="animate-fade-in animation-delay-100 mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>

            <p className="animate-fade-in animation-delay-200 mb-8 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {dict.hero.subtitle}
            </p>

            <div className="animate-fade-in animation-delay-300 mb-10 flex flex-wrap gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">{highlight[locale]}</span>
                </div>
              ))}
            </div>

            <div className="animate-fade-in animation-delay-400 flex flex-wrap gap-4">
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
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-foreground/30 p-2">
            <div className="h-3 w-1.5 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="relative z-20 -mt-16 bg-background py-16"
        aria-labelledby="stats-heading"
      >
        <h2 id="stats-heading" className="sr-only">
          {isDe ? 'Unsere Zahlen' : 'Our Numbers'}
        </h2>
        <div className="container mx-auto px-4">
          <div className="animate-fade-in rounded-2xl border border-border bg-card p-8 shadow-xl md:p-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <stat.icon
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  {/* <p className="text-muted-foreground">{dict[stat.key]}</p> */}
                  <p className="text-muted-foreground">
                    {dict.stats?.[stat.key as keyof typeof dict.stats]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.services.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.services.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.services.intro}
            </p>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {['manpower', 'recruitment', 'staffing', 'compliance'].map(
              (service, index) => (
                <article
                  key={service}
                  className="card-hover animate-fade-in group rounded-xl border border-border bg-card p-6 hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="gradient-hero mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {dict.services?.[`${service}.title`]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.services?.[`${service}.description`]}
                  </p>
                </article>
              )
            )}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link href={`/${locale}/services`} className="group">
                {dict.navigation.services}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.industries.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.industries.subtitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={industry.key}
                className="card-hover animate-fade-in rounded-xl border border-border bg-background p-6 text-center hover:border-primary/30"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span
                  className="mb-3 block text-4xl"
                  role="img"
                  aria-label={dict.industries?.[`${industry.key}`]}
                >
                  {industry.icon}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {dict.industries?.[`${industry.key}`]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.partners.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.partners.subtitle}
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { logo: seaVenturesLogo, name: 'SEA Ventures' },
              { logo: astraLogo, name: 'Ad Astra Immobilien' },
              { logo: unoroamLogo, name: 'Unoroam' },
              { logo: eldebnaLogo, name: 'Eldebna' },
            ].map((partner, index) => (
              <figure
                key={partner.name}
                className="card-hover animate-fade-in flex h-28 w-48 items-center justify-center rounded-xl border border-border bg-card p-6 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo - Globuss Solutions partner`}
                  className="max-h-16 max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                {dict.why.title}
              </span>
              <h2 className="mb-6 mt-2 text-3xl font-bold text-foreground md:text-4xl">
                {dict.why.subtitle}
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                {dict.about.description}
              </p>
              <Button variant="default" size="lg" asChild>
                <Link href={`/${locale}/about`} className="group">
                  {dict.navigation.about}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4">
              {['reliability', 'compliance', 'quality', 'flexibility'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground">
                        {dict.why?.[`${item}`]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {dict.why?.[`${item}.desc`]}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            {dict.cta.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
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
