'use client';
import React, { forwardRef } from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
};

const baseClasses =
  'w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const sizeMap = {
  sm: 'h-10 text-sm',
  md: 'h-12 text-sm',
  lg: 'h-14 text-base',
} as const;

type SizeKey = keyof typeof sizeMap;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error, size = 'md', id, required, ...props }, ref) => {
    const sizeCls = sizeMap[(size as SizeKey) ?? 'md'] ?? sizeMap.md;

    const classes = [baseClasses, sizeCls, className].filter(Boolean).join(' ');

    return (
      <div>
        {label ? (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {label} {required ? '*' : ''}
          </label>
        ) : null}

        <input id={id} ref={ref} className={classes} {...props} />

        {error ? (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export default Input;
