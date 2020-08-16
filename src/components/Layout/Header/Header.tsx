import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'

import { TSpreadProps } from '@typings/commonPropTypes'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = ({ ...props }: TSpreadProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const width = useWindowWidth()

  useEffect(() => {
    process.browser && width > 768 ? setIsMobile(false) : setIsMobile(true)
  }, [width])

  return <header {...props}>{isMobile ? <MobileNav /> : <DesktopNav />}</header>
}

export default Header
