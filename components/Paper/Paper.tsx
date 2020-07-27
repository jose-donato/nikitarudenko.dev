import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
} from 'react'

import { PaperContainer, PaperContent } from './Paper.styled'

type Props = {
  children: ReactNode
}

const MIN_SCALE = 0.9
const MAX_SCALE = 1
const SCALE_DIFF = MAX_SCALE - MIN_SCALE

const Paper = ({ children }: Props) => {
  const paperRef: MutableRefObject<HTMLElement | null> = useRef(null)
  const [scale, setScale] = useState(MIN_SCALE)

  useEffect(() => {
    window.addEventListener('scroll', calcScale)
    return () => window.removeEventListener('scroll', calcScale)
  })

  function calcScale() {
    if (paperRef && paperRef.current) {
      const toTopOfViewport = paperRef.current.getBoundingClientRect().y
      const toTopOfDocument = window.pageYOffset + toTopOfViewport
      const percentsScrolled = (toTopOfViewport / toTopOfDocument) * 100
      const scaleProgress = (SCALE_DIFF * percentsScrolled) / 100

      setScale(MAX_SCALE - scaleProgress)
    }
  }

  return (
    <PaperContainer
      ref={paperRef}
      scale={scale > MAX_SCALE ? MAX_SCALE : scale}
    >
      <PaperContent>{children}</PaperContent>
    </PaperContainer>
  )
}

export default Paper
