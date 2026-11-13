import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type SectionProps = {
  id?: string
  labelledBy?: string
  label?: string
  className?: string
  children: ReactNode
}

export function Section({ id, labelledBy, label, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      className={cx('relative', className)}
    >
      {children}
    </section>
  )
}
