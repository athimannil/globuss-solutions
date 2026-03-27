import {
  Users,
  UserCheck,
  Clock,
  Shield,
  ArrowRight,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';
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
    ? 'Unsere Leistungen | Globuss Solutions & Co. GmbH'
    : 'Our Services | Globuss Solutions & Co. GmbH';
  const description = isDe
    ? 'Fachkräftebereitstellung, Personalvermittlung, temporäre und langfristige Personallösungen. Rechtskonforme Workforce-Modelle für Ihre Branche.'
    : 'Skilled manpower supply, recruitment, temporary and long-term staffing solutions. Compliance-focused workforce models for your industry.';

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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const services = [
    {
      icon: Users,
      key: 'manpower',
      color: 'bg-blue-500',
    },
    {
      icon: UserCheck,
      key: 'recruitment',
      color: 'bg-green-500',
    },
    {
      icon: Clock,
      key: 'staffing',
      color: 'bg-purple-500',
    },
    {
      icon: Shield,
      key: 'compliance',
      color: 'bg-orange-500',
    },
    {
      icon: Briefcase,
      key: 'consulting',
      color: 'bg-pink-500',
    },
    {
      icon: GraduationCap,
      key: 'training',
      color: 'bg-teal-500',
    },
  ];

  const processSteps = [
    { num: '01', key: 'step1' },
    { num: '02', key: 'step2' },
    { num: '03', key: 'step3' },
    { num: '04', key: 'step4' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.services?.title}
            </span>
            <h1 className="mb-6 mt-2 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {dict.services?.subtitle}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {dict.services?.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.key}
                className="card-hover animate-fade-in group rounded-2xl border border-border bg-card p-8 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`h-16 w-16 rounded-xl ${service.color} mb-6 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-foreground">
                  {dict.services?.[`${service.key}.title`]}
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {dict.services?.[`${service.key}.description`]}
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {dict.services?.[`${service.key}.details`]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.process?.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.process?.subtitle}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.key} className="relative">
                <div className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg">
                  <span className="mb-4 block text-5xl font-bold text-primary/20">
                    {step.num}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {dict.process?.[`${step.key}.title`]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {dict.process?.[`${step.key}.desc`]}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 transform lg:block">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.industries?.title}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.industries?.subtitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              'aerospace',
              'energy',
              'automotive',
              'telecom',
              'education',
              'electronics',
              'network',
              'lifescience',
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {dict.industries?.[industry]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {dict.industries?.[`${industry}.desc`]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            {dict.cta?.title}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/90">
            {dict.cta?.subtitle}
          </p>
          {/* <button variant="hero" size="xl" asChild> */}
          <Button>
            <Link href={`/${locale}/contact`} className="group">
              {dict.hero.cta.primary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
