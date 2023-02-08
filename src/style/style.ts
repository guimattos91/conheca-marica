import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const MainStyled = styled.main`
  background-color: #f5f5f5;
  padding-bottom: 2.5rem;
  min-height: 70vh;
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
    :root{

      };

   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    };

    footer{
      margin-top: auto;
    }
`
