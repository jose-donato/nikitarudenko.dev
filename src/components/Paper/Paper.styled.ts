import styled, { css } from 'styled-components'

type Props = {
  scale: number
}

export const PaperContainer = styled.section.attrs(({ scale }: Props) => ({
  style: {
    transform: `scale3d(${scale}, ${scale}, 1)`,
  },
}))<Props>`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    padding: 4rem;
  `}
`

export const PaperContent = styled.div`
  ${({ theme: { constants } }) => css`
    margin: 0 auto;
    max-width: ${constants.contentWidth};
  `}
`
