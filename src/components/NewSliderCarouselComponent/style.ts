import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

export const RatioResponsive = styled(Ratio)`
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`
export const ArrowDivPrevious = styled.button`
  border: none;
  position: absolute;
  left: 0;
  top: 10em;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  color: white;
`
export const ArrowDiv = styled.button`
  border: none;
  position: absolute;
  right: 0;
  top: 10em;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  color: white;
`
