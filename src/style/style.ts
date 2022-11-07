import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const MainStyled = styled.main`
  background-color: #f5f5f5;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    color: white;
  }
`
export const TextDescription = styled.p`
  margin-top: 1rem;
`
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
  }
`
