import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'gradient';
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
  const baseStyles = 'inline-flex items-center justify-center font-heading font-extrabold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none max-w-full';

  const variantStyles = {
    primary: 'bg-amber-400 hover:bg-amber-500 text-slate-900 border border-amber-500/40 shadow-md shadow-amber-400/30 hover:shadow-lg hover:-translate-y-0.5',
    gradient: 'bg-gradient-to-r from-amber-200 via-amber-300 to-sky-300 text-slate-900 border border-amber-300/50 hover:brightness-105 shadow-md shadow-amber-300/25 hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-aslan-blue text-white hover:bg-aslan-blue-dark shadow-md shadow-aslan-blue/20 hover:shadow-lg hover:-translate-y-0.5',
    accent: 'bg-aslan-mint text-white hover:bg-aslan-mint-dark shadow-md shadow-aslan-mint/20 hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-amber-300 text-slate-800 bg-white/90 hover:bg-amber-100 hover:text-amber-950 shadow-sm hover:-translate-y-0.5',
    ghost: 'text-aslan-blue hover:bg-aslan-blue/10',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base gap-2',
    lg: 'px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-lg gap-2.5',
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


