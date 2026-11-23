import React from 'react';

// 1. LOGOIPSUM with mirror reflection bars underneath
export function LogoipsumMirror({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 44" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Top Main Solid Logoipsum */}
      <text
        x="0"
        y="18"
        fontFamily="var(--font-archivo), Arial Black, Impact, sans-serif"
        fontSize="19"
        fontWeight="900"
        letterSpacing="0.05em"
      >
        LOGOIPSUM
      </text>
      <text
        x="138"
        y="9"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="7"
        fontWeight="700"
      >
        ®
      </text>

      {/* Sliced Mirrored Reflection Bands */}
      <g opacity="0.38">
        <clipPath id="stripes">
          <rect x="0" y="24" width="160" height="2.5" />
          <rect x="0" y="28.5" width="160" height="2.5" />
          <rect x="0" y="33" width="160" height="2.5" />
          <rect x="0" y="37.5" width="160" height="2" />
        </clipPath>
        <g clipPath="url(#stripes)">
          <text
            x="0"
            y="43"
            transform="scale(1, -1) translate(0, -60)"
            fontFamily="var(--font-archivo), Arial Black, Impact, sans-serif"
            fontSize="19"
            fontWeight="900"
            letterSpacing="0.05em"
          >
            LOGOIPSUM
          </text>
        </g>
      </g>
    </svg>
  );
}

// 2. Logoipsum Signature Script
export function LogoipsumScript({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 44" fill="none" stroke="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 30 C 15 22, 22 10, 28 8 C 32 6, 30 14, 25 26 C 22 34, 18 36, 14 36 C 8 36, 10 28, 14 26"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 24 C 36 20, 42 20, 44 24 C 46 28, 40 32, 34 30 C 30 28, 30 22, 36 20"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M48 24 C 52 20, 58 20, 60 25 C 62 31, 56 38, 50 40 C 46 41, 48 34, 52 27"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M62 26 C 66 22, 70 22, 72 26 C 74 30, 68 32, 64 30"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M76 16 L76 30 M76 12 L76.1 12.1"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M82 22 L82 38 C 82 42, 78 44, 74 44"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M82 25 C 86 21, 92 21, 94 25 C 96 30, 90 32, 84 31"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M98 28 C 100 24, 104 22, 108 24 C 112 26, 110 32, 102 32 C 98 32, 98 28, 106 24"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M114 28 C 116 24, 120 22, 124 24 C 126 26, 126 31, 126 32"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M128 24 C 132 22, 136 24, 138 28 C 140 24, 144 24, 146 28 L 146 32"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Dynamic Hand-Drawn Underline Swash */}
      <path
        d="M12 38 Q 65 34, 150 28"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <text
        x="148"
        y="22"
        fill="currentColor"
        stroke="none"
        fontFamily="sans-serif"
        fontSize="6"
        fontWeight="bold"
      >
        ®
      </text>
    </svg>
  );
}

// 3. Logoipsum Foundation (Interlocking Möbius-style loop rings)
export function LogoipsumFoundation({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Interlocking Rings Symbol */}
      <g transform="translate(6, 6)">
        <path
          d="M 16 4 C 8 4, 2 10, 2 16 C 2 22, 8 28, 16 28 C 21 28, 25 25, 27 21 C 25 21, 23 20, 21 20 C 19 22, 17 23, 15 23 C 11 23, 7 19, 7 16 C 7 13, 11 9, 15 9 C 18 9, 21 11, 23 14 C 25 14, 27 13, 29 13 C 27 8, 22 4, 16 4 Z"
        />
        <path
          d="M 22 4 C 17 4, 13 7, 11 11 C 13 11, 15 12, 17 12 C 19 10, 21 9, 23 9 C 27 9, 31 13, 31 16 C 31 19, 27 23, 23 23 C 20 23, 17 21, 15 18 C 13 18, 11 19, 9 19 C 11 24, 16 28, 22 28 C 30 28, 36 22, 36 16 C 36 10, 30 4, 22 4 Z"
        />
      </g>
      {/* Text: Logoipsum Foundation */}
      <text
        x="52"
        y="21"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="14.5"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        Logoipsum
      </text>
      <text
        x="52"
        y="33"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="0.04em"
        opacity="0.85"
      >
        Foundation
      </text>
    </svg>
  );
}

// 4. Logoipsum Tech / Bold Geometric Slanted Parallelograms
export function LogoipsumTech({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 44" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(18, 8)">
        {/* Slanted Parallelogram Pillars */}
        <polygon points="8,0 16,0 8,26 0,26" />
        <polygon points="17,0 25,0 17,26 9,26" />
        <polygon points="26,0 34,0 26,26 18,26" />
        <polygon points="35,0 43,0 35,26 27,26" />
        <polygon points="44,0 52,0 44,26 36,26" />
        <polygon points="53,0 61,0 53,26 45,26" />
        {/* Mini Trademark Tag */}
        <text
          x="65"
          y="6"
          fontFamily="sans-serif"
          fontSize="6"
          fontWeight="bold"
        >
          ®
        </text>
        <text
          x="58"
          y="25"
          fontFamily="var(--font-inter), sans-serif"
          fontSize="7"
          fontWeight="900"
          letterSpacing="0.08em"
        >
          IPSUM
        </text>
      </g>
    </svg>
  );
}

// 5. Logoipsum Academy (Shield Emblem with Geometric Knot)
export function LogoipsumAcademy({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 44" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Shield Icon */}
      <g transform="translate(10, 6)">
        <path
          d="M 16 2 L 4 7 L 4 18 C 4 25, 9 30, 16 32 C 23 30, 28 25, 28 18 L 28 7 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        {/* Inner 4-Leaf Geometric Knot */}
        <path
          d="M 16 10 C 13 10, 11 12, 11 15 C 11 18, 16 22, 16 22 C 16 22, 21 18, 21 15 C 21 12, 19 10, 16 10 Z"
          fill="currentColor"
        />
        <circle cx="16" cy="16" r="2.2" fill="#FFFFFF" />
      </g>
      {/* Text: Logoipsum Academy */}
      <text
        x="48"
        y="21"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="14.5"
        fontWeight="800"
        letterSpacing="-0.02em"
      >
        Logoipsum
      </text>
      <text
        x="48"
        y="33"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="9.5"
        fontWeight="500"
        letterSpacing="0.04em"
        opacity="0.85"
      >
        Academy
      </text>
    </svg>
  );
}
