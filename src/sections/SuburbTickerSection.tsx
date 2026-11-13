import { serviceAreas } from '../data/site'
import { Section } from '../components/layout/Section'

type TickerRowProps = {
  hidden?: boolean
}

function TickerRow({ hidden }: TickerRowProps) {
  return (
    <p
      aria-hidden={hidden || undefined}
      className="m-0 whitespace-nowrap pr-12 font-display text-[clamp(1.75em,3vw,2.75em)] font-medium tracking-[-0.02em] text-ink"
    >
      {serviceAreas.map((area) => (
        <span key={area}>
          {area} <span className="text-en-purple">/</span>{' '}
        </span>
      ))}
    </p>
  )
}

export function SuburbTickerSection() {
  return (
    <Section
      label="Where we work"
      className="overflow-hidden border-y border-line-strong bg-paper py-7"
    >
      <div className="flex w-max animate-marquee">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </Section>
  )
}
