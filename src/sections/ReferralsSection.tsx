import { referralSteps, site } from '../data/site'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

const stepBg = {
  jr: 'bg-jr-blue',
  blend: 'bg-blend-mid',
  en: 'bg-en-purple',
} as const

const stepLine = {
  jr: 'bg-[linear-gradient(90deg,#2F3D9A,#6D4DA1)]',
  blend: 'bg-[linear-gradient(90deg,#5B4BA0,#8F53A1)]',
  en: '',
} as const

export function ReferralsSection() {
  return (
    <Section id="refer" labelledBy="refer-title" className="section-pad">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 id="refer-title" className="display-section m-0 min-w-0 flex-[1_1_520px] text-[clamp(2.4em,5vw,4.5em)]">
            Referrals, made simple.
          </h2>
          <p className="m-0 min-w-0 flex-[0_1_26em] text-[1.125em] text-muted">
            For support coordinators, plan managers, LACs and families. One referral reaches both teams.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <ol className="relative m-0 grid min-w-0 flex-[2_1_620px] list-none grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-6 gap-y-8 rounded-panel bg-paper p-[clamp(24px,3vw,40px)]">
            {referralSteps.map((step) => (
              <li key={step.number} className="relative">
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-display text-[1.25em] font-bold text-paper ${stepBg[step.tone]}`}
                  >
                    {step.number}
                  </span>
                  {stepLine[step.tone] && (
                    <span aria-hidden="true" className={`h-0.5 flex-auto ${stepLine[step.tone]}`} />
                  )}
                </span>
                <strong className="display-card mt-5 block text-[1.5em] tracking-[-0.015em]">{step.title}</strong>
                <span className="mt-1.5 block text-muted">{step.description}</span>
              </li>
            ))}
          </ol>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4 rounded-panel bg-jr-blue p-[clamp(24px,3vw,36px)] text-paper">
            <h3 className="display-card m-0 text-[1.75em]">Ready to refer?</h3>
            <p className="m-0 text-jr-soft-text">
              It takes about [X] minutes. Questions first? Call our intake team on{' '}
              <a href={site.phone.href} className="link-white">
                {site.phone.label}
              </a>
              .
            </p>
            <a href="#refer-form" className="btn btn-light mt-auto min-h-14 text-jr-blue">
              Open the referral form
            </a>
            <a href="#policies" className="link-white text-center">
              Read our policies and procedures
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
