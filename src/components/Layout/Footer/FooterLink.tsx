import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

const FooterLink = ({ children, className, href }: Props) => {
  return (
    <a className={clsx('font-bold hover:text-white', className)} href={href}>
      {children}
    </a>
  )
}

export default FooterLink
