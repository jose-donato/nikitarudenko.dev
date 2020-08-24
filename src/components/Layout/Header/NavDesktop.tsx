import LINKS from '@constants/links'

import HeaderLink from './HeaderLink'

const NavDesktop = () => {
  return (
    <nav className="flex justify-center max-w-screen-md grid-flow-col gap-6 py-4 mx-auto text-sm font-bold font-body md:text-base text-monochrome-800">
      {LINKS.map(({ href, label, emoji }) => {
        return (
          <HeaderLink key={label} label={label} href={href} emoji={emoji} />
        )
      })}
    </nav>
  )
}

export default NavDesktop
