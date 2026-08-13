import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D99A27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E213E] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none rounded-md";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[38px]",
    md: "px-6 py-3 text-xs sm:text-sm min-h-[46px]",
    lg: "px-8 py-4 text-sm sm:text-base min-h-[54px]"
  };

  const variantStyles = {
    primary: "bg-[#D99A27] text-[#0E213E] hover:bg-[#c2881f] hover:shadow-lg hover:shadow-[#D99A27]/20 border border-[#D99A27]",
    secondary: "bg-[#163A63] text-white hover:bg-[#23557F] border border-[#23557F]",
    outline: "bg-transparent text-white border border-[#717D8D] hover:border-[#D99A27] hover:text-[#D99A27] hover:bg-[#163A63]/30",
    ghost: "bg-transparent text-[#A9B3BE] hover:text-white hover:bg-[#163A63]/40"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2.5 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2.5 shrink-0">{icon}</span>}
    </button>
  );
};
