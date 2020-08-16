import { createElement, ReactNode } from 'react'

import { TRenderProps } from '@typings/commonPropTypes'

const fontSizeMap: {
  [x: string]: string
} = {
  h1: 'text-3xl md:text-4xl',
  h2: 'text-2xl md:text-3xl',
  h3: 'text-xl md:text-2xl',
  h4: 'text-lg md:text-xl',
  h5: 'text-base md:text-lg',
  h6: 'text-base md:text-base',
}

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
  children: ReactNode
  variant: HeadingVariant
}

const Heading = ({ children, variant }: Props) => {
  return createElement(
    variant,
    {
      className: `${fontSizeMap[variant]} mt-8 mb-0 font-bold`,
      foo: 'bar',
    },
    children
  )
}

const createHeading = (variant: HeadingVariant) => ({
  children,
}: TRenderProps) => <Heading variant={variant}>{children}</Heading>

export default createHeading
