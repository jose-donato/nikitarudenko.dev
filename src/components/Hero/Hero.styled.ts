import styled, { css } from 'styled-components'

export const HeroSection = styled.section`
  ${({ theme: { colors } }) => css`
    padding: 9.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    color: ${colors.white};
    background-color: ${colors.charcoalBlack};
  `}
`

export const HeroHeading = styled.h1`
  ${({ theme: { colors, font } }) => css`
    font-family: ${font.family.display};
    font-size: ${font.size.display2};
    font-weight: ${font.weight.bold};

    > a {
      border-bottom: 6px solid ${colors.minionYellow};

      &:hover {
        background-color: ${colors.minionYellow};
        color: ${colors.charcoalBlack};
      }
    }
  `}
`

export const HeroSubheading = styled.h2`
  ${({ theme: { font } }) => css`
    font-family: ${font.family.body};
    font-size: ${font.size.headline2};
  `}
`

export const Emoji = styled.span`
  display: inline-block;

  &:hover {
    transform: rotate(20deg);
  }
`
