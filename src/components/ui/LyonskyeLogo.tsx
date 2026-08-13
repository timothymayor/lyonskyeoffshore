import React from 'react';

interface LyonskyeLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'monochrome' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LyonskyeLogo: React.FC<LyonskyeLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20'
  };

  const isWhite = variant === 'white';
  const primaryNavy = isWhite ? '#FFFFFF' : '#0E213E';
  const oceanBlue = isWhite ? '#A9B3BE' : '#163A63';
  const amberAccent = '#D99A27';
  const textMain = isWhite ? '#FFFFFF' : '#FFFFFF';
  const textSub = isWhite ? '#A9B3BE' : '#A9B3BE';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Crest */}
      <svg
        className={`${sizeClasses[size]} w-auto shrink-0 transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lyonskye Offshore Marine Logo Crest"
      >
        {/* Outer Circular Nautical Rope / Compass Rim */}
        <circle cx="60" cy="60" r="56" stroke={amberAccent} strokeWidth="2.5" strokeDasharray="3 2" />
        <circle cx="60" cy="60" r="51" stroke={oceanBlue} strokeWidth="3" />
        <circle cx="60" cy="60" r="48" fill={primaryNavy} stroke={amberAccent} strokeWidth="1" />

        {/* Technical Coordinate Tick Marks */}
        <line x1="60" y1="9" x2="60" y2="15" stroke={amberAccent} strokeWidth="2" />
        <line x1="60" y1="105" x2="60" y2="111" stroke={amberAccent} strokeWidth="2" />
        <line x1="9" y1="60" x2="15" y2="60" stroke={amberAccent} strokeWidth="2" />
        <line x1="105" y1="60" x2="111" y2="60" stroke={amberAccent} strokeWidth="2" />

        {/* Outer Arched Rim Text Backdrop */}
        <path d="M 22,60 A 38,38 0 1,1 98,60 A 38,38 0 1,1 22,60" fill="none" id="logoTextPath" />

        {/* Heraldic Shield / Inner Emblem */}
        <path
          d="M 60 22 C 78 22 84 30 84 45 C 84 68 60 84 60 84 C 60 84 36 68 36 45 C 36 30 42 22 60 22 Z"
          fill="#163A63"
          stroke={amberAccent}
          strokeWidth="1.5"
        />

        {/* Lion Silhouette Emblem */}
        <path
          d="M 54 36 C 54 34 56 32 60 32 C 64 32 66 34 66 36 C 68 35 71 36 71 39 C 71 42 68 44 65 44 C 66 47 64 50 60 50 C 56 50 54 47 55 44 C 52 44 49 42 49 39 C 49 36 52 35 54 36 Z"
          fill={amberAccent}
        />
        {/* Lion Crown */}
        <path d="M 56 30 L 60 26 L 64 30 L 62 31 L 60 29 L 58 31 Z" fill={amberAccent} />

        {/* Offshore Vessel & Wave Motif */}
        <path
          d="M 42 62 L 78 62 L 74 70 L 46 70 Z"
          fill={amberAccent}
          stroke={primaryNavy}
          strokeWidth="0.8"
        />
        {/* Superstructure / Bridge */}
        <rect x="52" y="54" width="16" height="8" fill="#FFFFFF" rx="1" />
        <rect x="56" y="50" width="8" height="4" fill={amberAccent} />

        {/* Ocean Wave Lines Below Vessel */}
        <path d="M 32 76 Q 42 72 52 76 T 72 76 T 92 76" stroke="#23557F" strokeWidth="2" strokeLinecap="round" />
        <path d="M 38 82 Q 48 78 58 82 T 78 82 T 88 82" stroke={amberAccent} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Typography Section (Hidden in 'icon' mode) */}
      {variant !== 'icon' && (
        <div className="flex flex-col leading-none">
          <span className="font-serif tracking-wider font-bold text-lg md:text-xl text-white uppercase flex items-center gap-1.5">
            LYONSKYE
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D99A27]" />
          </span>
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] font-medium text-[#A9B3BE] uppercase mt-0.5">
            OFFSHORE MARINE LTD.
          </span>
          <span className="text-[8px] font-sans tracking-[0.15em] text-[#D99A27]/90 font-semibold uppercase mt-0.5">
            NIMASA CERTIFIED
          </span>
        </div>
      )}
    </div>
  );
};
