import Link from 'next/link';
import { FileQuestion, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col items-center justify-center bg-background font-sans antialiased">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
          <div className="animate-fade-in mb-6 rounded-full bg-muted p-6">
            <FileQuestion
              className="h-12 w-12 text-primary"
              aria-hidden="true"
            />
          </div>

          <h1 className="animate-fade-in animation-delay-100 mb-2 text-5xl font-bold tracking-tight text-foreground">
            404
          </h1>

          <h2 className="animate-fade-in animation-delay-200 mb-4 text-2xl font-semibold text-muted-foreground">
            Page Not Found
          </h2>

          <p className="animate-fade-in animation-delay-300 mb-8 max-w-md text-muted-foreground">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link
            href="/en"
            className="animate-fade-in animation-delay-400 group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
