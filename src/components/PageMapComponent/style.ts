import { IoIosPin } from 'react-icons/io'
import styled from 'styled-components'

export const FaMapMarkerStyled = styled(IoIosPin)`
  transform: translate(-50%, -200%);
`

export const TextStyled = styled.p`
  margin: 0px 10px 10px 0px;
  background-color: #32a852;
  color: white;
  flex: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const ButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`
export const StyledH1 = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`
export const BackDiv = styled.div`
  position: absolute;
  top: 110px;
  left: 15px;
  display: inline-block;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px;
  z-index: 1;
`
export const DivMap = styled.div`
  position: fixed;
  z-index: 0;
`
