import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Button from '@/components/ui/Button';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n.config';
import productPepper from '@/assets/products/pepper.jpg';
import productAromatic from '@/assets/products/aromatic.jpg';
import productGround from '@/assets/products/ground.jpg';
import productBlends from '@/assets/products/blends.jpg';
import productOliveOil from '@/assets/products/olive-oil.jpg';
import productSunflowerOil from '@/assets/products/sunflower-oil.jpg';
import productPalmOil from '@/assets/products/palm-oil.jpg';
import packingImg from '@/assets/packing.jpg';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const items = dict.products.items;

  const productImages: Record<string, StaticImageData> = {
    pepper: productPepper,
    aromatic: productAromatic,
    ground: productGround,
    blends: productBlends,
    oliveOil: productOliveOil,
    sunflowerOil: productSunflowerOil,
    palmOil: productPalmOil,
  };

  const rows = ['forms', 'pack', 'qc', 'docs', 'lead'] as const;

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

      <section className="bg-background py-24">
        <div className="container mx-auto space-y-12 px-4">
          {items
            .filter(({ tag }) => tag !== 'oils')
            .map((item, i) => (
              <article
                key={item.id}
                className="card-hover animate-fade-in grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-5"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative min-h-[280px] lg:col-span-2 lg:min-h-0">
                  <Image
                    src={productImages[item.id]}
                    alt={dict.products.items[i].title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/85 via-primary/55 to-primary/10" />
                  <div className="relative flex h-full flex-col justify-between p-10 text-primary-foreground md:p-12">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest opacity-90">
                        - {dict.products.items[i].tag}
                      </span>
                      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                        {dict.products.items[i].title}
                      </h2>
                    </div>
                    <p className="mt-8 text-sm uppercase tracking-widest opacity-90">
                      {dict.products.items[i].origins}
                    </p>
                  </div>
                </div>
                <div className="p-10 md:p-12 lg:col-span-3">
                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {dict.products.items[i].desc}
                  </p>
                  <dl className="divide-y divide-border">
                    {rows.map((r) => {
                      const label = dict.products.label[r];
                      const value =
                        r === 'forms' || r === 'pack'
                          ? dict.products.items[i][r]
                          : dict.products.label[
                              `${r}Value` as keyof typeof dict.products.label
                            ];

                      return (
                        <div key={r} className="grid grid-cols-3 gap-4 py-3">
                          <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                            {label}
                          </dt>
                          <dd className="col-span-2 text-sm text-foreground">
                            {value}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Edible Oils */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              — {dict.products.oils.eyebrow}
            </span>
            <h2 className="mb-6 mt-4 font-serif text-3xl font-semibold leading-tight md:text-5xl">
              {dict.products.oils.title}
            </h2>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              {dict.products.oils.intro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              if (item.tag !== 'oils') return null;
              return (
                <article
                  key={item.id}
                  className="card-hover animate-fade-in group flex flex-col overflow-hidden rounded-2xl border border-border bg-background text-foreground"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={productImages[item.id]}
                      alt={item.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                        {dict.products.items[i].origins}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="mb-1 font-serif text-2xl font-semibold leading-tight">
                      {dict.products.items[i].title}
                    </h3>
                    <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                      {dict.products.items[i].origins}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {dict.products.items[i].desc}
                    </p>
                    <dl className="mt-auto space-y-3 border-t border-border pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {dict.products.items[i].forms}
                          </dt>
                          <dd className="mt-1 text-sm leading-snug text-foreground">
                            {dict.products.items[i].forms}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {dict.products.items[i].pack}
                          </dt>
                          <dd className="mt-1 text-sm leading-snug text-foreground">
                            {dict.products.items[i].pack}
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                • {dict.products.own.eyebrow}
              </span>
              <h2 className="mb-6 mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {dict.products.own.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {dict.products.own.body}
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link href={`/${locale}/contact`}>{dict.products.own.cta}</Link>
              </Button>
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={packingImg}
                alt={dict.products.own.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {dict.products.quote.title}
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            {dict.products.quote.body}
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href={`/${locale}/contact`} className="group">
              {dict.products.quote.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
