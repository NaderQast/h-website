import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

export function CareersSection() {
  return (
    <Section id="careers" labelledBy="careers-title" className="section-pad">
      <Container>
        <div className="relative flex flex-wrap items-end justify-between gap-x-16 gap-y-8 overflow-hidden rounded-[40px] bg-[linear-gradient(120deg,var(--jr-blue)_0%,var(--blend-mid)_50%,var(--en-purple)_100%)] p-[clamp(32px,5vw,72px)] text-paper">
          <div className="min-w-0 flex-[1_1_520px]">
            <h2 id="careers-title" className="display-hero m-0 text-[clamp(2.6em,6vw,5.5em)] text-paper">
              Work with people who show up.
            </h2>
            <p className="mt-5 max-w-[32em] text-[1.125em] text-blend-text">
              We&apos;re hiring caring, reliable support workers across Sydney. You&apos;ll be screened, trained and
              matched with participants who suit you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#roles" className="btn btn-light min-h-14 px-7 text-jr-blue">
              See open roles
            </a>
            <a href="#apply" className="btn btn-outline-light min-h-14 px-7">
              Register interest
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
