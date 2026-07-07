import Link from 'next/link';
import Image from 'next/image';

import { Locale } from '@/lib/i18n.config';
import { Dictionary } from '@/types/dictionary';
import globussLogo from '@/assets/globuss-logo.png';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'contact', href: '/contact' },
] as const;

const Footer = ({ locale, dict }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}/`}
              className="focus-ring mb-6 flex items-center gap-3 rounded-lg"
              aria-label="Globuss Solutions - Home"
            >
              <Image
                src={globussLogo}
                alt="Globuss Solutions Logo"
                className="h-11 w-11 rounded-lg bg-primary-foreground object-contain p-1"
                aria-hidden="true"
              />
              <div className="leading-tight">
                <span className="block font-serif text-lg font-semibold">
                  Globuss Solutions
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-primary-foreground/60">
                  {dict.brand.tagline}
                </span>
              </div>
            </Link>
            <address className="text-sm not-italic leading-relaxed text-primary-foreground/70">
              Globuss Solutions & Co. GmbH
              <br />
              Böhlener Straße 1<br />
              12627 Berlin
            </address>
          </div>

          <nav aria-label="Site navigation">
            <h4 className="mb-6 font-serif text-lg font-semibold">
              {dict.navigation.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {navItems.map((i) => (
                <li key={i.key}>
                  <Link
                    href={`/${locale}${i.href}`}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {dict.navigation[i.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">
              {dict.footer.markets.title}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>{dict.footer.markets.eu}</li>
              <li>{dict.footer.markets.us}</li>
              <li>{dict.footer.markets.me}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold">
              {dict.footer.company}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>HRB 285003 B</li>
              <li>USt-IdNr. DE462214910</li>
              <li>
                <a
                  href="mailto:info@globusssolutions.de"
                  className="transition-colors hover:text-accent"
                >
                  info@globusssolutions.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} Globuss Solutions & Co. GmbH.{' '}
            {dict.footer.rights} {dict.footer.location}.
          </p>
          <div className="flex gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-primary-foreground/50 transition-colors hover:text-accent"
            >
              {dict.navigation.privacy}
            </Link>
            <Link
              href={`/${locale}/imprint`}
              className="text-primary-foreground/50 transition-colors hover:text-accent"
            >
              {dict.navigation.imprint}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
