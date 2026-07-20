interface LogoProps {
  variant?: 'header' | 'menu'
  className?: string
}

export function Logo({ variant = 'header', className = '' }: LogoProps) {
  const height = variant === 'header' ? 40 : 34

  return (
    <svg
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      width={height * 4.6}
      height={height}
      viewBox="0 0 320 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kuber Payment"
      role="img"
    >
      <g transform="translate(22 22)">
        <path
          d="M0 -14c-4.5 2.8-7.5 7.5-7.5 13 0 3.2 1 6.2 2.8 8.7"
          stroke="#c4a052"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M0 -14c4.5 2.8 7.5 7.5 7.5 13 0 3.2-1 6.2-2.8 8.7"
          stroke="#c4a052"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M-10 2c2.5-5 7-8 10-8s7.5 3 10 8"
          stroke="#c4a052"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M-12 10c3.5-4.5 8.5-7 12-7s8.5 2.5 12 7"
          stroke="#c4a052"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M-8 18c3-3.5 7.5-5.5 10-5.5s7 2 10 5.5"
          stroke="#c4a052"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M0 -18 1  -14.5h3.2l-2.6 1.9 1 3.1L0 -13.1l-2.6 1.9 1-3.1-2.6-1.9H-1z"
          fill="#7a2332"
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="#c4a052"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="13"
          fontWeight="700"
        >
          K
        </text>
      </g>

      <text
        x="52"
        y="29"
        fill="#c4a052"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="23"
        fontWeight="600"
        letterSpacing="1"
      >
        KUBER
      </text>
      <text
        x="170"
        y="29"
        fill="#7a2332"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="23"
        fontWeight="600"
        letterSpacing="1"
      >
        PAYMENT
      </text>
    </svg>
  )
}
