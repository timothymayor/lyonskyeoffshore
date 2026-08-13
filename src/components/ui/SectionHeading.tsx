import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lightBackground?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
  lightBackground = false
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-3 ${centered ? 'justify-center' : ''} ${lightBackground ? 'text-[#163A63]' : 'text-[#D99A27]'}`}>
          <span className="inline-block w-2 h-2 rounded-full bg-[#D99A27]" />
          <span>{eyebrow}</span>
          <span className="inline-block w-8 h-[1px] bg-[#D99A27]/60" />
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] ${lightBackground ? 'text-[#0E213E]' : 'text-white'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg font-sans font-normal leading-relaxed ${lightBackground ? 'text-[#717D8D]' : 'text-[#A9B3BE]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
