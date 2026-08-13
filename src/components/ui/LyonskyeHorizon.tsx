import React from 'react';

interface LyonskyeHorizonProps {
  className?: string;
  variant?: 'subtle' | 'accent' | 'grid';
  height?: number;
}

export const LyonskyeHorizon: React.FC<LyonskyeHorizonProps> = ({
  className = '',
  variant = 'subtle',
  height = 40
}) => {
  const isAccent = variant === 'accent';
  const lineColor = isAccent ? '#D99A27' : '#23557F';
  const gridColor = isAccent ? 'rgba(217, 154, 39, 0.15)' : 'rgba(113, 125, 141, 0.12)';

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      <svg
        className="w-full h-auto block"
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Background Technical Latitude Grid Lines */}
        <line x1="0" y1="10" x2="1200" y2="10" stroke={gridColor} strokeWidth="1" strokeDasharray="4 4" />
        <line x1="0" y1="30" x2="1200" y2="30" stroke={gridColor} strokeWidth="1" />
        <line x1="0" y1="50" x2="1200" y2="50" stroke={gridColor} strokeWidth="1" strokeDasharray="4 4" />

        {/* Compass / Longitude Coordinate Ticks */}
        {Array.from({ length: 25 }).map((_, i) => (
          <line
            key={i}
            x1={i * 50}
            y1="25"
            x2={i * 50}
            y2="35"
            stroke={gridColor}
            strokeWidth="1.5"
          />
        ))}

        {/* Primary Ocean Horizon Sine Wave */}
        <path
          d="M 0 30 Q 300 15 600 30 T 1200 30"
          stroke={lineColor}
          strokeWidth="1.5"
          strokeOpacity={isAccent ? "0.9" : "0.5"}
          fill="none"
        />

        {/* Secondary Navigation Vector Wave */}
        <path
          d="M 0 35 Q 250 48 550 32 T 1200 25"
          stroke="#D99A27"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Vessel Horizon Position Indicator */}
        <circle cx="600" cy="30" r="3" fill="#D99A27" />
        <circle cx="600" cy="30" r="7" stroke="#D99A27" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    </div>
  );
};
