import clsx from 'clsx'

type Props = {
  label: string
  color?: string
}

const Tag = ({ label, color = 'mononchrome' }: Props) => {
  return (
    <div
      className={clsx(
        'text inline-block mr-2 text-sm font-bold font-body',
        color && `text-${color}-600`
      )}
    >
      #{label}
    </div>
  )
}

export default Tag
