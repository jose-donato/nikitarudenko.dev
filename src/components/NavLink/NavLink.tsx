import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

function NavLink({ href, children, className }: Props) {
  return (
    <Link href={href}>
      <a className={clsx('flex items-center justify-center', className)}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
