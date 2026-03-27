'use client';

import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
} from 'react';

import { buttonVariants, type Variant, type Size } from './variants';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      asChild = false,
      variant = 'default',
      size = 'md',
      ...props
    },
    ref
  ) => {
    const classes = buttonVariants({ variant, size, className });

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<unknown>;
      const existingClass = (child.props as { className?: string })?.className;

      // Merge props and className
      const childProps: Record<string, unknown> = {
        ...props,
        className: [existingClass, classes].filter(Boolean).join(' '),
      };

      // Only attach ref for intrinsic elements (button, a, div, etc.)
      if (typeof child.type === 'string') {
        (childProps as { ref: typeof ref }).ref = ref;
      }

      return cloneElement(child, childProps);
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, Button as default };
