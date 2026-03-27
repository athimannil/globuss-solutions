import { Locale } from '@/lib/i18n.config';

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
    ? 'Impressum | Globuss Solutions & Co. GmbH'
    : 'Imprint | Globuss Solutions & Co. GmbH';

  const description = isDe
    ? 'Impressum und rechtliche Informationen der Globuss Solutions & Co. GmbH'
    : 'Imprint and legal information of Globuss Solutions & Co. GmbH';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/imprint`,
      siteName: 'Globuss Solutions',
      images: [`${SITE_URL}/og-default.png`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/imprint`,
      languages: { de: '/de/imprint', en: '/en/imprint' },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isDe = locale === 'de';

  return (
    <>
      <section className="gradient-hero pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              {isDe ? 'Impressum' : 'Legal Notice'}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {isDe
                ? 'Angaben gemäß § 5 TMG'
                : 'Information pursuant to § 5 TMG'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-3xl">
            <article className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Anbieter' : 'Provider'}
                </h2>
                <address className="space-y-2 not-italic text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    Globuss Solutions & Co. GmbH
                  </p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                  <p>Germany</p>
                </address>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Kontakt' : 'Contact'}
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      {isDe ? 'Telefon' : 'Phone'}:
                    </span>{' '}
                    <a
                      href="tel:+49123456789"
                      className="transition-colors hover:text-accent"
                    >
                      +49 123 456 789
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{' '}
                    <a
                      href="mailto:info@globusssolutions.de"
                      className="transition-colors hover:text-accent"
                    >
                      info@globusssolutions.de
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Handelsregister' : 'Commercial Register'}
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">
                      {isDe ? 'Registergericht' : 'Register Court'}:
                    </span>{' '}
                    Amtsgericht Berlin-Charlottenburg
                  </p>
                  <p>
                    <span className="font-medium text-foreground">
                      {isDe ? 'Registernummer' : 'Registration Number'}:
                    </span>{' '}
                    HRB 123456
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Geschäftsführung' : 'Management'}
                </h2>
                <p className="text-muted-foreground">
                  {isDe ? 'Geschäftsführer' : 'Managing Director'}: Max
                  Mustermann
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Umsatzsteuer-ID' : 'VAT ID'}
                </h2>
                <p className="text-muted-foreground">
                  {isDe
                    ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz'
                    : 'VAT identification number according to § 27 a of the Value Added Tax Act'}
                  :
                </p>
                <p className="mt-2 font-medium text-foreground">DE123456789</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe
                    ? 'Verantwortlich für den Inhalt'
                    : 'Responsible for Content'}
                </h2>
                <p className="text-muted-foreground">
                  {isDe
                    ? 'gemäß § 55 Abs. 2 RStV'
                    : 'according to § 55 Abs. 2 RStV'}
                  :
                </p>
                <address className="mt-2 not-italic text-muted-foreground">
                  <p>Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                </address>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? 'Haftungsausschluss' : 'Disclaimer'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {isDe ? 'Haftung für Inhalte' : 'Liability for Content'}
                    </h3>
                    <p>
                      {isDe
                        ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                        : 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {isDe ? 'Haftung für Links' : 'Liability for Links'}
                    </h3>
                    <p>
                      {isDe
                        ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine Gewähr übernehmen.'
                        : 'Our website contains links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this external content.'}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
