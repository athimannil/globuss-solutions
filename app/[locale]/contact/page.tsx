import {
  MapPin,
  Phone,
  Mail,
  // Send,
  Clock,
  Building2,
  CheckCircle,
} from 'lucide-react';

import { ContactForm } from './contact-form';

import { Toaster } from '@/components/ui/Toast';
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
    {
      icon: Building2,
      title: isDe ? 'Firmenname' : 'Company',
      value: 'Globuss Solutions & Co. GmbH',
    },
    {
      icon: MapPin,
      title: dict.contact.address,
      value: 'Berlin, Germany',
    },
    {
      icon: Phone,
      title: isDe ? 'Telefon' : 'Phone',
      value: '+49 (0) 152 260 88296',
      href: 'tel:+4915226088296',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@globussco.de',
      href: 'mailto:info@globussco.de',
    },
    {
      icon: Clock,
      title: dict.contact.hours,
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  const benefits = isDe
    ? [
        'Schnelle Antwort innerhalb von 24 Stunden',
        'Kostenlose Erstberatung',
        'Maßgeschneiderte Lösungen',
        'Persönlicher Ansprechpartner',
      ]
    : [
        'Quick response within 24 hours',
        'Free initial consultation',
        'Tailored solutions',
        'Dedicated contact person',
      ];

  return (
    <>
      <Toaster />
      <section className="gradient-hero pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {dict.contact.title}
            </span>
            <h1 className="mb-6 mt-2 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {dict.contact.subtitle}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              {dict.contact.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                {isDe ? 'Kontaktinformationen' : 'Contact Information'}
              </h2>

              <div className="mb-10 space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="rounded-xl bg-secondary p-6">
                <h3 className="mb-4 font-bold text-foreground">
                  {isDe ? 'Warum uns kontaktieren?' : 'Why Contact Us?'}
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.0927254792!2d13.259738366253092!3d52.50651326442618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm dict={dict} isDe={isDe} />
          </div>
        </div>
      </section>
    </>
  );
}
