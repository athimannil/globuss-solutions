import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

import { Locale } from '@/lib/i18n.config';
import { Dictionary } from '@/types/dictionary';
import globussLogo from '@/assets/globuss-logo.png';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const services = [
  { key: 'manpower.title', href: '/services' },
  { key: 'recruitment.title', href: '/services' },
  { key: 'staffing.title', href: '/services' },
  { key: 'compliance.title', href: '/services' },
] as const;

const company = [
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'contact', href: '/contact' },
] as const;

const Footer = ({ locale, dict }: FooterProps) => {
  return (
    <footer
      className="bg-foreground text-primary-foreground"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              href={`/${locale}/`}
              className="focus-ring mb-6 flex items-center gap-3 rounded-lg"
              aria-label="Globuss Solutions - Home"
            >
              <Image
                src={globussLogo}
                alt=""
                className="h-12 w-12 rounded-lg bg-white object-contain p-1"
                aria-hidden="true"
              />
              <div>
                <span className="text-lg font-bold">Globuss Solutions</span>
                <span className="block text-xs leading-tight text-primary-foreground/70">
                  We run what others can&apos;t
                </span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed text-primary-foreground/70">
              {dict.footer.description}
            </p>
            <address className="space-y-3 not-italic">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{dict.footer.location}</span>
              </div>
              <a
                href="mailto:info@globussco.de"
                className="focus-ring flex items-center gap-3 rounded text-primary-foreground/70 transition-colors hover:text-accent"
                aria-label="Email us at info@globussco.de"
              >
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>info@globussco.de</span>
              </a>
              <a
                href="tel:+4915226088296"
                className="focus-ring flex items-center gap-3 rounded text-primary-foreground/70 transition-colors hover:text-accent"
                aria-label="Call us at +49 (0) 152 260 88296"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>+49 (0) 152 260 88296</span>
              </a>
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h4 className="mb-6 text-lg font-bold">{dict.footer.services}</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="focus-ring rounded text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {dict.services?.[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company navigation">
            <h4 className="mb-6 text-lg font-bold">{dict.footer.company}</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="focus-ring rounded text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {dict.navigation?.[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{dict.footer.connect}</h4>
            <div className="mb-6 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/globuss-solutions-2796813a1/"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <h5 className="mb-2 font-semibold">{dict.contact.hours}</h5>
              <p className="text-sm text-primary-foreground/70">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Globuss Solutions & Co. GmbH.{' '}
              {dict.footer.rights}
            </p>
            <div className="flex gap-6 text-sm">
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
      </div>
    </footer>
  );
};

export default Footer;
