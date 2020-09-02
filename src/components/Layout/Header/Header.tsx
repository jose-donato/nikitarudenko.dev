import { TSpreadProps } from '@typings/commonPropTypes'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Header = ({ ...props }: TSpreadProps) => {
  return (
    <header {...props}>
      <NavMobile />
      <NavDesktop />
    </header>
  )
}

export default Header
