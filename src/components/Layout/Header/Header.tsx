import { useWindowSize } from '@react-hook/window-size/throttled'

import { TSpreadProps } from '@typings/commonPropTypes'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = ({ ...props }: TSpreadProps) => {
  const [width] = useWindowSize()

  return (
    <header {...props}>{width > 768 ? <DesktopNav /> : <MobileNav />}</header>
  )
}

export default Header
