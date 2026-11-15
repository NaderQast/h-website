import { useState } from 'react'
import { site } from '../data/site'
import { EnayaMark } from '../components/brand/EnayaMark'
import { JobsRusMark } from '../components/brand/JobsRusMark'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

type PickerChoice = 'work' | 'care' | 'refer'

const choices = [
  { id: 'work', label: 'Finding or keeping a job' },
  { id: 'care', label: 'Support at home or in the community' },
  { id: 'refer', label: "I'm referring a participant" },
] as const

export function HeroSection() {
  const [picked, setPicked] = useState<PickerChoice>('work')

  return (
    <Section id="top" labelledBy="hero-title" className="overflow-hidden bg-night text-surface pb-[120px] pt-[104px] md:pt-5">
      <div
        aria-hidden="true"
        className="aurora -left-[180px] -top-[260px] h-[820px] w-[820px] animate-drift bg-[radial-gradient(circle_at_center,rgba(47,61,154,0.75),rgba(47,61,154,0)_65%)]"
      />
      <div
        aria-hidden="true"
        className="aurora -right-[260px] top-[180px] h-[900px] w-[900px] animate-drift-reverse bg-[radial-gradient(circle_at_center,rgba(143,83,161,0.6),rgba(143,83,161,0)_62%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      <Container className="relative">
        <div aria-hidden="true" className="hidden h-16 md:block" />

        <h1
          id="hero-title"
          className="display-hero m-0 animate-rise text-[54px] leading-[0.9] text-paper md:mt-[clamp(56px,8vw,112px)] md:animate-none md:text-[clamp(3.4em,9.6vw,9.25em)] md:leading-[0.88]"
        >
          <span className="md:block md:animate-rise" style={{ animationDelay: '120ms' }}>
            Support for work
          </span>{' '}
          <span className="md:block md:animate-rise" style={{ animationDelay: '240ms' }}>
            and for home.
          </span>
        </h1>

        <div className="mt-[18px] flex animate-rise flex-wrap items-end justify-between gap-6 [animation-delay:120ms] md:mt-[clamp(32px,4vw,48px)] md:gap-x-12 md:[animation-delay:380ms]">
          <p className="m-0 w-full min-w-0 text-[1em] leading-[1.5] text-mist md:w-auto md:max-w-[34em] md:flex-[1_1_420px] md:text-[1.25em]">
            <span className="md:hidden">
              JobsRUs and Enaya: two registered NDIS services, one Bankstown team.
            </span>
            <span className="hidden md:inline">
              Hourani Enterprises runs JobsRUs and Enaya: two registered NDIS services, one Bankstown team, supporting
              participants across Sydney.
            </span>
          </p>
          <div className="hidden flex-wrap items-center gap-3 md:flex md:gap-x-5">
            <a href="#find" className="btn btn-en min-h-14 px-7">
              Find the right support
            </a>
            <a href={site.phone.href} className="link-white">
              Call {site.phone.label}
            </a>
          </div>
        </div>

        <div className="mt-6 animate-rise rounded-bento border border-white/16 bg-white/[0.07] p-[18px] backdrop-blur-[22px] [animation-delay:240ms] md:hidden">
          <h2 className="m-0 font-display text-[22px] font-semibold tracking-[-0.02em] text-paper">
            What do you need help with?
          </h2>
          <div className="mt-3.5 flex flex-col gap-2">
            <a
              href={site.jobsRusUrlRef}
              className="flex min-h-14 cursor-pointer items-center justify-between rounded-card bg-jr-blue px-4 font-bold text-paper no-underline hover:text-paper"
            >
              Finding or keeping a job
              <span className="font-normal text-jr-soft-text">JobsRUs</span>
            </a>
            <a
              href={site.enayaUrlRef}
              className="flex min-h-14 cursor-pointer items-center justify-between rounded-card bg-en-purple px-4 font-bold text-paper no-underline hover:text-paper"
            >
              Support at home
              <span className="font-normal text-en-soft-text">Enaya</span>
            </a>
            <a
              href="#refer"
              className="flex min-h-14 items-center justify-between rounded-card border border-white/30 px-4 font-bold text-paper no-underline hover:text-paper"
            >
              I&apos;m referring someone
              <span className="font-normal text-mist">Intake</span>
            </a>
          </div>
        </div>

        <div
          id="find"
          className="mt-[clamp(40px,5vw,64px)] hidden animate-rise flex-wrap gap-4 md:flex"
          style={{ animationDelay: '520ms' }}
        >
          <div className="relative flex min-h-[560px] min-w-0 flex-[1.7_1_560px] overflow-hidden rounded-panel border border-white/10 bg-[linear-gradient(160deg,var(--blend-slate)_0%,var(--blend-navy)_55%,var(--blend-plum)_100%)]">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.875em] text-placeholder">
              [Photo: the Hourani Enterprises team, from the current site]
            </span>
            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-night/[0.62] px-4 py-2.5 text-[0.9375em] text-paper backdrop-blur-[14px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--jr-focus)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Registered NDIS provider
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-night/[0.62] px-4 py-2.5 text-[0.9375em] text-paper backdrop-blur-[14px]">
                Every worker screened in 3 steps
              </span>
            </div>
          </div>

          <div className="glass flex min-w-0 flex-[1_1_380px] flex-col rounded-panel p-[clamp(24px,2.4vw,32px)]">
            <h2 className="m-0 text-[1.75em] leading-[1.1] tracking-[-0.02em] text-paper">
              What do you need help with?
            </h2>

            <div role="radiogroup" aria-label="What do you need help with?" className="mt-5 flex flex-col gap-2">
              {choices.map((choice) => {
                const selected = picked === choice.id

                return (
                  <button
                    key={choice.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setPicked(choice.id)}
                    className={`flex min-h-[60px] cursor-pointer items-center gap-3.5 rounded-card border px-[18px] text-left text-paper transition-colors ${
                      selected ? 'border-white/70 bg-white/[0.16]' : 'border-white/15 bg-white/[0.03]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-paper"
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${selected ? 'bg-paper' : 'bg-transparent'}`}
                      />
                    </span>
                    {choice.label}
                  </button>
                )
              })}
            </div>

            <div aria-live="polite" className="mt-auto pt-5">
              {picked === 'work' && (
                <div className="rounded-[22px] bg-jr-blue p-[22px] text-paper">
                  <div className="flex items-center gap-3">
                    <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-card bg-paper">
                      <JobsRusMark className="h-[27px] w-10" title="JobsRUs logo" />
                    </span>
                    <span>
                      <strong className="block text-[1.125em]">JobsRUs</strong>
                      <span className="text-jr-soft-text">SLES, job coaching and work trials</span>
                    </span>
                  </div>
                  <a
                    href={site.jobsRusUrlRef}
                    className="btn btn-light mt-[18px] min-h-[52px] cursor-pointer text-jr-blue hover:text-jr-blue"
                  >
                    Go to JobsRUs
                  </a>
                </div>
              )}

              {picked === 'care' && (
                <div data-brand="enaya" className="rounded-[22px] bg-en-purple p-[22px] text-paper">
                  <div className="flex items-center gap-3">
                    <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full bg-paper">
                      <EnayaMark className="h-[52px] w-[52px]" />
                    </span>
                    <span>
                      <strong className="block text-[1.125em]">Enaya</strong>
                      <span className="text-en-soft-text">Personal care, daily living and outings</span>
                    </span>
                  </div>
                  <a
                    href={site.enayaUrlRef}
                    className="btn btn-light mt-[18px] min-h-[52px] cursor-pointer text-en-purple-deep hover:text-en-purple-deep"
                  >
                    Go to Enaya
                  </a>
                </div>
              )}

              {picked === 'refer' && (
                <div className="rounded-[22px] bg-paper p-[22px] text-ink">
                  <strong className="block text-[1.125em]">One referral reaches both teams</strong>
                  <span className="text-muted">
                    Our intake team works out whether JobsRUs, Enaya or both are the right fit.
                  </span>
                  <a href="#refer" className="btn btn-dark mt-[18px] flex min-h-[52px] w-full">
                    Start a referral
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
