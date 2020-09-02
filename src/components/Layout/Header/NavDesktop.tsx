import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from './HeaderLink'

const NavDesktop = () => {
  return (
    <nav className="justify-center hidden max-w-screen-md grid-flow-col gap-6 py-4 mx-auto text-sm font-bold md:flex font-body md:text-base text-monochrome-800">
      {INTERNAL_LINKS_LIST.map(({ href, label, emoji }) => {
        return (
          <HeaderLink key={label} label={label} href={href} emoji={emoji} />
        )
      })}
    </nav>
  )
}

export default NavDesktop
