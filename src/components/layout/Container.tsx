import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type ContainerProps = {
  className?: string
  children: ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cx('container-site', className)}>{children}</div>
}
