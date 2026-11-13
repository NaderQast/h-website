import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

const cultureTags = ['Alcohol and pork free spaces', 'Your plan, your say', 'Staff who speak [languages]']

export function CultureSection() {
  return (
    <Section labelledBy="culture-title" className="bg-paper pb-[clamp(64px,7vw,112px)]">
      <Container>
        <div className="relative flex flex-wrap items-center gap-x-16 gap-y-10 overflow-hidden rounded-[40px] bg-night p-[clamp(28px,4vw,64px)] text-surface">
          <div
            aria-hidden="true"
            className="aurora -right-[200px] -top-[200px] h-[640px] w-[640px] bg-[radial-gradient(circle,rgba(143,83,161,0.5),rgba(143,83,161,0)_62%)]"
          />
          <div className="relative flex min-h-[440px] min-w-0 flex-[1_1_420px] items-center justify-center rounded-bento bg-[linear-gradient(160deg,var(--blend-slate),var(--blend-plum))] p-6 text-center text-[0.875em] text-placeholder">
            [Photo: participants and staff at Home Base, Bankstown]
          </div>
          <div className="relative min-w-0 flex-[1_1_440px]">
            <h2 id="culture-title" className="display-sub m-0 text-[clamp(2.2em,4vw,3.75em)] text-paper">
              Guided by Islamic values. Open to every family.
            </h2>
            <p className="mt-5 max-w-[32em] text-[1.125em] text-mist">
              Most of our team and the families we support share an Islamic background. We also believe our differences
              make us stronger.
            </p>
            <ul className="m-0 mt-8 flex list-none flex-wrap gap-2.5 p-0">
              {cultureTags.map((tag) => (
                <li key={tag} className="rounded-full border border-white/16 bg-white/[0.08] px-[18px] py-3">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
