import { footerNav, site } from '../../data/site'
import { Container } from '../layout/Container'

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden rounded-t-[48px] bg-night text-cloud"
    >
      <Container className="pt-[clamp(56px,6vw,88px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10">
          <div className="min-w-0 sm:col-span-2">
            <h2 className="m-0 text-[2em] leading-[1.05] tracking-[-0.02em] text-paper">
              Let&apos;s talk about what you need.
            </h2>
            <p className="mt-4">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <a href={site.phone.href} className="btn btn-light mt-5 min-h-[52px] px-6">
              Call {site.phone.label}
            </a>
          </div>

          {footerNav.map((group) => (
            <nav key={group.label} aria-label={group.label}>
              <h3 className="mb-3 mt-0 text-[1em] text-paper">{group.label}</h3>
              <ul className="m-0 grid list-none gap-2 p-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="link-on-dark inline-flex min-h-11 items-center">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 max-w-[50em] border-t border-footer-line pt-6 text-mist">
          We acknowledge the Traditional Custodians of the lands where we live and work across Sydney, and pay our
          respects to Elders past and present.
        </p>
        <p className="mt-3 text-[0.875em] text-placeholder">
          Ã‚Â© 2026 Hourani Enterprises. Registered NDIS provider, ABN 86 645 223 472.
        </p>
        <p
          aria-hidden="true"
          className="wordmark-gradient mb-0 mt-8 whitespace-nowrap font-display text-[17.5vw] font-bold leading-[0.78] tracking-[-0.06em]"
        >
          Hourani
        </p>
      </Container>
    </footer>
  )
}
