import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  href: string
  label: string
  icon: ReactNode
  className?: string
}

const ExtLink = ({ href, label, icon, className }: Props) => {
  return (
    <a
      href={href}
      className={clsx(
        'inline-flex text-sm items-center px-2 py-1 font-bold text-white rounded-md hover:opacity-75',
        className
      )}
    >
      <span className="mr-1">{label}</span>
      <span>{icon}</span>
    </a>
  )
}

export default ExtLink
