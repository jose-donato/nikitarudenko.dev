import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.charcoalBlack};
    border-bottom: 1px solid #010101;
    height: 6rem;
  `}
`

export const Body = styled.main`
  margin: 0 auto;
`

export const Footer = styled.footer`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.charcoalBlack};
  `}
`
