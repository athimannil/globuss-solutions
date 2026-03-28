import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const title =
    dict.navigation?.privacy ??
    (locale === 'de'
      ? 'Datenschutzerklärung | Globuss Solutions & Co. GmbH'
      : 'Privacy Policy | Globuss Solutions & Co. GmbH');
  const description =
    locale === 'de'
      ? 'Datenschutzerklärung der Globuss Solutions & Co. GmbH. Informationen zur Verarbeitung personenbezogener Daten.'
      : 'Privacy policy of Globuss Solutions & Co. GmbH. Information about the processing of personal data.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://your-domain.com/${locale}/privacy`,
      siteName: 'Globuss Solutions',
      images: ['/og-default.png'],
    },
    alternates: {
      canonical: `https://your-domain.com/${locale}/privacy`,
      languages: { de: '/de/privacy', en: '/en/privacy' },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isDe = locale === 'de';

  return (
    <>
      <section className="gradient-hero pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              {dict.navigation?.privacy ??
                (isDe ? 'Datenschutzerklärung' : 'Privacy Policy')}
            </h1>
            <p className="text-lg text-primary-foreground/90">
              {isDe
                ? 'Informationen zur Verarbeitung personenbezogener Daten'
                : 'Information about the processing of personal data'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <article className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe
                    ? '1. Datenschutz auf einen Blick'
                    : '1. Privacy at a Glance'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="font-semibold text-foreground">
                    {isDe ? 'Allgemeine Hinweise' : 'General Information'}
                  </h3>
                  <p>
                    {isDe
                      ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                      : 'The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can be used to personally identify you.'}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? '2. Verantwortliche Stelle' : '2. Data Controller'}
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    {isDe
                      ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:'
                      : 'The data controller responsible for data processing on this website is:'}
                  </p>
                  <address className="mt-4 not-italic">
                    <p className="font-semibold text-foreground">
                      Globuss Solutions & Co. GmbH
                    </p>
                    <p>Böhlener Straße 1</p>
                    <p>Marzahn-Hellersdorf</p>
                    <p>12627 Berlin</p>
                    <p className="mt-2">
                      Email:{' '}
                      <a
                        href="mailto:datenschutz@globusssolutions.de"
                        className="text-accent hover:underline"
                      >
                        datenschutz@globusssolutions.de
                      </a>
                    </p>
                  </address>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe
                    ? '3. Datenerfassung auf dieser Website'
                    : '3. Data Collection on This Website'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {isDe ? 'Kontaktformular' : 'Contact Form'}
                    </h3>
                    <p>
                      {isDe
                        ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                        : 'When you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provide, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.'}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      Cookies
                    </h3>
                    <p>
                      {isDe
                        ? 'Unsere Website verwendet nur technisch notwendige Cookies. Diese dienen der Funktionalität der Website und werden nicht für Tracking-Zwecke verwendet.'
                        : 'Our website only uses technically necessary cookies. These are used for the functionality of the website and are not used for tracking purposes.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? '4. Ihre Rechte' : '4. Your Rights'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {isDe
                      ? 'Sie haben jederzeit das Recht auf:'
                      : 'You have the right at any time to:'}
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>
                      {isDe
                        ? 'Auskunft über Ihre gespeicherten Daten'
                        : 'Information about your stored data'}
                    </li>
                    <li>
                      {isDe
                        ? 'Berichtigung unrichtiger Daten'
                        : 'Correction of incorrect data'}
                    </li>
                    <li>
                      {isDe ? 'Löschung Ihrer Daten' : 'Deletion of your data'}
                    </li>
                    <li>
                      {isDe
                        ? 'Einschränkung der Verarbeitung'
                        : 'Restriction of processing'}
                    </li>
                    <li>
                      {isDe ? 'Datenübertragbarkeit' : 'Data portability'}
                    </li>
                    <li>
                      {isDe
                        ? 'Widerspruch gegen die Verarbeitung'
                        : 'Object to processing'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? '5. SSL-Verschlüsselung' : '5. SSL Encryption'}
                </h2>
                <p className="text-muted-foreground">
                  {isDe
                    ? 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'
                    : 'This site uses SSL encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and the lock symbol in your browser line.'}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {isDe ? '6. Änderungen' : '6. Changes'}
                </h2>
                <p className="text-muted-foreground">
                  {isDe
                    ? 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.'
                    : 'We reserve the right to update this privacy policy so that it always complies with current legal requirements or to implement changes to our services in the privacy policy.'}
                </p>
                <p className="mt-4 text-muted-foreground">
                  {isDe
                    ? 'Stand: Dezember 2024'
                    : 'Last updated: December 2024'}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
