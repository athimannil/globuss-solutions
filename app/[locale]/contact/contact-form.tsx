'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

import { useToast } from '@/components/ui/Toast';
import { Dictionary } from '@/types/dictionary';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface ContactFormProps {
  dict: Dictionary;
  isDe: boolean;
}

export function ContactForm({ dict, isDe }: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.querySelector('#name') as HTMLInputElement)?.value,
      email: (form.querySelector('#email') as HTMLInputElement)?.value,
      phone: (form.querySelector('#phone') as HTMLInputElement)?.value,
      company: (form.querySelector('#company') as HTMLInputElement)?.value,
      industry: (form.querySelector('#industry') as HTMLSelectElement)?.value,
      message: (form.querySelector('#message') as HTMLTextAreaElement)?.value,
      locale: isDe ? 'de' : 'en',
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast({
          title: isDe ? 'Nachricht gesendet!' : 'Message sent!',
          description: isDe
            ? 'Wir melden uns schnellstmöglich bei Ihnen.'
            : "We'll get back to you as soon as possible.",
          variant: 'success',
        });
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        toast({
          title: isDe ? 'Fehler beim Senden' : 'Send failed',
          description:
            json?.error ||
            (isDe
              ? 'Bitte versuchen Sie es später erneut.'
              : 'Please try again later.'),
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error('Contact form error', err);
      toast({
        title: isDe ? 'Fehler beim Senden' : 'Send failed',
        description: isDe
          ? 'Bitte versuchen Sie es später erneut.'
          : 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-fit rounded-2xl border border-border bg-card p-8 shadow-lg lg:sticky lg:top-32 lg:p-10">
      <h2 className="mb-2 text-2xl font-bold text-foreground">
        {isDe ? 'Senden Sie uns eine Nachricht' : 'Send us a Message'}
      </h2>
      <p className="mb-8 text-muted-foreground">
        {isDe
          ? 'Füllen Sie das Formular aus und wir melden uns bei Ihnen.'
          : 'Fill out the form and we will get back to you.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="name"
            label={dict.contact.form.name}
            placeholder="John Doe"
            required
          />
          <Input
            id="email"
            type="email"
            label={dict.contact.form.email}
            placeholder="john@company.com"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            id="phone"
            type="tel"
            label={dict.contact.form.phone}
            placeholder="+49 (0) 152 260 88296"
          />
          <Input
            id="company"
            label={dict.contact.form.company}
            placeholder="Company GmbH"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {dict.contact.form.message} *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder={isDe ? 'Ihre Nachricht...' : 'Your message...'}
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            isDe ? (
              'Wird gesendet...'
            ) : (
              'Sending...'
            )
          ) : (
            <>
              {dict.contact.form.submit}
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
