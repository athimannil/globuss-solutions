import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  // const isDe = locale === 'de';
  console.log(dict);

  return (
    <>
      <section className="gradient-hero pb-20 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — Product range
            </span>
            <h1 className="mb-8 mt-4 font-serif text-4xl font-semibold leading-[1.05] text-primary-foreground md:text-6xl">
              Spices, sourced and documented by origin
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              Every product line is sourced from named growing regions permitted
              for EU import, then lab-tested and packed in Berlin under German
              and EU food-safety standards. Documentation prepared to EU, US,
              and GCC import requirements. Available for wholesale and
              private-label inquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <article className="space-y-8">
              <p>Page is under maintenance</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
