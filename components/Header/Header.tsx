'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { useState } from 'react';

import { Locale } from '@/lib/i18n.config';
import { Dictionary } from '@/types/dictionary';
import globussLogo from '@/assets/globuss-logo.png';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Header({ locale, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    const fullPath = `/${locale}${path}`;
    if (path === '/') return pathname === fullPath;
    return pathname.startsWith(fullPath);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPathname;
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"
      role="banner"
    >
      {/* Top bar */}
      <div className="hidden bg-primary py-2 text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@globusssolutions.de"
              className="focus-ring flex items-center gap-2 rounded transition-opacity hover:opacity-80"
              aria-label="Send email to info@globusssolutions.de"
            >
              <Mail className="size-4" aria-hidden="true" />
              info@globusssolutions.de
            </a>
            <a
              href="tel:+49123456789"
              className="focus-ring flex items-center gap-2 rounded transition-opacity hover:opacity-80"
              aria-label="Call +49 123 456 789"
            >
              <Phone className="size-4" aria-hidden="true" />
              +49 123 456 789
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="focus-ring flex items-center gap-2 rounded px-2 py-1 font-medium transition-opacity hover:opacity-80"
            aria-label={`Switch to ${locale === 'en' ? 'German' : 'English'}`}
          >
            <Globe className="size-4" aria-hidden="true" />
            {locale === 'en' ? 'Deutsch' : 'English'}
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className="mx-auto max-w-screen-2xl px-4 py-4"
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
              width={48}
              height={48}
              className="size-12 object-contain"
              aria-hidden="true"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground">
                Globuss Solutions
              </span>
              <span className="block text-xs leading-tight text-muted-foreground">
                & Co. GmbH • We run what others move
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const label = dict.navigation[item.key];
              const base = 'relative transition-colors py-2 font-medium';
              const activeClass = isActive(item.href)
                ? 'text-primary'
                : 'text-foreground hover:text-primary';
              return (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`${base} ${activeClass}`}
                >
                  {label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Switch to ${locale === 'en' ? 'German' : 'English'}`}
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
              {navItems.map((item) => {
                const label = dict.navigation[item.key];
                const base = 'py-2 font-medium transition-colors';
                const activeClass = isActive(item.href)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary';
                return (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${base} ${activeClass}`}
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-4 py-2 text-sm text-muted-foreground">
                <a
                  href="mailto:info@globusssolutions.de"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@globusssolutions.de
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
