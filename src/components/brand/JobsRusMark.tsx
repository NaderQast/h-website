type BrandMarkProps = {
  className?: string
  title?: string
}

export function JobsRusMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <g fill="var(--jr-blue)">
        <circle cx="13" cy="15" r="8" />
        <circle cx="57" cy="45" r="5" />
        <rect x="14" y="62" width="16" height="8" rx="2" transform="rotate(-45 22 66)" />
      </g>
      <path d="M50 19A22 22 0 1 0 62 40" fill="none" stroke="var(--jr-blue)" strokeWidth="8" strokeLinecap="round" />
      <g fill="#9CA3AF">
        <circle cx="107" cy="15" r="8" />
        <circle cx="63" cy="45" r="5" />
        <rect x="90" y="62" width="16" height="8" rx="2" transform="rotate(45 98 66)" />
      </g>
      <path d="M70 19A22 22 0 1 1 58 40" fill="none" stroke="#9CA3AF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}
