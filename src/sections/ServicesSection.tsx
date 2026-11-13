import { site } from '../data/site'
import { EnayaMark } from '../components/brand/EnayaMark'
import { JobsRusMark } from '../components/brand/JobsRusMark'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

const jobsRusTags = ['SLES training', '1:1 job coaching', 'Work trials', 'Employer engagement', 'Weekend activities']
const enayaTags = ['Personal care', 'Daily living', 'Life skills', 'Community outings']

export function ServicesSection() {
  return (
    <Section
      id="services"
      labelledBy="services-title"
      className="-mt-12 rounded-t-hero-lg bg-surface section-pad"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 id="services-title" className="display-section m-0 min-w-0 flex-[1_1_520px] text-[clamp(2.4em,5vw,4.5em)]">
            Two services. One team behind both.
          </h2>
          <p className="m-0 min-w-0 flex-[0_1_26em] text-[1.125em] text-muted">
            Same values, same screening, same office. Move between work and care support without starting again.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            id="work"
            href={site.jobsRusUrl}
            className="relative flex min-h-[520px] min-w-0 flex-[7_1_520px] flex-col overflow-hidden rounded-panel bg-jr-blue p-[clamp(28px,3vw,44px)] text-paper no-underline hover:text-paper"
          >
            <div
              aria-hidden="true"
              className="aurora -bottom-40 -right-[120px] h-[520px] w-[520px] bg-[radial-gradient(circle,rgba(169,179,255,0.45),rgba(169,179,255,0)_65%)]"
            />
            <span className="relative flex items-center gap-3.5">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-card bg-paper">
                <JobsRusMark className="h-[33px] w-[50px]" title="JobsRUs logo" />
              </span>
              <span className="text-[1.125em] font-bold">JobsRUs</span>
            </span>
            <span className="display-section relative mt-auto max-w-[11ch] text-[clamp(2.4em,4.4vw,4em)]">
              Your goal, our target.
            </span>
            <span className="relative mt-4 max-w-[30em] text-jr-soft-text">
              Personalised NDIS employment support, from building job skills to a role that suits you and lasts.
            </span>
            <span className="relative mt-6 flex flex-wrap gap-2">
              {jobsRusTags.map((tag) => (
                <span key={tag} className="tag font-normal">
                  {tag}
                </span>
              ))}
            </span>
            <span className="btn btn-light relative mt-7 min-h-[52px] self-start px-6 text-jr-blue">
              Visit jobsrus.com.au
            </span>
          </a>

          <a
            id="care"
            data-brand="enaya"
            href={site.enayaUrl}
            className="relative flex min-h-[520px] min-w-0 flex-[5_1_400px] flex-col overflow-hidden rounded-panel bg-en-purple p-[clamp(28px,3vw,44px)] text-paper no-underline hover:text-paper"
          >
            <div
              aria-hidden="true"
              className="aurora -left-[140px] -top-[180px] h-[480px] w-[480px] bg-[radial-gradient(circle,rgba(255,214,240,0.4),rgba(255,214,240,0)_65%)]"
            />
            <span className="relative flex items-center gap-3.5">
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-paper">
                <EnayaMark className="h-16 w-16" />
              </span>
              <span className="text-[1.125em] font-bold">Enaya</span>
            </span>
            <span className="display-section relative mt-auto max-w-[11ch] text-[clamp(2.4em,4.4vw,4em)]">
              Care, on your terms.
            </span>
            <span className="relative mt-4 max-w-[28em] text-en-soft-text">
              Everyday support at home and out in the community, shaped around your routines and culture.
            </span>
            <span className="relative mt-6 flex flex-wrap gap-2">
              {enayaTags.map((tag) => (
                <span key={tag} className="tag border-white/[0.34] font-normal">
                  {tag}
                </span>
              ))}
            </span>
            <span className="btn btn-light relative mt-7 min-h-[52px] self-start px-6 text-en-purple-deep">
              Visit enaya.com.au
            </span>
          </a>

          <div className="flex min-w-0 flex-[5_1_340px] flex-col gap-6 rounded-panel bg-paper p-8">
            <h3 className="display-card m-0 text-[1.75em]">Every worker passes 3-step screening</h3>
            <ol aria-label="Screening steps" className="m-0 flex list-none items-center gap-0 p-0">
              <li className="flex flex-1 flex-col gap-2">
                <span className="h-2 rounded-l-full bg-jr-blue" />
                <span className="text-[0.9375em]">Interview</span>
              </li>
              <li className="flex flex-1 flex-col gap-2 pl-1">
                <span className="h-2 bg-blend-mid" />
                <span className="text-[0.9375em]">Checks</span>
              </li>
              <li className="flex flex-1 flex-col gap-2 pl-1">
                <span className="h-2 rounded-r-full bg-en-purple" />
                <span className="text-[0.9375em]">Fit with you</span>
              </li>
            </ol>
            <p className="m-0 text-muted">Then regular training, so your program stays on track.</p>
          </div>

          <div className="flex min-w-0 flex-[3_1_240px] flex-col justify-between gap-4 rounded-panel bg-jr-tint-2 p-8">
            <p className="display-section m-0 text-[5em] leading-[0.85] text-jr-blue">14</p>
            <p className="m-0">NDIS registration groups, across employment, daily living and community participation.</p>
          </div>

          <a
            href="#reviews"
            className="flex min-w-0 flex-[4_1_280px] flex-col justify-between gap-6 rounded-panel bg-ink p-8 text-paper no-underline hover:text-paper"
          >
            <span className="flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((index) => (
                <svg key={index} width="22" height="22" viewBox="0 0 24 24" fill="var(--en-star)">
                  <path d="M12 3.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L12 16.9l-5.25 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                </svg>
              ))}
            </span>
            <span className="display-card text-[1.75em]">Read our live Google reviews, good and bad</span>
            <span className="link-underline font-bold text-jr-link-text">See reviews</span>
          </a>
        </div>
      </Container>
    </Section>
  )
}
