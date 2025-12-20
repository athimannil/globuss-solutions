'use client';

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'destructive';
}

const TOAST_EVENT = 'globuss-toast-event';

// 1. Standalone function to trigger toasts (no context needed)
export function toast(props: Omit<Toast, 'id'>) {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent(TOAST_EVENT, { detail: props });
    window.dispatchEvent(event);
  }
}

// 2. Hook wrapper for backward compatibility with your existing code
export const useToast = () => {
  return { toast };
};

// 3. The Component that renders the toasts
export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const customEvent = event as CustomEvent<Omit<Toast, 'id'>>;
      const id = Math.random().toString(36).substring(2, 9);

      setToasts((prev) => [...prev, { ...customEvent.detail, id }]);

      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 5000);
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => window.removeEventListener(TOAST_EVENT, handleToast);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => {
        let variantClasses = 'border bg-background text-foreground';

        if (t.variant === 'destructive') {
          variantClasses =
            'border-destructive bg-destructive text-destructive-foreground';
        } else if (t.variant === 'success') {
          variantClasses = 'border-green-500 bg-green-50 text-green-900';
        }

        return (
          <div
            key={t.id}
            className={`animate-fade-in pointer-events-auto min-w-[300px] rounded-lg border p-4 shadow-lg ${variantClasses}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold">{t.title}</p>
                {t.description && (
                  <p className="mt-1 text-sm opacity-90">{t.description}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(t.id)}
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
