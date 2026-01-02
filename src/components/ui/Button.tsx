import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lsai-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.02] active:scale-[0.98]',
          {
            'bg-lsai-red text-white hover:bg-red-700 shadow-sm': variant === 'primary',
            'bg-white text-lsai-red border border-lsai-red hover:bg-gray-50': variant === 'secondary',
            'bg-transparent text-lsai-black hover:text-lsai-red hover:bg-gray-100/50 underline-offset-4 hover:underline': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-10 px-6 py-2': size === 'md',
            'h-12 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
