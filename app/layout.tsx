import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Globuss Solutions',
  description: 'Professional staffing solutions',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
