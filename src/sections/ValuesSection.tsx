import { values } from '../data/site'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'

const toneClass = {
  blue: 'text-transparent [-webkit-text-stroke:2px_#2F3D9A]',
  soft: 'text-transparent [-webkit-text-stroke:2px_#4A47A0]',
  warm: 'text-transparent [-webkit-text-stroke:2px_#6D4DA1]',
  purple: 'text-en-purple',
} as const

export function ValuesSection() {
  return (
    <Section id="about" labelledBy="values-title" className="bg-paper section-pad">
      <Container>
        <h2 id="values-title" className="display-section m-0 max-w-[14ch] text-[clamp(2.4em,5vw,4.5em)]">
          We believe our clients are heroes.
        </h2>

        <ul className="m-0 mt-14 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-6 gap-y-8 p-0">
          {values.map((value) => (
            <li key={value.letter} className="border-t border-line-strong pt-3">
              <span
                aria-hidden="true"
                className={`block font-display text-[clamp(7em,12vw,11em)] font-bold leading-[0.85] tracking-[-0.05em] ${toneClass[value.tone]}`}
              >
                {value.letter}
              </span>
              <strong className="mt-4 block text-[1.25em]">{value.name}</strong>
              <span className="mt-1 block text-muted">{value.description}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
