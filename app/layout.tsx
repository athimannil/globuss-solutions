import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Globuss Solutions',
  description: 'A static website for Globuss Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
