import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import { ReactNode } from 'react'

import NavLink from '@components/NavLink'

type Props = {
  href: string
  label: string
  emoji: string | ReactNode
}

function HeaderLink({ label, href, emoji }: Props) {
  const { pathname } = useRouter()

  return (
    <NavLink
      key={label}
      href={href}
      className={clsx(
        'px-3 py-2 border-2 border-gray-500 bg-white border-opacity-25 rounded-md hover-bg-grayout',
        `/${pathname.split('/')[1]}` === href && 'bg-gray-200'
      )}
    >
      <span className="mr-1">{emoji}</span>
      <span>{label}</span>
    </NavLink>
  )
}

export default HeaderLink
