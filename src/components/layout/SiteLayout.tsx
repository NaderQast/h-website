import type { ReactNode } from 'react'
import { MobileQuickActions } from '../site/MobileQuickActions'
import { SiteFooter } from '../site/SiteFooter'
import { SiteHeader } from '../site/SiteHeader'
import { SkipLink } from './SkipLink'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-surface">
      <SkipLink />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <MobileQuickActions />
    </div>
  )
}
