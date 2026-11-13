import { cx } from '../../lib/cx'

export type TextSize = 'normal' | 'large'

type TextSizeToggleProps = {
  value: TextSize
  onChange: (value: TextSize) => void
  className?: string
}

export function TextSizeToggle({ value, onChange, className }: TextSizeToggleProps) {
  const normal = value === 'normal'

  return (
    <div
      role="group"
      aria-label="Text size"
      className={cx('inline-flex rounded-full bg-white/8 p-[3px]', className)}
    >
      <button
        type="button"
        aria-pressed={normal}
        aria-label="Standard text size"
        onClick={() => onChange('normal')}
        className={cx(
          'min-h-11 min-w-12 rounded-full border-0 font-bold',
          normal ? 'bg-paper text-ink' : 'bg-transparent text-paper',
        )}
      >
        A
      </button>
      <button
        type="button"
        aria-pressed={!normal}
        aria-label="Larger text size"
        onClick={() => onChange('large')}
        className={cx(
          'min-h-11 min-w-12 rounded-full border-0 text-[21px] font-bold',
          normal ? 'bg-transparent text-paper' : 'bg-paper text-ink',
        )}
      >
        A
      </button>
    </div>
  )
}
