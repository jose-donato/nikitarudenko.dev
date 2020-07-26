import Link from 'next/link'
import React from 'react'

import { HeroSection, HeroHeading, HeroSubheading, Emoji } from './Hero.styled'

const Hero = (): JSX.Element => {
  return (
    <HeroSection>
      <HeroHeading>
        <span>Hey! My name is </span>
        <Link href="/about">
          <a>Nikita Rudenko</a>
        </Link>{' '}
        <Emoji>👋</Emoji>
      </HeroHeading>
      <HeroSubheading>I love to build things</HeroSubheading>
    </HeroSection>
  )
}

export default Hero
