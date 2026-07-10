import { ContactForm } from './contact-form';

import { Toaster } from '@/components/ui/Toast';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://globussco.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isDe = locale === 'de';

  // FIX: Use contact dictionary and correct fallback titles
  const title = isDe
    ? 'Kontakt | Globuss Solutions'
    : 'Contact | Globuss Solutions';
  const description =
    dict.contact.intro ??
    (isDe
      ? 'Kontaktieren Sie uns für maßgeschneiderte Personallösungen.'
      : 'Contact us for tailored workforce solutions.');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      // FIX: Update URLs to /contact
      url: `${SITE_URL}/${locale}/contact`,
      siteName: 'Globuss Solutions',
      images: [`${SITE_URL}/og-default.png`],
    },
    alternates: {
      // FIX: Update canonical and language alternates
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: { de: '/de/contact', en: '/en/contact' },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isDe = locale === 'de';

  const contactInfo = [
    { label: dict.contact.info.company, value: 'Globuss Solutions & Co. GmbH' },
    {
      label: dict.contact.info.office,
      value: 'Böhlener Straße 1, 12627 Berlin, Germany',
    },
    { label: dict.contact.info.hr, value: 'HRB 285003 B' },
    { label: dict.contact.info.vat, value: 'DE462214910' },
    {
      label: dict.contact.info.markets,
      value: dict.contact.info.value,
    },
    {
      label: dict.contact.info.email,
      value: 'info@globusssolutions.de',
      href: 'mailto:info@globusssolutions.de',
    },
  ];

  return (
    <>
      <Toaster />
      <section className="gradient-hero pb-20 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — {dict.contact.eyebrow}
            </span>
            <h1 className="mb-8 mt-4 font-serif text-4xl font-semibold leading-[1.05] text-primary-foreground md:text-6xl">
              {dict.contact.title}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              {dict.contact.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <dl className="divide-y divide-border">
                {contactInfo.map((d) => (
                  <div key={d.label} className="py-5 first:pt-0">
                    <dt className="mb-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="text-lg text-foreground">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="transition-colors hover:text-accent"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-3">
              <ContactForm dict={dict} isDe={isDe} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
