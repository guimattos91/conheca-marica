import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

export const RatioResponsive = styled(Ratio)`
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`
export const InputStyled = styled.input`
  background-color: white;
  border: none;
  outline: none;
`
export const SearchDiv = styled.div`
  border: 1px solid #2d6d7f;
  color: #6ebd00;
  border-radius: 2rem;
  background-color: white;
  padding: 5px 15px;
  border-image-repeat: no-repeat;
`

export const ButtonStyled = styled.button`
  background: none;
  color: #333;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`
