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
  top: 13em;
  float: right;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  color: white;
`
export const ArrowDiv = styled.button`
  border: none;
  position: absolute;
  top: 13em;
  float: left;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  color: white;
`
