import { insights, site } from '../data/site'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

export function InsightsSection() {
  return (
    <Section labelledBy="insights-title" className="bg-night text-surface section-pad">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <h2 id="insights-title" className="display-section m-0 min-w-0 flex-[1_1_520px] text-[clamp(2.4em,5vw,4.5em)] text-paper">
            Straight talk about the NDIS.
          </h2>
          <a href={site.instagramUrl} className="btn btn-outline-light min-h-[52px] px-6">
            Follow @jobs.are.us
          </a>
        </div>

        <ul
          aria-label="Videos from the team"
          className="m-0 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-0 pb-4 pt-0 list-none"
        >
          {insights.map((item) => (
            <li key={item.title} className="flex-[0_0_300px] snap-start">
              <a href={site.instagramUrl} className="block text-paper no-underline hover:text-paper">
                <span
                  className="relative flex aspect-[9/16] items-end overflow-hidden rounded-bento p-5"
                  style={{ background: item.gradient }}
                >
                  <span className="absolute right-4 top-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/[0.16] backdrop-blur-[10px]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                  <span className="display-card text-[1.5em] tracking-[-0.015em]">{item.title}</span>
                </span>
                <span className="mt-3 block text-mist">{item.description}</span>
              </a>
            </li>
          ))}

          <li className="flex-[0_0_300px] snap-start">
            <a
              href={site.instagramUrl}
              className="flex aspect-[9/16] flex-col justify-end rounded-bento border border-dashed border-white/30 p-6 text-paper no-underline hover:text-paper"
            >
              <span className="display-card text-[1.5em]">More on Instagram</span>
              <span className="mt-2 text-mist">New videos every week</span>
            </a>
          </li>
        </ul>
      </Container>
    </Section>
  )
}
