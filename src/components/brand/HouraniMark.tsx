type BrandMarkProps = {
  className?: string
  title?: string
}

export function HouraniMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M0 0H83V21H25V40H95V0H120V100H95V60H25V79H83V100H0Z" fill="var(--he-line)" />
      <path d="M25 21H83V0H95V40H25Z" fill="var(--en-purple)" />
      <path d="M25 60H95V100H83V79H25Z" fill="var(--en-purple)" />
    </svg>
  )
}
