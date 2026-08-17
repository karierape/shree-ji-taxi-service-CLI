import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  className = '',
  fullWidth = false,
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all';

  const variants = {
    primary: 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700 shadow-lg shadow-saffron-500/30 hover:shadow-saffron-500/50',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/30',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
