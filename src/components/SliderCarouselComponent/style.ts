import { Ratio } from 'react-bootstrap'
import styled from 'styled-components'

interface IImageCarouselBackground {
  image: string
}

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
export const DivSmallSlider = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 10px;
`

export const ImageCarouselBackground = styled.div<IImageCarouselBackground>`
  background-image: url(${(props) => props.image});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 0px;
  width: 50%;
  top: auto;
  right: auto;
  padding-bottom: 100%;
  background-position: center center;
  background-attachment: unset;
`
