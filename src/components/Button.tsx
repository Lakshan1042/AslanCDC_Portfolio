import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-aslan-teal focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none max-w-full';

  const variantStyles = {
    primary: 'bg-aslan-teal text-white hover:bg-aslan-teal-dark shadow-aslan-sm hover:shadow-aslan-md',
    secondary: 'bg-aslan-sage text-aslan-charcoal hover:bg-aslan-sage-light shadow-aslan-sm',
    accent: 'bg-aslan-peach text-aslan-charcoal hover:bg-aslan-peach-light shadow-aslan-sm',
    outline: 'border-2 border-aslan-teal text-aslan-teal hover:bg-aslan-teal-soft',
    ghost: 'text-aslan-teal hover:bg-aslan-teal-soft',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base gap-2',
    lg: 'px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
      <span className="truncate">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />}
    </button>
  );
};
