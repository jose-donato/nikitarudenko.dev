import clsx from 'clsx'

type Props = {
  label: string
  color?: string
}

const Tag = ({ label, color = 'monochrome' }: Props) => {
  return (
    <div
      className={clsx(
        'inline text-sm font-bold font-body px-1',
        color && `text-${color}-600`
      )}
    >
      #{label}
    </div>
  )
}

export default Tag
