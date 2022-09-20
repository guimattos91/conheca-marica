import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackDiv = styled.div`
  background-color: white;
  border-radius: 0.25rem;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #343a40;
  &:hover {
    color: #343a40;
  }
`

export const TextStyled = styled.p`
  color: #6c757d;
  font-size: small;
`
export const H2Styled = styled.h2`
  color: #343a40;
  font-size: 18px;
  &:hover {
    color: #343a40;
    text-decoration: underline;
  }
`
