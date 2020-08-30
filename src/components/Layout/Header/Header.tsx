import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'

import { TSpreadProps } from '@typings/commonPropTypes'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Header = ({ ...props }: TSpreadProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const width = useWindowWidth()

  useEffect(() => {
    process.browser && width > 768 ? setIsMobile(false) : setIsMobile(true)
  }, [width])

  return <header {...props}>{isMobile ? <NavMobile /> : <NavDesktop />}</header>
}

export default Header
