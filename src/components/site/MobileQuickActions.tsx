import { site } from '../../data/site'

export function MobileQuickActions() {
  return (
    <nav
      id="quick-actions"
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-[max(18px,env(safe-area-inset-bottom))] z-40 flex gap-1.5 rounded-full bg-white/[0.92] p-1.5 backdrop-blur-[16px] md:hidden"
    >
      <a
        href={site.phone.href}
        className="flex h-[50px] flex-1 items-center justify-center rounded-full font-bold text-ink no-underline hover:text-ink"
      >
        Call us
      </a>
      <a
        href="#refer"
        className="flex h-[50px] flex-[1.4] items-center justify-center rounded-full bg-ink font-bold text-paper no-underline hover:text-paper"
      >
        Make a referral
      </a>
    </nav>
  )
}
