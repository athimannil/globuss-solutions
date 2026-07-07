'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import { Locale } from '@/lib/i18n.config';
import { Dictionary } from '@/types/dictionary';
import globussLogo from '@/assets/globuss-logo.png';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const navItems = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'products', href: '/products' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header({ locale, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    const fullPath = `/${locale}${path}`;
    if (path === '/') return pathname === fullPath;
    return pathname?.startsWith(fullPath);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    const newPathname = pathname?.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname ?? '/'}`;
    window.location.href = newPathname;
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
      role="banner"
    >
      {/* Top bar */}
      <div className="hidden bg-primary py-2 text-primary-foreground lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@globussco.de"
              className="focus-ring flex items-center gap-2 rounded transition-opacity hover:opacity-80"
              aria-label="Send email to info@globussco.de"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              info@globussco.de
            </a>
            <a
              href="tel:+4915226088296"
              className="focus-ring flex items-center gap-2 rounded transition-opacity hover:opacity-80"
              aria-label="Call +49 (0) 152 260 88296"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +49 (0) 152 260 88296
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="focus-ring flex items-center gap-2 rounded px-2 py-1 font-medium transition-opacity hover:opacity-80"
            aria-label={`Switch to ${locale === 'en' ? 'German' : 'English'}`}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {locale === 'en' ? 'Deutsch' : 'English'}
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className="container mx-auto px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="focus-ring flex items-center gap-3 rounded-lg"
            aria-label="Globuss Solutions - Home"
          >
            <Image
              src={globussLogo}
              alt=""
              className="h-12 w-12 object-contain"
              aria-hidden="true"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground">
                Globuss Solutions
              </span>
              <span className="block text-xs leading-tight text-muted-foreground">
                {dict.brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {dict.navigation?.[item.key]}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            ))}
            <Button variant="hero" size="lg" asChild>
              <Link href={`/${locale}/contact`}>{dict.hero.cta.primary}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              {locale.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-fade-in mt-4 border-t border-border pb-4 pt-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {dict.navigation?.[item.key]}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 text-sm text-muted-foreground">
                <a
                  href="mailto:info@globussco.de"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@globussco.de
                </a>
              </div>
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <Link href={'/contact'} onClick={() => setIsMenuOpen(false)}>
                  {dict.hero.cta.primary}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
