import {
  CheckCircle,
  Target,
  Handshake,
  // ArrowRight,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';

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

  return (
    <div className="pt-20">
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
              <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {dict.about['history.title']}
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                {dict.about['history.description']}
              </p>
              <blockquote className="border-l-4 border-blue-600 py-2 pl-6 text-lg font-medium italic text-zinc-900 dark:text-zinc-50">
                {dict.about.mission}
              </blockquote>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {dict.about['team.title']}
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
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
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {dict.about['values.title']}
            </span>
            <h2 className="mb-4 mt-2 text-3xl font-bold text-foreground md:text-4xl">
              {dict.why.subtitle}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              const title = dict.why[
                value.key as keyof typeof dict.why
              ] as string;
              const description = dict.why[
                `${value.key}.desc` as keyof typeof dict.why
              ] as string;

              return (
                <article
                  key={value.key}
                  className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-600/30 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                  style={{
                    animation: 'fadeIn 0.6s ease-out',
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 transition-all group-hover:scale-110 group-hover:bg-blue-100 dark:bg-blue-950 dark:group-hover:bg-blue-900"
                    aria-hidden="true"
                  >
                    <ValueIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </article>
              );
            })}
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
            {[
              'aerospace',
              'energy',
              'automotive',
              'telecom',
              'education',
              'lifescience',
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-zinc-200 bg-white p-6 text-center transition-all hover:border-blue-600/30 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {
                    dict.industries[
                      industry as keyof typeof dict.industries
                    ] as string
                  }
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
          {/* <Button variant="hero" size="xl" asChild>
            <Link href={`/${locale}/contact`} className="group">
              {dict.hero.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button> */}
        </div>
      </section>
    </div>
  );
}
