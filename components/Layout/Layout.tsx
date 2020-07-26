import React, { ReactNode } from 'react'

import { Header, Body, Footer } from './Layout.styled'

type Props = {
  children: ReactNode
  className?: string
}

const Layout = ({ children, className }: Props) => (
  <div className={className}>{children}</div>
)

Layout.Header = ({ children, className }: Props) => (
  <Header className={className}>{children}</Header>
)

Layout.Body = ({ children, className }: Props) => (
  <Body className={className}>{children}</Body>
)

Layout.Footer = ({ children, className }: Props) => (
  <Footer className={className}>{children}</Footer>
)

export default Layout
