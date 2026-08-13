import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'navy' | 'steel' | 'success';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  className = '',
  icon
}) => {
  const styles = {
    amber: "bg-[#D99A27]/15 text-[#D99A27] border-[#D99A27]/30",
    navy: "bg-[#163A63] text-white border-[#23557F]",
    steel: "bg-[#717D8D]/20 text-[#A9B3BE] border-[#717D8D]/40",
    success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-sans font-semibold tracking-wider uppercase border ${styles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
