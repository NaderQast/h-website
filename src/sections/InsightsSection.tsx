import { insights, site } from '../data/site'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import ndisChanges from '../../Reels/NDIS changes conversation.mp4'
import healthyReward from '../../Reels/Healthy reward systems.mp4'
import employmentSupport from '../../Reels/Employment support boundaries.mp4'
import improvingNdis from '../../Reels/Improving the NDIS.mp4'

const reelVideos: Record<string, string> = {
  'The NDIS changes conversation': ndisChanges,
  'Healthy reward systems': healthyReward,
  'Employment support boundaries': employmentSupport,
  'Four ways to improve the NDIS': improvingNdis,
}

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
              <div className="relative aspect-[9/16] overflow-hidden rounded-bento bg-night">
                <video
                  src={reelVideos[item.title]}
                  title={`Instagram reel: ${item.title}`}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <h3 className="display-card mt-3 text-[1.5em] tracking-[-0.015em] text-paper">{item.title}</h3>
              <p className="mt-2 text-mist">{item.description}</p>
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
