import { useCallback, useEffect, useRef, useState } from 'react'
import { navLinks, site } from '../../data/site'
import { HouraniMark } from '../brand/HouraniMark'
import { TextSizeToggle, type TextSize } from '../ui/TextSizeToggle'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  textSize: TextSize
  onTextSizeChange: (value: TextSize) => void
}

function MobileMenu({ open, onClose, textSize, onTextSizeChange }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) onClose()
    }

    media.addEventListener('change', onChange)

    return () => media.removeEventListener('change', onChange)
  }, [onClose])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const container = dialogRef.current
      if (!container) return

      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      )

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last || !container.contains(active)) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-night text-paper lg:hidden"
    >
      <div
        aria-hidden="true"
        className="aurora -bottom-56 -left-32 h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(143,83,161,0.55),rgba(143,83,161,0)_62%)]"
      />

      <div className="relative px-3 pt-3">
        <header className="glass-bar flex items-center justify-between rounded-full py-1.5 pl-3.5 pr-1.5">
          <a href="#top" aria-label="Hourani Enterprises home" className="flex items-center gap-2 text-paper">
            <HouraniMark className="h-[27px] w-8" />
            <span className="font-display text-[16px] font-bold">Hourani</span>
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="btn min-h-11 border border-white/40 px-[18px] text-paper"
          >
            Close
          </button>
        </header>
      </div>

      <nav aria-label="Main" className="relative px-5 pt-7">
        <ul className="m-0 list-none p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="flex min-h-16 items-center font-display text-[44px] font-semibold tracking-[-0.04em] text-paper no-underline hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative mx-5 mt-5 flex items-center justify-between">
        <span className="text-mist">Text size</span>
        <TextSizeToggle value={textSize} onChange={onTextSizeChange} />
      </div>

      <div className="relative mt-auto flex flex-col gap-2 px-3 pb-[18px]">
        <div className="flex gap-2">
          <a
            href={site.jobsRusUrl}
            className="flex-1 rounded-[22px] bg-jr-blue p-4 text-paper no-underline hover:text-paper"
          >
            <strong className="block">JobsRUs</strong>
            <span className="text-[15px] text-jr-soft-text">Help with work</span>
          </a>
          <a
            href={site.enayaUrl}
            className="flex-1 rounded-[22px] bg-en-purple p-4 text-paper no-underline hover:text-paper"
          >
            <strong className="block">Enaya</strong>
            <span className="text-[15px] text-en-soft-text">Care at home</span>
          </a>
        </div>
        <a href="#refer" onClick={onClose} className="btn btn-light h-14">
          Make a referral
        </a>
        <a href={site.phone.href} className="flex h-12 items-center justify-center font-bold text-paper">
          Call {site.phone.label}
        </a>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [textSize, setTextSize] = useState<TextSize>('normal')
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    window.requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [])

  useEffect(() => {
    document.documentElement.dataset.textSize = textSize
  }, [textSize])

  useEffect(() => {
    const targets = [
      document.getElementById('site-header'),
      document.querySelector('main'),
      document.querySelector('footer'),
      document.getElementById('quick-actions'),
    ]

    for (const target of targets) {
      if (!target) continue
      if (menuOpen) target.setAttribute('inert', '')
      else target.removeAttribute('inert')
    }

    return () => {
      for (const target of targets) target?.removeAttribute('inert')
    }
  }, [menuOpen])

  return (
    <>
      <header id="site-header" className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[1360px] px-3 pt-3 sm:px-[clamp(16px,3vw,40px)] sm:pt-5">
          <div className="glass-bar flex items-center gap-3 rounded-full p-1.5 pl-3.5 sm:gap-7 sm:p-2 sm:pl-5">
            <a href="#top" aria-label="Hourani Enterprises home" className="flex items-center gap-2 text-paper sm:gap-2.5">
              <HouraniMark className="h-[27px] w-8 sm:h-8 sm:w-[38px]" />
              <span className="hidden font-display text-[1.125em] font-bold tracking-[-0.01em] sm:inline">
                Hourani Enterprises
              </span>
              <span className="font-display text-[16px] font-bold sm:hidden">Hourani</span>
            </a>

            <nav aria-label="Main" className="hidden flex-1 flex-wrap justify-center gap-x-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-cloud no-underline hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:block">
                <TextSizeToggle value={textSize} onChange={setTextSize} />
              </div>
              <a href="#refer" className="btn btn-light hidden min-h-12 px-[22px] sm:inline-flex">
                Make a referral
              </a>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="btn btn-light min-h-11 px-[18px] lg:hidden"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu
          open={menuOpen}
          onClose={closeMenu}
          textSize={textSize}
          onTextSizeChange={setTextSize}
        />
      </div>
    </>
  )
}
