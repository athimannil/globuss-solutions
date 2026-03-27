export type Variant =
  | 'default'
  | 'ghost'
  | 'hero'
  | 'heroOutline'
  | 'accent'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'link';

export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'icon';

const baseClass =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<Variant, string> = {
  default:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  hero: 'bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg hover:shadow-glow transform hover:-translate-y-0.5 font-semibold',
  heroOutline:
    'border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm',
  accent:
    'bg-accent text-accent-foreground hover:bg-accent-hover shadow-md hover:shadow-glow',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline:
    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 rounded-md px-3',
  md: 'h-10 px-4 py-2',
  lg: 'h-12 rounded-md px-8 text-base',
  xl: 'h-14 px-10 text-lg rounded-lg',
  icon: 'h-10 w-10',
};

export function buttonVariants({
  variant = 'default',
  size = 'md',
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return [baseClass, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');
}
